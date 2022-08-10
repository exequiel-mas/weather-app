import React from "react";
import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext";
import { ThemeContext } from "../../context/ThemeContext";
import { IoLocationSharp } from "react-icons/io5";
import "../../styles/FooterCurrent.scss";

const FooterCurrent = () => {
  const { reversedData } = useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <div className={`currentDataText ${isDark ? "dark" : "light"}-sec-text`}>
        <p>Today</p>
        <p>·</p>
        <p>Fri, 5 Jun</p>
      </div>
      <div className={`locationData ${isDark ? "dark" : "light"}-sec-text`}>
        <IoLocationSharp />
        {reversedData && <p>{reversedData.county}</p>}
      </div>
    </>
  );
};

export default FooterCurrent;
