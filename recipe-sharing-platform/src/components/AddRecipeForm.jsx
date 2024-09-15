import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Check if title is provided
    if (!title) {
      newErrors.title = 'Recipe title is required';
    }

    // Check if ingredients are provided
    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients';
    }

    // Check if preparation steps are provided
    if (!steps) {
      newErrors.steps = 'Preparation steps are required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    // If there are errors, set them in the state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, submit form data
    const newRecipe = { title, ingredients, steps };
    console.log('New Recipe:', newRecipe);

    // Clear form and errors
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>
      
      {/* Error messages */}
      {errors.general && <p className="text-red-500 mb-4">{errors.general}</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Recipe Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-500 mt-2">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Ingredients</label>
        <textarea
          className="w-full p-2 border rounded"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="List ingredients, separated by commas"
        ></textarea>
        {errors.ingredients && <p className="text-red-500 mt-2">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Preparation Steps</label>
        <textarea
          className="w-full p-2 border rounded"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="List preparation steps"
        ></textarea>
        {errors.steps && <p className="text-red-500 mt-2">{errors.steps}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
