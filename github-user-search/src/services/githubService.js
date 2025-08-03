import axios from "axios";

const BASE_URL = "https://api.github.com";

// Advanced search for users
export const searchUsers = async (query) => {
  // query should include "location" or "repos" if specified
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
};
