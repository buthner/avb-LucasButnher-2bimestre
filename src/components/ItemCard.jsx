import { useFavorites } from '../context/FavoritesContext';

const ItemCard = ({ item }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some(fav => fav.id === item.id);

  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{item.title}</h2>
      <p>{item.description}</p>
      <button
        className={`mt-2 px-4 py-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-blue-500'} text-white`}
        onClick={() => toggleFavorite(item)}
      >
        {isFavorite ? 'Remover dos Favoritos' : 'Favoritar'}
      </button>
    </div>
  );
};

export default ItemCard;
