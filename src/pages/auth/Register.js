import React, { useState } from 'react';
import axios from '../../constants/axios';
import { Link, useNavigate } from 'react-router-dom';
import {toast}  from 'react-toastify';

const Register = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userRegister = (e) => {
        e.preventDefault();
        try {
            const user = {
                username,
                email,
                phone,
                password
            }
            if (password === confirmPassword) {
                axios.post('/register', user)
                    .then((data) => {
                        // console.log(data.data);
                        axios.post('/message', { email: email })
                            .then(() => {
                                toast.success('🦄 Register success!', {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    });
                                navigate('/otp')
                            })
                    })
            }
            else {
                console.log('password not match');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container d-flex justify-content-center mt-2'>
            <div className='shadow p-5  bg-white rounded w-50'>
                <div className='d-flex justify-content-center'>
                    <h1>Login Form</h1>
                    {/* <img
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: '50%'
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSirlWM2XH2Og8-KhyAVA4qk_C1NwF9KrA&usqp=CAU" /> */}
                </div>
                <form onSubmit={userRegister}>
                    <div>
                        <label className='my-1 font-weight-bold'>user name</label><br />
                        <input
                            className='form-control'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            type="text"
                            placeholder='username' />
                    </div>
                    <div>
                        <label className='my-1 font-weight-bold'>phone</label><br />
                        <input
                            className='form-control'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            type="text"
                            placeholder='phone' />
                    </div>
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
                            placeholder='password' />
                    </div>

                    <div>
                        <label>confirm password</label><br />
                        <input
                            className='form-control'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            type="password"
                            placeholder='confirm password' /><br />
                    </div>

                    <div className=' d-flex justify-content-end'>

                        <Link to='/'>
                            <button className="btn btn-outline-danger mx-2 px-4">
                                Cancel
                            </button>
                        </Link>
                        <button className="btn btn-primary px-4">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;