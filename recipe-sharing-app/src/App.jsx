import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';  // Create this component to show recipe details

const RecipeSharingApp = () => {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />  {/* Route for recipe detail */}
        </Routes>
      </div>
    </Router>
  );
};

export default RecipeSharingApp;
