// import axios from 'axios'
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';



// import axios from '../constants/axios';


const Home = () => {

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   getUser()
  // }, [])

  // const getUser = async () => {
  //   try {
  //     await axios.get('/user')
  //       .then((data) => {
  //         setUser(data.data.user)
  //         console.log(data.data.user);
  //       })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div>
      <div style={{
        height: '80vh',
        backgroundColor: 'black',
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div>
        <h1>
          <ReactTypingEffect
            text={["Hello.", "World!"]}
          />
        </h1>
        {/* <p>ສະບາຍດີ</p> */}
       </div>
      </div>
    </div>
  )
}

export default Home