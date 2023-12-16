import React, { useState } from "react";
import Menu from "./Menu";

function Header({darkMode, onHandleDarkMode}) {

  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu darkMode={darkMode} onHandleDarkMode={onHandleDarkMode} />
      </div>
    </div>
  );
}

export default Header;
