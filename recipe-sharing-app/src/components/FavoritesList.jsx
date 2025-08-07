import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const favoriteRecipes = favorites.map(id => recipes.find(recipe => recipe.id === id)).filter(Boolean);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="border p-3 rounded mb-2 shadow">
            <h3 className="font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              onClick={() => removeFavorite(recipe.id)}
              className="text-red-600 mt-1 text-sm"
            >
              Remove from favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
