import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { moneyCurrency } from '../constants';

const Contact = () => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState('');
  const [searchs, setSearchs] = useState({})

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const search = async (e) => {
    // e.preventDefault();
    try {
      await axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then((res) => {
        // console.log();
          setSearchs(res.data[0])
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="my-2 py-2 d-flex">
        <input
          value={name}
          onChange={e=>setName(e.target.value)}
          className='form-control w-50 py-2'
          type="text"
          placeholder="search country flag" />
        <button className='btn btn-primary mx-2' onClick={e=> {search()}}>search</button>
      </div>
      <div>
  {
    searchs === "" ? (
      <div>
        <h1>no results</h1>
      </div>
    ) : (
      <div>
        <p>{searchs.official}</p>
      </div>
    )
  }
      </div>
      <div>
      <p> ຄົນທັງໝົດ {moneyCurrency(countries.reduce((sum, data) => sum + data.population , 0))} ຄົນ</p>

      </div>
      <div className="row">
        {countries.map((country, index) => (
          <div className="col-md-3 border p-4" key={index}>
            <img src={country.flags.png} alt='country' className="img-fluid" />
            <p>{country.name.official}</p>
            <p>{moneyCurrency(country.population)} ຄົນ</p>
            <p>{moneyCurrency(country.area)} ກມ</p>
            <p>ພູມີສາດ : { country.region }</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
