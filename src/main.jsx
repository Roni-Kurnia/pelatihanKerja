import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Inisialisasi root DOM React 18
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* Bungkus seluruh <App /> dengan <BrowserRouter> */}
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </React.StrictMode>
);

