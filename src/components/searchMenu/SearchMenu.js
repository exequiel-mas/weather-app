import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import ListOfPlaces from "./ListOfPlaces";

const SearchMenu = ({ menuOpened, openMenu }) => {
  // const { weatherData, errorWeatherData, loadingWeatherData } = useWeatherData(
  //   cityCoords.lat,
  //   cityCoords.lon
  // );

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
    <SearchMenuContainer active={menuOpened}>
      <div className="iconContainer">
        <IoMdClose color="white" onClick={() => openMenu()} />
      </div>
      <div className="inputContainer">
        <IoMdSearch color="white" className="searchIcon" />
        <input
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
  background-color: #1e213a;
  flex-direction: column;
  padding: 12px;
  width: 100%;
  border-radius: 10px;
  position: absolute;
  top: 0;
  width: 100%;
  left: -2000px;
  height: 100%;
  transition: all 0.3s ease;

  ${(props) =>
    props.active &&
    css`
      position: absolute;
      top: 0;
      width: 100%;
      left: 0;
      height: 100%;

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
    }
    .searchIcon {
      position: absolute;
      left: 20px;
      font-size: 17px;
    }
    button {
      background-color: #3c47e9;
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
