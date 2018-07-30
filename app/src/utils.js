import { get } from "axios";

const INSPIRE_URL =
  "https://api.github.com/search/repositories?q=user:waichungwong+topic:inspiration";
const MODULE_URL =
  "https://api.github.com/search/repositories?q=user:waichungwong+topic:module";

const loadGitHubRepos = async url => {
  try {
    let { data } = await get(url);
    return (
      data &&
      data.items.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
      })
    );
  } catch (error) {
    return null;
  }
};

export const loadInspirations = async () => await loadGitHubRepos(INSPIRE_URL);

export const loadModules = async () => await loadGitHubRepos(MODULE_URL);

export const isWithinComponent = (element, component) => {
  let node = element;

  while (node !== null) {
    if (node === component) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
};
