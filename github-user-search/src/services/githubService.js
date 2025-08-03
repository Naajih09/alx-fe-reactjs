import axios from "axios";

export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  // 🟢 Use the full URL as a string (do not extract BASE_URL)
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url);
    return response.data; // { total_count, incomplete_results, items: [] }
  } catch (error) {
    console.error("GitHub API search failed:", error);
    throw new Error("GitHub API search failed");
  }
};
