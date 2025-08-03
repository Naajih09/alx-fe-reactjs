import axios from "axios";

const BASE_URL = "https://api.github.com";

// Advanced user search function with minRepos and location
export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) {
    query += `${username} in:login `;
  }

  if (location) {
    query += `location:${location} `;
  }

  if (minRepos) {
    query += `repos:>=${minRepos}`;
  }

  const response = await axios.get(`${BASE_URL}/search/users?q=${query.trim()}`);
  return response.data;
};
