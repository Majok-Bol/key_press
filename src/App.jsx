import { useState } from "react";
import "./App.css";
function App() {
  //store keypress values in array
  //display the list of key pressed values
  const [keyPress, setKeyPress] = useState([]);
  //handle input values
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e) => {
    setKeyPress(setKeyData => [...setKeyData, e.key]);
  };
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onKeyDown={handleKeyPress}
          onChange={handleInputValue}
        />
        <p>Current input: {inputValue}</p>
        <p>Current key: {handleKeyPress}</p>
        <ul>
          {keyPress.map((key, index) =>{
            return <li key={index}>{key}</li>
})}
        </ul>
      </div>
    </>
  );
}
export default App;
