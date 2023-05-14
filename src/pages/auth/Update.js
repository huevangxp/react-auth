import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from '../../constants/axios';
import { toast } from 'react-toastify';

const Update = () => {

    const navigate = useNavigate()
    const params = useParams()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        _getOtp();
    }, []);

    const _getOtp = async () => {
        try {
            const id = params.id
            await axios.get(`/get-otp/${id}`)
                .then((data) => {
                    setEmail(data.data.email);
                }).catch((err) => {
                    toast.error('update password fieled');
                });
        } catch (error) {
            console.log(error);
        }
    }

    const changePass = async (e) => {
        try {
            e.preventDefault();
            const pass = {
                email,
                password,
            }
            // console.log(pass);
            if (password === newPassword) {
                await axios.put('/change-password', { ...pass })
                .then((res) => {
                    // console.log(res.data);
                    toast.success('Password updated')
                    navigate('/')
            })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100">
            <div className="shadow p-5 bg-white rounded w-50">
                <h2>update password</h2> <br />
                <form onSubmit={changePass}>
                    <input
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                        className="form-control"
                        type="text" placeholder="password new" /> <br />
                    <input
                        value={newPassword}
                        onChange={e=> setNewPassword(e.target.value)}
                        className='form-control'
                        type="text" placeholder="confirm password new" /><br />
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary">update password</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update