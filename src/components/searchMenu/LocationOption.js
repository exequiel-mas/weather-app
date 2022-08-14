import React, { useContext } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { ThemeContext } from "../../context/ThemeContext.js";
import { UIContext } from "../../context/UIContext.js";
import { CoordsContext } from "../../context/CoordsContext.js";

const LocationOption = ({ city, country, handleCoords, lat, lon }) => {
  const { isDark } = useContext(ThemeContext);
  const { handleMenuOpened } = useContext(UIContext);
  const { resetSearch } = useContext(CoordsContext);

  return (
    <OptionContainer
      className={`${isDark ? "dark" : "light"}-bg-box ${
        isDark ? "dark" : "light"
      }-pri-text`}
      onClick={(event) => {
        handleCoords(lat, lon);
        handleMenuOpened();
        resetSearch();
      }}
    >
      {city}, {country}
      <IoIosArrowForward />
    </OptionContainer>
  );
};

const OptionContainer = styled.button`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  margin: 10px 0px;
  padding: 12px;
  cursor: pointer;
`;

export default LocationOption;
