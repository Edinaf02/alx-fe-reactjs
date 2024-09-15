import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!title || !ingredients || !steps) {
      setError('Please fill out all fields');
      return;
    }

    // If validation passes, log the form data or send it to the server
    const newRecipe = { title, ingredients, steps };
    console.log('New Recipe:', newRecipe);

    // Clear form
    setTitle('');
    setIngredients('');
    setSteps('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Recipe Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter recipe title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Ingredients</label>
        <textarea
          className="w-full p-2 border rounded"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="List ingredients"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Preparation Steps</label>
        <textarea
          className="w-full p-2 border rounded"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="List preparation steps"
        ></textarea>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
