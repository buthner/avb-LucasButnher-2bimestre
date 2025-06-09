import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AllPokemons from './pages/Poke/AllPokemons';
import Favoritos from './pages/Favoritos/Favoritos';
import PokemonDetalhes from './pages/Detalhes/PokemonDetalhes'; // ✅ nova página
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<AllPokemons />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/pokemon/:name" element={<PokemonDetalhes />} /> {/* ✅ rota dinâmica */}
      </Routes>
    </div>
  );
}
