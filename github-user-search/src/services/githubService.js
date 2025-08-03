import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: { q: query },
  });
  return response.data;
};
