export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  homepage: string;
  topics?: string[];
  imageUrl?: string;
}