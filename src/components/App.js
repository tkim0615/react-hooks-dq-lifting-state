import React, {useState} from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const onHandleDarkMode =() =>{
    setDarkMode(!darkMode);
  }
  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header onHandleDarkMode={onHandleDarkMode} darkMode={darkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
