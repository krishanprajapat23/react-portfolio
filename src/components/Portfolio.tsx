import { useEffect, useState } from "react";
import { Skeleton } from "./index";
import { fetchGitRepos } from "../services/index";
import type { GithubRepo } from "../types/GithubRepo";
import fallbackImg from "../assets/images/fallback.webp";

const Portfolio = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      try {
        const data = await fetchGitRepos("krishanprajapat23", "portfolio");
        // console.log(data);
        setRepos(data);
      } catch (err) {
        console.error("Failed to load portfolio projects.", err);
      } finally {
        setLoading(false);
      }
    };

    getRepos();
  }, []);

  if (loading) {
    return (
      <section className="py-10">
        <div className="p-2 mb-5">
          <h2 className="text-center capitalize">
            What I <span className="group-hover:text-(--primary-color) transition-colors">made.</span>
          </h2>
        </div>
        <PortfolioSkeleton />
      </section>
    );
  }

  return (
    <section id="portfolio" className="group portfolio-section py-20">
      <div className="container mx-auto px-4">
        <div className="p-2 mb-5">
          <h2 className="text-center capitalize">
            What I <span className="group-hover:text-(--primary-color) transition-colors">made.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="group/card card overflow-hidden hover:[background:var(--theme-gradient)] hover:-translate-y-2 hover:rounded-xl transition-all ease-smooth duration-300">
              <span className="block relative overflow-hidden radius-2 before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:opacity-0 before:transition group-hover/card:before:opacity-100">
                <span className="absolute top-[50%] left-[50%] translate-[-50%] fw-bold text-white opacity-0 group-hover/card:opacity-100 transition group-hover/card:translate-y-1">Click to Open &#10532;</span>
                <img
                  src={repo.imageUrl}
                  onError={(event: React.SyntheticEvent<HTMLImageElement>) =>
                    (event.currentTarget.src = fallbackImg)
                  }
                  className="w-full h-48 object-cover object-top rounded mb-4"
                  alt={repo.name}
                />
              </span>

              <h4 className="capitalize mb-2 group-hover/card:text-(--white-color)">{repo.name.replace(/[-_]/g, " ")}</h4>
              {repo.description && <p className="group-hover/card:text-(--primary-t-color)">{repo.description}</p>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PortfolioSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-(--dark-grey-color) p-5 shadow rounded">
          <Skeleton className="w-full h-48 mb-4" />
          <Skeleton className="h-6 w-2/3 mb-2" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
