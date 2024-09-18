// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = ({ userData }) => {
  if (!userData) return null;

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
    </div>
  );
};

export default UserProfile;
