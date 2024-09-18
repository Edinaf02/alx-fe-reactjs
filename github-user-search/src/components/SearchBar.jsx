// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ username, setUsername, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
