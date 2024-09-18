// src/App.jsx or another component where the search is handled
import React, { useState } from 'react';
import { fetchGitHubUser } from './services/api'; // Adjust the path based on your file structure

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchGitHubUser(username);
      setUserData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url}>View GitHub Profile</a>
        </div>
      )}
    </div>
  );
};

export default App;
