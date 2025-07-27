import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes by name..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

export default SearchBar;
