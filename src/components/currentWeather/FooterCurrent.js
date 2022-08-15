import React from "react";
import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext";
import { ThemeContext } from "../../context/ThemeContext";
import { IoLocationSharp } from "react-icons/io5";
import convertDate from "../../utils/dateConversion";
import "../../styles/FooterCurrent.scss";
import { BeatLoader } from "react-spinners";

const FooterCurrent = () => {
  const {
    reversedData,
    weatherData,
    selectedDay,
    loadingReversedData,
    errorReversedData,
  } = useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);

  let day = weatherData[selectedDay]?.dt_txt;

  return (
    <>
      <div className={`currentDataText ${isDark ? "dark" : "light"}-sec-text`}>
        {selectedDay === 0 ? (
          <p>Today ·</p>
        ) : selectedDay === 1 ? (
          <p>Tomorrow ·</p>
        ) : (
          <p></p>
        )}
        <p>{day ? convertDate(day) : " "}</p>
      </div>
      {errorReversedData && <h4>{errorReversedData}</h4>}
      {!loadingReversedData ? (
        <div className={`locationData ${isDark ? "dark" : "light"}-sec-text`}>
          <IoLocationSharp />
          <p>{reversedData.county}</p>
        </div>
      ) : (
        <div className="locationData">
          <BeatLoader />
        </div>
      )}
    </>
  );
};

export default FooterCurrent;
