import React, { useContext } from "react";
import "./App.scss";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import DaysWeather from "./components/daysWeather/DaysWeather";
import HighlightWeather from "./components/highlightWeather/HighlightsWeather";
import SearchMenu from "./components/searchMenu/SearchMenu";
import styled from "styled-components";
import { UIContext } from "./context/UIContext";

function App() {
  const { menuOpened } = useContext(UIContext);
  return (
    <AppStyle menuOpened={menuOpened} className="App">
      <SearchMenu />
      <CurrentWeather />
      <DaysWeather />
      <HighlightWeather />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  position: relative;
  overflow: hidden;

  @media (min-width: 1080px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: ${(props) =>
      props.menuOpened ? "1fr 1fr 1fr 1fr" : "2fr 1fr 1fr"};
    grid-template-rows: 1fr;
  }
`;
