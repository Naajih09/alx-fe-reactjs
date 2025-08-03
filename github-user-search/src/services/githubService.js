import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";

  // Constructing the search query
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `${BASE_URL}?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url);
    return response.data; // GitHub returns { total_count, incomplete_results, items: [] }
  } catch (error) {
    console.error("GitHub API error:", error);
    throw new Error("GitHub API search failed");
  }
};
