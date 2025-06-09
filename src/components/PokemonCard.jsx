// src/components/PokemonCard.jsx
export default function PokemonCard({ pokemon }) {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 m-2 w-60">
      <h2 className="text-xl font-bold text-purple-400 mb-2 capitalize">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto mb-2 w-20 h-20"
      />
      <p><span className="font-bold text-purple-300">ID:</span> {pokemon.id}</p>
      <p><span className="font-bold text-purple-300">Peso:</span> {pokemon.weight}</p>
      <p><span className="font-bold text-purple-300">Altura:</span> {pokemon.height}</p>
    </div>
  );
}
