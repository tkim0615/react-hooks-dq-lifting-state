import React, {useState} from "react";

function DarkModeWrapper(props) {  

                                                  //pass down as prop onHandleToggle fx and darkMode state to Header
  return (
    <div id="wrapper" className={props.darkMode ? "dark-mode" : ""}>
      {props.children}
    </div>
  );
}

export default DarkModeWrapper;
