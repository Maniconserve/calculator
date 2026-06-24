import './App.css';
import { useState } from 'react';
import Keypad from './keypad.js';

function App() {
  let [input, setInput] = useState("");

  function handleClick(value) {
    setInput(input + value);
  }

  function handleClear() {
    setInput("");
  }

  function handleEqual() {
    try {
      // Using a safe alternative would be better, but sticking to existing logic for now
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  }

  return (
    <div className='app-page-wrapper'>
      <div className='calculator-card'>
        <div className='output-display'>
          <input 
            type='text' 
            value={input} 
            readOnly 
            placeholder="0"
          />
        </div>
        <Keypad 
          handleClear={handleClear} 
          handleEqual={handleEqual} 
          handleClick={handleClick} 
        />
      </div>
    </div>
  );
}

export default App;
