import { useState } from "react";
import "./App.css";
function App() {
  //store keypress values in array
  //display the list of key pressed values
  const [keyPress, setKeyPress] = useState([]);
  //handle input values
  const [inputValue, setInputValue] = useState("");
  //state to reset the keypress

  const handleKeyPress = (e) => {
    setKeyPress(setKeyData => [...setKeyData, e.key]);
  };
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleReset=()=>{
    setKeyPress([]);
    setInputValue("")
  }
  return (
    <>
      <div id='key-container'>
        <h1 >KEY PRESS PAGE</h1>
        <input
        id='input'
        placeholder="Press any key"
          type="text"
          value={inputValue}
          onKeyDown={handleKeyPress}
          onChange={handleInputValue}
        />
        <p>Current input: {inputValue}</p>
        <p>Current input length: {inputValue.length}</p>
        <p>Total keys pressed: {keyPress.length}</p>
        <ul>
          {keyPress.map((key, index) =>{
            return <li key={index}>{key}</li>
})}
        </ul>
        <button id='btn' onClick={handleReset}>Reset Keys</button>
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    </>
  );
}
export default App;
