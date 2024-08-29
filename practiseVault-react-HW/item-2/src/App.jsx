import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('abcdef');
  const onButtonClick = () => {
    setInputValue('A button is clicked');
  };

  return (
    <div className="wrapper">
      <input className="input" type="text" value={inputValue} />
      <button className="button" onClick={onButtonClick}>
        Click me to open an alert
      </button>
    </div>
  );
}

export default App;
