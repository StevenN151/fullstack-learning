import React, { useState } from 'react';

import './App.css';

function App() {
  const [content, setContent] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    const { name } = e.target.elements;
    const upperCaseName = name.value.toUpperCase();

    setContent(upperCaseName);
  };

  return (
    <div className="container">
      <h2>Convert Text to Uppercase</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" name="name" placeholder="Enter text here" />
        </div>
        <div>
          <button type="submit">Convert to uppercase</button>
        </div>
      </form>

      <div className="output">{content}</div>
    </div>
  );
}

export default App;
