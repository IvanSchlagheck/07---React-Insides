import React, { useState, useCallback } from 'react';
//Components Imports
import Button from './components/UI/Button/Button.js'
import DemoOutput from './components/UI/Button/Demo/DemoOutput.js';
//Styles
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback( () => {
    if (allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph); // checks for sure the latest, latest, LATEST state change
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show= {showParagraph} />
      <Button onClick= {allowToggleHandler}>Allow Toggle</Button>
      <Button onClick= {toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
