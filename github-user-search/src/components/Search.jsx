import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const fetchedUsers = await fetchUserData({ username, location, minRepos });
      if (fetchedUsers.length === 0) {
        setError("No users found");
      } else {
        setUsers(fetchedUsers);
      }
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input type="number" placeholder="Min Repos" value={minRepos} onChange={(e) => setMinRepos(e.target.value)} />
      <button type="submit">Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.login}</p>
          <a href={user.html_url}>View Profile</a>
        </div>
      ))}
    </form>
  );
};

export default Search;
