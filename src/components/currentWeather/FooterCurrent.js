import React from "react";
import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext";
import { ThemeContext } from "../../context/ThemeContext";
import { IoLocationSharp } from "react-icons/io5";
import convertDate from "../../utils/dateConversion";
import "../../styles/FooterCurrent.scss";

const FooterCurrent = () => {
  const { reversedData, weatherData, selectedDay } = useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);

  let day = weatherData[selectedDay]?.dt_txt;

  return (
    <>
      <div className={`currentDataText ${isDark ? "dark" : "light"}-sec-text`}>
        { selectedDay === 0
          ? <p>Today ·</p>
          : selectedDay === 1
          ? <p>Tomorrow ·</p>
          : <p></p>
        }
        <p>{ day ? convertDate(day) : " "}</p>
      </div>
      <div className={`locationData ${isDark ? "dark" : "light"}-sec-text`}>
        <IoLocationSharp />
        {reversedData && <p>{reversedData.county}</p>}
      </div>
    </>
  );
};

export default FooterCurrent;
