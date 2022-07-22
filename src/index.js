import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CoordsContextProvider as Provider } from './context/CoordsContext';
import { ThemeContextProvider as ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
