import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (pokemon) => {
    setFavorites((prev) =>
      prev.find((fav) => fav.id === pokemon.id)
        ? prev.filter((fav) => fav.id !== pokemon.id)
        : [...prev, pokemon]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
