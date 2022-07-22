import React, { createContext } from 'react';
import useTheme from '../hooks/useTheme';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
