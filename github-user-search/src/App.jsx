// src/App.jsx
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import { fetchGitHubUser } from './services/api';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
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
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      <UserProfile userData={userData} />
    </div>
  );
};

export default App;
