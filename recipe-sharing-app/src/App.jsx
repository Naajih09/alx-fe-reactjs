import React, { useEffect } from 'react';
import { useRecipeStore } from './store/recipeStore';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const dummyRecipes = [
  { title: 'Jollof Rice', ingredients: ['rice', 'tomato', 'pepper'], prepTime: 45 },
  { title: 'Fried Plantain', ingredients: ['plantain', 'oil'], prepTime: 10 },
  { title: 'Chicken Stew', ingredients: ['chicken', 'onion', 'pepper'], prepTime: 60 },
];

const App = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    // Simulate fetching recipes
    setRecipes(dummyRecipes);
  }, [setRecipes]);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
