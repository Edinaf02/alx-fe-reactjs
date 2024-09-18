import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const RecipeSharingApp = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default RecipeSharingApp;
