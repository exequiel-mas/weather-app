import React, { useState } from "react";

function useTheme() {
  const darkTheme = {
    backgroundApp: "#100e1d",
    backgroundMenu: "#1e213a",
    backgroundMenuGradient: "#1e213af2", //Estecolorseutilizaenlosfondosdetodaslascardsyenelfondodelsearchmenu
    secondaryTextColor: "#9f9eac",
    primaryTextColor: "#e7e7eb",
    backgroundButton: "#6e707a", // Este color se utiliza en fondos de botones.
  };

  const lightTheme = {
    backgroundApp: "#F7EBD7",
    backgroundMenu: "#DF8700",
    backgroundMenuGradient: "#FB9800", //Estecolorseutilizaenlosfondosdetodaslascardsyenelfondodelsearchmenu
    secondaryTextColor: "#946206",
    primaryTextColor: "#FFE5BF",
    backgroundButton: "#DD9109",
  };

  const [theme, setTheme] = useState({});
  const [isDark, setIsDark] = useState(true); // Cambiar a estado inicial como true

  function toggleTheme() {
    setIsDark((prevstate) => !prevstate);
  }

  function handleTheme() {
    if (isDark) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }

  React.useEffect(() => handleTheme, [isDark]);

  return { theme, toggleTheme, isDark };
}

export default useTheme;
