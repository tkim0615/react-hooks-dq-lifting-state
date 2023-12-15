import React,{useState} from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);   //move this up
  const onHandleToggle= () =>{                  //move this up to Wrapper
    setDarkMode(darkMode => !darkMode)
  }

  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header onHandleToggle={onHandleToggle} darkMode={darkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
// ## 1. Toggle dark mode in the Header component

// Our `<Header>` component has a dark mode theme feature that can be enabled by
// clicking on the toggle. In order to switch the dark mode theme for the header,
// you'll need to toggle the `darkMode` key in state from true to false.
