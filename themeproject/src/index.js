import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeContext} from './Components/ThemeContext';
import App from './App';
import './main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>
);