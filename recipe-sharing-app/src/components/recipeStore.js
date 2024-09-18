import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Action to set the search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    }));
  },

  // Action to set initial recipes (for demo purpose)
  setRecipes: (recipes) => set({ recipes }),

  // Optional: Add more filters based on ingredients or time
  filterByIngredient: (ingredient) => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.ingredients.some(ing => ing.toLowerCase().includes(ingredient.toLowerCase()))
    )
  })),
}));
