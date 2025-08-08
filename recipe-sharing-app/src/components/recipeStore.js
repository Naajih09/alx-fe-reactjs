import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
    get().generateRecommendations();
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term }, get().filterRecipes);
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // ✅ Create new recipe
  addRecipe: (newRecipe) => {
    const { recipes } = get();
    set({ recipes: [...recipes, newRecipe] }, get().filterRecipes);
  },

  // ✅ Update existing recipe
  updateRecipe: (updatedRecipe) => {
    const { recipes } = get();
    const updated = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({ recipes: updated }, get().filterRecipes);
  },

  // ✅ Delete a recipe by ID
  deleteRecipe: (recipeId) => {
    const { recipes } = get();
    const filtered = recipes.filter((recipe) => recipe.id !== recipeId);
    set({ recipes: filtered }, get().filterRecipes);
  },

  addFavorite: (recipeId) => {
    const { favorites } = get();
    if (!favorites.includes(recipeId)) {
      set({ favorites: [...favorites, recipeId] }, get().generateRecommendations);
    }
  },

  removeFavorite: (recipeId) => {
    const { favorites } = get();
    set({
      favorites: favorites.filter((id) => id !== recipeId),
    }, get().generateRecommendations);
  },

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter((recipe) => !favorites.includes(recipe.id));
    set({ recommendations: recommended });
  },
}));
