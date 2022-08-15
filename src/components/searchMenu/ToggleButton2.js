import React, { useContext } from "react";
import "../../styles/ToggleButton2.scss";
import { UIContext } from "../../context/UIContext";
import { ThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";

const ToggleButton2 = () => {
  const { handleFarenheit } = useContext(UIContext);
  const { isDark } = useContext(ThemeContext);

  return (
    <Label isDark={isDark} className="button" htmlFor="toggle">
      <input id="toggle" type="checkbox" onClick={() => handleFarenheit()} />
      <span className="slider"></span>
    </Label>
  );
};

export default ToggleButton2;

const Label = styled.label`
  display: inline-block;
  width: 48px;
  height: 28px;
  background-color: none;
  border: solid 2px ${(props) => (props.isDark ? "#9f9eac" : "#beecff")};
  border-radius: 30px;
  cursor: pointer;
  padding: 1px;
  font-family: "Raleway", "Roboto", sans-serif;
  font-weight: 700;
  position: absolute;
  top: 20px;
  right: 105px;
  color: ${(props) => (props.isDark ? "#9f9eac" : "#beecff")};

  &:hover {
    border: solid 2px ${(props) => (props.isDark ? "#e7e7eb" : "#ffffff")};
    color: ${(props) => (props.isDark ? "#e7e7eb" : "#ffffff")};
  }
`;
