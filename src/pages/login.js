import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Login = ({ setLoginStatus }) => {


    const [email, setEmail] = useState('huevang@email.com');
    const [password, setPassword] = useState('huevang');



    const userLogin = async (e) => {
        e.preventDefault();
        try {
            const user = {
                email,
                password
            }
            // console.log(user);
            await axios.post('http://localhost:7000/api/login', user)
                .then((data) => {
                    localStorage.setItem("token", data);
                    setLoginStatus(true);
                    setEmail('');
                    setPassword('');

                })
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className='container d-flex justify-content-center mt-5'>
            <div className='shadow p-5 mb-5 bg-white rounded w-50'>
                <div className='d-flex justify-content-center'>
                    <img
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: '50%'
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSirlWM2XH2Og8-KhyAVA4qk_C1NwF9KrA&usqp=CAU" />
                </div>
                <form onSubmit={userLogin}>
                    <div>
                        <label className='my-1 font-weight-bold'>email</label><br />
                        <input
                            className='form-control'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                            placeholder='email' />
                    </div>
                    <div>
                        <label>password</label><br />
                        <input
                            className='form-control'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder='password' /><br />
                    </div>
                    <div className=' d-flex justify-content-end'>

                        <button className="btn btn-primary px-4">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;