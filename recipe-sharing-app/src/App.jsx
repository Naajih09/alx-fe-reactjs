import React, { useEffect } from 'react';
import { useRecipeStore } from './store/recipeStore';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const dummyRecipes = [
  { id: 1, title: 'Jollof Rice', description: 'Spicy West African rice dish.', ingredients: ['rice', 'tomato', 'pepper'], prepTime: 45 },
  { id: 2, title: 'Fried Plantain', description: 'Sweet ripe plantains fried until golden.', ingredients: ['plantain', 'oil'], prepTime: 10 },
  { id: 3, title: 'Chicken Stew', description: 'Rich tomato stew with chicken.', ingredients: ['chicken', 'onion', 'pepper'], prepTime: 60 },
  { id: 4, title: 'Egusi Soup', description: 'Traditional melon seed soup.', ingredients: ['egusi', 'palm oil', 'spinach'], prepTime: 50 },
  { id: 5, title: 'Okra Soup', description: 'Slippery and delicious.', ingredients: ['okra', 'meat', 'seasoning'], prepTime: 30 }
];

const App = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    setRecipes(dummyRecipes);
  }, [setRecipes]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;
