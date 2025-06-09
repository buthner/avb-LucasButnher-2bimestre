import { useFavorites } from '../../context/FavoritesContext';
import { Link } from 'react-router-dom';

export default function Favoritos() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="bg-purple-950 p-10 rounded-lg w-full max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-purple-300 mb-4">Pokémons Favoritos</h1>
        <p className="text-lg text-gray-300 mb-6">Veja os Pokémons que você marcou como favoritos</p>

        {favorites.length === 0 ? (
          <p className="text-gray-400 text-lg">Nenhum Pokémon favoritado ainda.</p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {favorites.map((pokemon) => (
              <li 
                key={pokemon.id} 
                className="flex items-center gap-2 bg-gray-800 rounded px-4 py-2 w-full max-w-xs justify-between"
              >
                <Link
                  to={`/pokemon/${pokemon.name}`}
                  className="text-purple-300 hover:text-purple-400 text-xl font-semibold"
                >
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Link>

                <button
                  onClick={() => toggleFavorite(pokemon)}
                  aria-label="Remover dos favoritos"
                  className="text-red-500 hover:text-red-600 text-2xl focus:outline-none"
                >
                  ❤️
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
