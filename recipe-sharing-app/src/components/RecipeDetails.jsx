import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state => 
    state.recipes.find(recipe => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h2 className="font-bold mt-4">Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
