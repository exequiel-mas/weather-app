import React from 'react';
import '../../styles/NavBar.scss';

function NavBar() {
  return (
    <div className="navbar">
      <button className="searchButton"></button>
      <button className="themeButton"></button>
      <button className="locationButton"></button>
    </div>
  );
}

export default NavBar;
