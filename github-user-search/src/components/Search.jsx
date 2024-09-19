import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  // State to hold search inputs and results
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const fetchedUsers = await fetchUserData({ username, location, repos });
      if (fetchedUsers.length === 0) {
        setError("Looks like we can't find the user");
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
    <div className="p-4">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter GitHub username"
          />
        </div>
        <div>
          <label className="block">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter location"
          />
        </div>
        <div>
          <label className="block">Min Repositories</label>
          <input
            type="number"
            value={repos}
            onChange={(e) => setRepos(e.target.value)}
            className="border p-2 w-full"
            placeholder="Minimum number of repositories"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4 w-full">
          Search
        </button>
      </form>

      {/* Loading Message */}
      {loading && <p className="mt-4">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Search Results */}
      <div className="mt-4">
        {users.length > 0 && (
          <div>
            {users.map((user) => (
              <div key={user.id} className="border-b p-4">
                <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded-full" />
                <h3 className="font-bold">{user.login}</h3>
                <p>Location: {user.location || 'N/A'}</p>
                <p>Repositories: {user.public_repos || 'N/A'}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Profile
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
