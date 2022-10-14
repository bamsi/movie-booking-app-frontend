import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';

function App() {
  const [classValue, setClassValue] = useState('show');
  const [showNav, setShowNav] = useState('block');
  const toggleMenu = () => {
    if (classValue === 'show') {
      setClassValue('hide');
      setShowNav('none');
    } else {
      setClassValue('show');
      setShowNav('block');
    }
  };
  return (
    <div className="App">
      <Navbar
          classValue={classValue}
          toggleMenu={toggleMenu}
        />
    </div>
  );
}

export default App;
