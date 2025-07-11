// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './redux/store'; // ✅ your Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>      {/* ✅ Wrap app here */}
      <App />
    </Provider>
  </React.StrictMode>
);