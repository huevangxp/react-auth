import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

import axios from '../../constants/axios'
import { toast } from 'react-toastify';

const Otp = () => {

    const navigate = useNavigate()

    const [otp, setOtp] = useState('');

    const sendOtp = async () => {
        try {
            //  console.log(otp);
            await axios.post('/check-otp', {otp:otp })
                .then((data) => {
                    // console.log(data);
                    toast.success('🦄 your OTP corrent...');
                navigate(`/update-password/${otp}`);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-center min-vh-100" style={{
                        width: '100%',
                        height: '100px',
                        border: '1px solid #ccc',
                        borderRadius:' 5px',
                        fontSize: '60px',
                        fontWeight: 'bold',
                        lineHeight: 1,
                      }}   >

                <div>
                <OtpInput
                    
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    size={160}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                    />
                    <br/>
                    <div className="d-flex justify-content-end">
                        
                <button className="btn btn-primary" onClick={e=>sendOtp()}>ສົ່ງ OTP</button>
               </div>
              </div>
            </div>
        </>
    )
}

export default Otp;