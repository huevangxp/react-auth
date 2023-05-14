import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Login from './pages/auth/login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Error from './pages/Error';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Otp from './pages/auth/Otp';
import InputOtp from './pages/auth/InputOtp';
import Update from './pages/auth/Update';

const App = () => {


  const [loginStatus, setLoginStatus] = useState(false);



  const _checkLoginStatus = () => {
    let status = localStorage.getItem("token");
    if (status) {
      setLoginStatus(true);
    }
  }
  useEffect(() => {
    _checkLoginStatus();
  }, [])

  if (loginStatus === false) {
    return (
      <>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Login setLoginStatus={setLoginStatus} />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/input-otp' element={<InputOtp/>}/>
          <Route path="/register" element={<Register />} />
          <Route path='/update-password/:id' element={<Update/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </>
    )
  }


  return (
    <>
      <Header setLoginStatus={setLoginStatus} />
      <div style={{paddingTop:65}}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
    </>
  )
}

export default App;