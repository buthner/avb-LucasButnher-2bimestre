import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `px-3 py-2 rounded transition ${
      location.pathname === path
        ? 'text-purple-300 font-semibold'
        : 'text-gray-300 hover:text-purple-300'
    }`;

  return (
    <nav className="bg-purple-950 shadow-md p-4 flex justify-center space-x-8 border-b border-purple-800">
      <Link to="/" className={linkStyle('/')}>🏠 Home</Link>
      <Link to="/todos" className={linkStyle('/todos')}>📋 Todos</Link>
      <Link to="/favoritos" className={linkStyle('/favoritos')}>⭐ Favoritos</Link>
    </nav>
  );
}
