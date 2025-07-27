import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} className="border p-3 rounded mb-2 shadow">
            <h3 className="font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
