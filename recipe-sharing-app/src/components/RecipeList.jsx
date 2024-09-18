import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="border p-4 rounded">
          <h2 className="font-bold">
            <Link to={`/recipe/${recipe.id}`}>  {/* Link to recipe detail page */}
              {recipe.title}
            </Link>
          </h2>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
