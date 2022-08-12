import { CoordsContext } from "../../context/CoordsContext";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import ListOfPlaces from "./ListOfPlaces";
import { UIContext } from "../../context/UIContext";
import { ThemeContext } from "../../context/ThemeContext";

const SearchMenu = () => {
  const { handleMenuOpened, menuOpened } = useContext(UIContext);
  const { isDark } = useContext(ThemeContext);

  const {
    errorCoords,
    handleInputData,
    inputData,
    handleSubmitData,
    loadingCoords,
    cityCoords,
    handleCoords,
  } = useContext(CoordsContext);

  if (errorCoords) {
    console.log(errorCoords);
  }

  return (
    <SearchMenuContainer
      className={`${isDark ? "dark" : "light"}-bg-menu`}
      active={menuOpened}
      isDark={isDark}
    >
      <div className="iconContainer">
        <IoMdClose color="white" onClick={() => handleMenuOpened()} />
      </div>
      <div className="inputContainer">
        <IoMdSearch color="white" className="searchIcon" />
        <input
          className={`${isDark ? "dark" : "light"}-pri-text`}
          type="text"
          placeholder="search location"
          onChange={handleInputData}
          name="inputData"
          value={inputData}
        />
        <button onClick={handleSubmitData}>Search</button>
      </div>
      {loadingCoords && <p>Loading...</p>}
      <ListOfPlaces cityData={cityCoords} handleCoords={handleCoords} />
    </SearchMenuContainer>
  );
};

const SearchMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 100%;
  border-radius: 10px;
  position: absolute;
  top: 0;
  width: 100%;
  left: -2000px;
  height: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 33;

  ${(props) =>
    props.active &&
    css`
      position: absolute;
      top: 0;
      width: 100%;
      left: 0;
      height: 100%;
      transition: all 0.3s ease-in-out;
      z-index: 33;

      @media (min-width: 600px) {
        max-width: 400px;
      }
    `}

  div.iconContainer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    font-size: 1.2rem;
  }

  div.inputContainer {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 20px 0px;
    input {
      flex: 1 1;
      background: none;
      border: solid 1px white;
      padding: 14px 14px 14px 49px;
      color: white;
      font-size: Raleway;
      font-weight: 600;
      font-size: 1rem;
      min-width: 200px;
      &::placeholder {
        color: white;
      }
      &:focus {
        outline: none;
      }
    }
    .searchIcon {
      position: absolute;
      left: 20px;
      font-size: 17px;
    }
    button {
      background-color: ${(props) => (props.isDark ? "#3c47e9" : "#0092cb")};
      height: 100%;
      margin-left: 12px;
      padding: 14px;
      color: white;
      font-size: Raleway;
      font-weight: 600;
      font-size: 1rem;
      border: none;
      cursor: pointer;
    }
  }
`;

export default SearchMenu;
