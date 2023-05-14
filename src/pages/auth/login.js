import React, { useState } from 'react';
import axios from '../../constants/axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({ setLoginStatus }) => {


    const [email, setEmail] = useState('huevang933@gmail.com');
    const [password, setPassword] = useState('huevangxp');

    const userLogin = async (e) => {
        e.preventDefault();
        try {
            const user = {
                email,
                password
            }
            await axios.post('/login', {...user})
                .then((data) => {
                    localStorage.setItem("token", data);
                    toast.success('login successfully...')
                    setLoginStatus(true);
                    setEmail('');
                    setPassword('');

                }).catch((error) => {
                    toast.error("login failed", error);
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSirlWM2XH2Og8-KhyAVA4qk_C1NwF9KrA&usqp=CAU"
                        alt='profile' />
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
                    <div>
                    <span>if you forget password</span>
                    <Link to='/input-otp' className='btn' style={{color:'red', borderBottom:'1px solid red'}}>reset password</Link>
            </div>
                    <div className=' d-flex justify-content-end'>
                        <button className="btn btn-primary px-4">Login</button>
                    </div>
                </form>
            <div>
                    <span>if you want to create </span>
                    <Link to='/register' className="btn btn-outline-danger btn-sm">New Account</Link>
            </div>
            
            </div>
        </div>
    )
}

export default Login;