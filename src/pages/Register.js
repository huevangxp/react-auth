import React, { useState } from 'react'

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const userRegister = (e) => {
        e.preventDefault();
        alert(username, password);
    }

    return (
        <div className='container d-flex justify-content-center mt-5'>
            <div className='shadow p-5 mb-5 bg-white rounded w-50'>
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
                            placeholder='password' /><br />
                    </div>
                    <div className=' d-flex justify-content-end'>

                        <button className="btn btn-primary px-4">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;