import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../../components/PokemonCard';

export default function PokemonDetalhes() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then(response => {
        setPokemon(response.data);
        setError('');
      })
      .catch(() => {
        setError('Pokémon não encontrado.');
      });
  }, [name]);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8 flex flex-col items-center justify-start">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <label className="text-5xl font-bold text-purple-300"> Detalhes do Pokémon:</label>
      </div>

      {error && <p className="text-red-400 text-xl">{error}</p>}
      {!error && !pokemon && <p className="text-purple-300">Carregando...</p>}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}
