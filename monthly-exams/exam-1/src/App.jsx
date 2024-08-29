import React, { useState } from 'react';

import './App.css';

const colors = ['red', 'green', 'blue', 'purple', 'orange', 'black'];

function App() {
  const [colorIndex, setColor] = useState('');
  const buttonColor = colors[colorIndex];
  const onButtonClick = () => {
    //wrapper(buttonColor)
  };

  return (
    <div className={`wrapper ${buttonColor}`}>
      <div>
        <button className="button" onClick={onButtonClick}></button>
      </div>
    </div>
  );
}

export default App;
