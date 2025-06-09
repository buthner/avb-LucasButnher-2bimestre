import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../../components/PokemonCard';
import { Link } from 'react-router-dom';

export default function AllPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [generation, setGeneration] = useState('1');
  const [loading, setLoading] = useState(false);

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
        const data = responses.map(res => res.data);
        setPokemons(data);
      } catch (error) {
        console.error("Erro ao buscar os pokémons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [generation]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-purple-300">Pokémons por Geração</h1>
          <Link to="/" className="text-purple-400 underline hover:text-purple-300">
            ← Voltar para Home
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <label className="text-lg font-semibold text-purple-300">Escolha a Geração:</label>
          <select
            value={generation}
            onChange={(e) => setGeneration(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="1">Geração 1 (Kanto)</option>
            <option value="2">Geração 2 (Johto)</option>
            <option value="3">Geração 3 (Hoenn)</option>
            <option value="4">Geração 4 (Sinnoh)</option>
            <option value="5">Geração 5 (Unova)</option>
            <option value="6">Geração 6 (Kalos)</option>
            <option value="7">Geração 7 (Alola)</option>
            <option value="8">Geração 8 (Galar)</option>
            <option value="9">Geração 9 (Paldea)</option>
          </select>
        </div>

        {loading ? (
          <p className="text-center text-purple-300">Carregando Pokémons...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pokemons.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
