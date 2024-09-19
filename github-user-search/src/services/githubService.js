export const fetchUserData = async ({ username, location, repos }) => {
  const query = `q=${username}+location:${location}+repos:>${repos}`;
  const response = await fetch(`https://api.github.com/search/users?${query}`);
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.items;
};
