import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  return (
    <div className="recipe-list grid gap-4 mt-4">
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{recipe.title}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Time:</strong> {recipe.prepTime} mins</p>
            {favorites.includes(recipe.id) ? (
              <button
                onClick={() => removeFavorite(recipe.id)}
                className="mt-2 text-red-500 text-sm"
              >
                ★ Remove Favorite
              </button>
            ) : (
              <button
                onClick={() => addFavorite(recipe.id)}
                className="mt-2 text-blue-500 text-sm"
              >
                ☆ Add to Favorites
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
