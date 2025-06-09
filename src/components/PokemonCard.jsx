// src/components/PokemonCard.jsx
import { useFavorites } from '../context/FavoritesContext';

export default function PokemonCard({ pokemon }) {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some(fav => fav.id === pokemon.id);

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 m-2 w-60 text-center">
      <h2 className="text-xl font-bold text-purple-400 mb-2 capitalize">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto mb-2 w-20 h-20"
      />
      <p><span className="font-bold text-purple-300">ID:</span> {pokemon.id}</p>
      <p><span className="font-bold text-purple-300">Peso:</span> {pokemon.weight}</p>
      <p><span className="font-bold text-purple-300">Altura:</span> {pokemon.height}</p>

      <button
        onClick={() => toggleFavorite(pokemon)}
        className={`mt-4 px-4 py-2 rounded ${
          isFavorite ? 'bg-red-500' : 'bg-purple-600'
        } hover:opacity-80 transition`}
      >
        {isFavorite ? 'Remover dos Favoritos' : 'Favoritar'}
      </button>
    </div>
  );
}
