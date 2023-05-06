import axios from 'axios'
import React, { useEffect } from 'react';

const Home = () => {


  useEffect(() => {
    getUser()
  }, [])
  

const getUser = async () => {
    try {
        await axios.get('http://localhost:7000/api/user')
            .then((data) => {
                console.log('user data', data.data.user);
            })
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div>
      <h2>huevang home page</h2>
    </div>
  )
}

export default Home