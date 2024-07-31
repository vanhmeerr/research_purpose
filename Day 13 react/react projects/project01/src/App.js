import React, { useState, useEffect } from 'react'
// import Home from './Home'
// import Service from './Service/Service'
// import { BrowserRouter } from 'react-router-dom'


function ToggleButton() {
  const [isOn, setIsOn] = useState(true);
  const toggle = () => {
    setIsOn(!isOn);

  };
  useEffect(() => {
    document.body.style.backgroundColor = isOn ? 'black' : 'white';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [isOn]);
  return (
    <div className="container">
      <button onClick={toggle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );

};

export default ToggleButton;
