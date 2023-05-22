// import axios from 'axios'
import React, { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import axios from 'axios';


// import axios from '../constants/axios';


const Home = () => {

  const [pokemon, setPokemon] = useState([]);
  const [number, setNumber] = useState(100);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    _getPokemon()
  }, [number])

  const _getPokemon = async () => {
    try {
      setIsLoading(true)
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${number}`)
        .then((data) => {
          setPokemon(data.data.results);
          setIsLoading(false)
        })
    } catch (error) {
      console.log(error);
    }
  }

  const addPo = () => {
    try {
      setNumber(number + 100);
    } catch (error) {
      console.log(error);
    }
  }

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
      <div>
        <div className="row">
          {
            pokemon?.map((data, index) => {
              return (
                <div key={index} className='col-md-3'>
                  <div className="shadow  h-100 w-100 m-2 mt-3">
                    <div className="text-center">

                      <img
                        className='w-75 h-100 p-4'
                        src={`https://img.pokemondb.net/artwork/large/${data.name}.jpg`}
                        alt='pokemon' />
                    </div>
                    <p className='text-center ' style={{ fontWeight: 'bold' }}>
                      {data.name}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="mb-5 mt-5 text-center ">
        {
          isLoading ? (
            <div>
              <div class="spinner-grow primary" style={{width: '3rem',height: '3rem'}} role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>) :
            (<div>
              <button className="btn btn-primary" onClick={(e) => addPo()}>Add More</button>
            </div>)
        }
      </div>
    </div>
  )
}

export default Home