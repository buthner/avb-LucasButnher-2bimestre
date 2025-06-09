import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AllPokemons from './pages/Poke/AllPokemons';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<AllPokemons />} />
    </Routes>
  );
}
