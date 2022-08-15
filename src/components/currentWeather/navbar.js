import React, { useContext } from "react";
import "../../styles/NavBar.scss";
import { BiCurrentLocation } from "react-icons/bi";
import { MdRadar } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { UIContext } from "../../context/UIContext";
import { ThemeContext } from "../../context/ThemeContext";
import { CoordsContext } from "../../context/CoordsContext";
import ToggleButton2 from "../searchMenu/ToggleButton2";

function NavBar() {
  const { handleMenuOpened } = useContext(UIContext);
  const { toggleTheme, isDark } = useContext(ThemeContext);
  const { handleGeoActive } = useContext(CoordsContext);
  return (
    <div className="navbar">
      <MdRadar
        className={`radar ${isDark ? "dark" : "light"}-sec-text`}
        onClick={() => handleMenuOpened()}
      />
      <ToggleButton2 />
      <BiCurrentLocation
        className={`geolocate ${isDark ? "dark" : "light"}-sec-text`}
        onClick={() => handleGeoActive()}
      />
      <VscColorMode
        className={`colorMode ${isDark ? "dark" : "light"}-sec-text ${
          !isDark && "rotate"
        }`}
        onClick={() => toggleTheme()}
      />
    </div>
  );
}

export default NavBar;
