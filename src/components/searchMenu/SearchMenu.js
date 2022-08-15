import React, { useContext } from "react";
import styled, { css } from "styled-components";
import ListOfPlaces from "./ListOfPlaces";
import { UIContext } from "../../context/UIContext";
import { CoordsContext } from "../../context/CoordsContext";
import { ThemeContext } from "../../context/ThemeContext";
import { BeatLoader } from "react-spinners";
import { IoMdClose, IoMdSearch } from "react-icons/io";

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
    hasError,
  } = useContext(CoordsContext);

  return (
    <SearchMenuContainer
      className={`${isDark ? "dark" : "light"}-bg-menu`}
      active={menuOpened}
      isDark={isDark}
    >
      <div className="iconContainer">
        <IoMdClose color="white" onClick={() => handleMenuOpened()} />
      </div>
      <form className="inputContainer" onSubmit={(e) => handleSubmitData(e)}>
        <IoMdSearch
          color="white"
          className="searchIcon"
          onClick={(e) => handleSubmitData(e)}
        />
        <InputStyle
          className={`${isDark ? "dark" : "light"}-bg-box`}
          type="text"
          placeholder="Search location"
          onChange={handleInputData}
          name="inputData"
          value={inputData}
        />
      </form>
      {hasError && (
        <h2 className={`${isDark ? "dark" : "light"}-pri-text`}>
          {errorCoords}
        </h2>
      )}
      {loadingCoords ? (
        <BeatLoader color="white" />
      ) : (
        <ListOfPlaces cityData={cityCoords} handleCoords={handleCoords} />
      )}
    </SearchMenuContainer>
  );
};

const SearchMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23px;
  width: 100%;
  border-radius: 0px;
  position: absolute;
  top: 0;
  width: 100%;
  left: -4000px;
  height: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 33;
  @media (min-width: 1280px) {
    transition: none;
    border-radius: 0px;
  }

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

      @media (min-width: 1080px) {
        position: absolute;
        width: 50%;
      }

      @media (min-width: 1280px) {
        position: relative;
        transition: none;
        width: 100%;
      }
    `}

  div.iconContainer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    font-size: 1.2rem;
  }

  form.inputContainer {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 20px 0px;

    .searchIcon {
      position: absolute;
      right: 1rem;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;

export default SearchMenu;

const InputStyle = styled.input`
  flex: 1 1;
  border: none;
  padding: 14px 49px 14px 14px;
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
`;
