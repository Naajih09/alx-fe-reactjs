import React, { useEffect, useState } from 'react';
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-lg">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg border-b border-gray-200" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <a href={`/recipes/${recipe.id}`} className="text-red-500 hover:underline mt-2 block">View Recipe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
