import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './components/pages/splash';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import Navbar from './layout/Navbar';

function App() {
  const [classValue, setClassValue] = useState('hide');
  // const [showNav, setShowNav] = useState('block');
  const toggleMenu = () => {
    if (classValue === 'show') {
      setClassValue('hide');
      // setShowNav('none');
    } else {
      setClassValue('show');
      // setShowNav('block');
    }
  };
  return (
    <div className="main-container">
      <div>
        <Navbar
          classValue={classValue}
          toggleMenu={toggleMenu}
        />
      </div>
      <div className="container-fluid px-0">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
