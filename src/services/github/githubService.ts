import axios from "axios";
import type { GithubRepo } from "../../types/GithubRepo";
import { getCache, setCache } from "./localCache";


const GIT_BASE_URL = "https://api.github.com/users";
const CACHE_KEY_PREFIX = "grepos_";


//  preview file path
export const buildPreviewImageUrl = (
  username: string,
  repoName: string
): string => {
  return `https://raw.githubusercontent.com/${username}/${repoName}/main/preview.png`;
};


// main function
export const fetchGitRepos = async (
  username: string,
  topicFilter: string
): Promise<GithubRepo[]> => {
  const cacheKey = `${CACHE_KEY_PREFIX}${username}_${topicFilter}`;

  // 1 Try cache first
  const cached = getCache<GithubRepo[]>(cacheKey);
   
  if (cached) return cached;

  // 2 Fetch repos
  let repos: GithubRepo[] = [];

  try {
    const res = await axios.get<GithubRepo[]>(
      `${GIT_BASE_URL}/${username}/repos`,
      {
        params: { per_page: 100, sort: "updated" },
        headers: { Accept: "application/vnd.github.mercy-preview+json" },
      }
    );

    repos = res.data;
    
  } catch (err) {
    console.error("GitHub fetch error:", err);   
      // console.log("CACHE KEY →", cacheKey);
      // console.log("LOCALSTORAGE KEYS →", Object.keys(localStorage));
    // return cached ?? []; // fallback to expired cache or empty array

    // Return stale cache if available {if offline}
    const raw = localStorage.getItem(cacheKey);
    if (raw) {
      try {
        // console.log(JSON.parse(raw).data);
        return JSON.parse(raw).data;
      } catch(err) {
        console.warn(err);
      }
    }

    return [];
  }

   // 3 Filter by topic
  const filtered = repos.filter((repo) =>
    repo.topics?.includes(topicFilter)
  );

  // 4 Attach preview image URL 
  const finalRepo = filtered.map((repo) => ({
    ...repo,
    imageUrl: buildPreviewImageUrl(username, repo.name),
  }));

   // Cache results
  setCache(cacheKey, finalRepo);




  return finalRepo;
}