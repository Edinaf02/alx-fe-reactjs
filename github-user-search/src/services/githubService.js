import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async ({ username, location, repos }) => {
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (repos) query += `+repos:>${repos}`;
  
  const response = await axios.get(`${BASE_URL}?${query}`);
  return response.data.items;
};
