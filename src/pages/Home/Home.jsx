import { useState } from 'react';
import axios from 'axios';
import PokemonCard from '../../components/PokemonCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const [pokemon, setPokemon] = useState(null);
  const [inputId, setInputId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const buscarPokemon = () => {
    if (!inputId) return;

    setLoading(true);
    setError('');
    axios.get(`https://pokeapi.co/api/v2/pokemon/${inputId.toLowerCase()}`)
      .then(response => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Pokémon não encontrado.');
        setPokemon(null);
        setLoading(false);
      });
  };

  return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
        <div className="bg-purple-950 p-10 rounded-lg w-full max-w-xl text-center">
        <h1 className="text-5xl font-bold text-purple-300 mb-4">Buscar Pokémon</h1>
        <p className="text-lg text-gray-300 mb-4">Digite o nome ou ID do Pokémon para ver os detalhes</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="text"
            className="bg-gray-800 border border-purple-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Ex: pikachu ou 25"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
          <button
            onClick={buscarPokemon}
            className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition"
          >
            Buscar
          </button>
        </div>
        <Link to="/todos" className="mt-6 inline-block text-purple-400 underline hover:text-purple-300 transition">
          Ver Pokémons por Geração →
        </Link>
      </div>

      {loading && <p className="text-lg text-purple-300">Carregando...</p>}
      {error && <p className="text-red-400 text-lg">{error}</p>}

      {pokemon && (
        <div className="mt-8">
          <PokemonCard pokemon={pokemon} />
        </div>
      )}
    </div>
  );
}
