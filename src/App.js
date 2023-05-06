import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';

import Login from './pages/login';
import Register from './pages/Register';
import Home from './pages/Home';
import Error from './pages/Error';
import Header from './components/Header';

const App = () => {


  const [loginStatus, setLoginStatus] = useState(false);

  axios.defaults.baseURL = 'http://localhost:3000';
  axios.defaults.withCredentials = true;

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
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    )
  }


  return (
    <>
      <Header setLoginStatus={setLoginStatus} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App;