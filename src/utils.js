import { get } from "axios";

const PASSION_PROJECTS_URL =
  "https://api.github.com/search/repositories?q=user:waichungwong+topic:passion-project";
const NPM_MODULES_URL =
  "https://api.github.com/search/repositories?q=user:waichungwong+topic:npm-module";

const loadGitHubRepos = async (name, url) => {
  const cachedRepos = getCachedValue(name);

  if (cachedRepos) {
    return cachedRepos;
  }

  try {
    const { data } = await get(url);
    const repos =
      data &&
      data.items
        .sort((a, b) => {
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          return 0;
        })
        .map(d => ({
          name: d.name,
          description: d.description,
          source: d.html_url,
          created: new Date(d.created_at)
        }));

    setCachedValue(name, repos);
    return repos;
  } catch (error) {
    return null;
  }
};

export const getCachedValue = name => {
  if (typeof Storage !== "undefined" && window.sessionStorage) {
    const cachedValue = window.sessionStorage.getItem(name);

    if (cachedValue) {
      try {
        return JSON.parse(cachedValue);
      } catch (error) {
        return null;
      }
    }
  } else {
    return null;
  }
};

export const setCachedValue = (name, value) => {
  if (typeof Storage !== "undefined" && window.sessionStorage) {
    window.sessionStorage.setItem(name, JSON.stringify(value));
  }
};

export const loadPassionProjects = async () =>
  await loadGitHubRepos("passion-projects", PASSION_PROJECTS_URL);

export const loadNPMModules = async () =>
  await loadGitHubRepos("npm-modules", NPM_MODULES_URL);
