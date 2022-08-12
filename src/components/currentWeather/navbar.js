import React from "react";
import "../../styles/NavBar.scss";
import { BiCurrentLocation } from "react-icons/bi";
import { VscColorMode } from "react-icons/vsc";
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import { ThemeContext } from "../../context/ThemeContext";

function NavBar() {
  const { handleMenuOpened } = useContext(UIContext);
  const { toggleTheme, isDark } = useContext(ThemeContext);
  return (
    <div className="navbar">
      <button
        className={`searchButton ${isDark ? "dark" : "light"}-bg-button ${
          isDark ? "dark" : "light"
        }-pri-text`}
        onClick={() => handleMenuOpened()}
      >
        Search for places
      </button>
      <div className="iconSection">
        <BiCurrentLocation
          className={`navbarIcon ${isDark ? "dark" : "light"}-sec-text`}
        />
        <VscColorMode
          className={`navbarIcon ${isDark ? "dark" : "light"}-sec-text ${
            !isDark && "rotate"
          }`}
          onClick={() => toggleTheme()}
        />
      </div>
    </div>
  );
}

export default NavBar;
