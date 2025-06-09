import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext'; // ✅ IMPORTANTE
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FavoritesProvider> {/* ✅ Adicionando o Contexto aqui */}
      <App />
    </FavoritesProvider>
  </BrowserRouter>
);
