import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdClose, IoMdSearch } from 'react-icons/io';
import ListOfPlaces from './ListOfPlaces';
import useCityCoords from '../../hooks/useCityCoords';

const SearchMenu = ({ handleCoords }) => {
  const [inputData, setInputData] = useState('');
  const [submitData, setSubmitData] = useState(null);

  function handleInputData(e) {
    setInputData(e.target.value);
  }
  function handleSubmitData() {
    setSubmitData(inputData);
  }
  const { cityCoords, loadingCoords, errorCoords } = useCityCoords(submitData);

  // const { weatherData, errorWeatherData, loadingWeatherData } = useWeatherData(
  //   cityCoords.lat,
  //   cityCoords.lon
  // );

  if (errorCoords) {
    console.log(errorCoords);
  }

  return (
    <>
      <SearchMenuContainer>
        <div className="iconContainer">
          <IoMdClose color="white" />
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
    </>
  );
};

const SearchMenuContainer = styled.section`
  display: flex;
  background-color: #1e213a;
  flex-direction: column;
  padding: 12px;
  width: 100%;
  border-radius: 10px;

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
