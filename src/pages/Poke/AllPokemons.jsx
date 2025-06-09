import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext'; // importar contexto

export default function AllPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [generation, setGeneration] = useState('1');
  const [loading, setLoading] = useState(false);

  // Importa do contexto:
  const { favorites, toggleFavorite } = useFavorites();

  const generationRanges = {
    '1': [1, 151],
    '2': [152, 251],
    '3': [252, 386],
    '4': [387, 493],
    '5': [494, 649],
    '6': [650, 721],
    '7': [722, 809],
    '8': [810, 905],
    '9': [906, 1010],
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const [start, end] = generationRanges[generation];
      const requests = [];

      for (let i = start; i <= end; i++) {
        requests.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
      }

      try {
        const responses = await Promise.all(requests);
        const data = responses.map(res => ({
          name: res.data.name,
          id: res.data.id,
          sprites: res.data.sprites, // se quiser passar imagem para o toggleFavorite
          // ... pode adicionar outros dados que seu toggleFavorite usa
        }));
        setPokemons(data);
      } catch (error) {
        console.error("Erro ao buscar os pokémons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [generation]);

  // Função que verifica se o pokemon está favoritado
  const isFavorited = (pokemon) => {
    return favorites.some(fav => fav.id === pokemon.id);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center mb-6 w-full">
          <h1 className="text-3xl font-bold text-purple-300">Pokémons por Geração</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <label className="text-lg font-semibold text-purple-300">Escolha a Geração:</label>
          <select
            value={generation}
            onChange={(e) => setGeneration(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            {Object.keys(generationRanges).map((gen) => (
              <option key={gen} value={gen}>
                Geração {gen}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <p className="text-center text-purple-300">Carregando...</p>
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {pokemons.map((pokemon) => (
        <li key={pokemon.id} className="bg-gray-800 rounded p-3 text-center flex flex-col items-center gap-2">
          <Link
            to={`/pokemon/${pokemon.name}`}
            className="block text-purple-300 hover:text-purple-400 transition"
          >
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Link>

          {/* Botão Favoritar centralizado */}
          <button
            onClick={() => toggleFavorite(pokemon)}
            className="text-2xl focus:outline-none"
            aria-label={isFavorited(pokemon) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          >
            {isFavorited(pokemon) ? '❤️' : '🤍'}
          </button>
        </li>

            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
