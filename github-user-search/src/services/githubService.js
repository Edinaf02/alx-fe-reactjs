import axios from 'axios';

// Function to fetch GitHub users based on username, location, and minimum repositories
export const fetchUserData = async ({ username, location, minRepos }) => {
  let query = `q=${username}`;
  
  if (location) {
    query += `+location:${location}`;
  }
  
  if (minRepos) {
    query += `+repos:>${minRepos}`;  // Add minRepos as part of the query
  }
  
  const response = await axios.get(`https://api.github.com/search/users?q`);
  
  return response.data.items;
};
