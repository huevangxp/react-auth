import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { toast } from 'react-toastify';

import axios from '../../constants/axios'

const InputOtp = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');

    const sendOtp = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/message', { email: email })
                .then((data) => {
                    // console.log(data);
                    navigate('/otp')
                    toast.success('🦄 get opt success');
                    
            })
        } catch (error) {
            console.log(error);
        }
    }

  return (
      <div className="d-flex align-items-center justify-content-center min-vh-100">
          <form style={{ width: '500px' }} onSubmit={sendOtp}>
              <h5>reset password by otp on email</h5>
              <br></br>
              <input
                  value={email}
                  onChange={e=> setEmail(e.target.value)}
              className="form-control"
              type="text" placeholder="email" /> <br/>
              <div className="d-flex justify-content-end">
              {/* <button className="btn btn-outline-danger text-end mx-2" onClick={e=> { e.preventDefault(); navigate('/')}}>ຍົກເລິກ</button> */}
          <button className="btn btn-primary text-end px-4">ສົ່ງ</button>
         </div>
          </form>
          {/* <ToastContainer/> */}
    </div>
  )
}

export default InputOtp