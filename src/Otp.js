import React, { useState, Fragment } from 'react';
import './App.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const ran = Math.floor(Math.random()*99999)+100000;

function Otp(props) {
    const location = useLocation();
    const state = location.state;
    console.log(state);
    
    const [otp, setOTP] = useState("");
  
    const data2 = {
        message1: state.message,
        message2: "OTP: "+otp,
    };
    
    const otpChangeHandler = (event) => {
        setOTP(event.target.value);
    }
        
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='App'>
            <Fragment>
                OTP = {ran} 
                <br /><br />
                <form onSubmit={handleSubmit}>
                    <label>OTP:
                        <input 
                            type="text" 
                            id='otp'
                            value={otp}
                            onChange={otpChangeHandler}
                        />
                        <br /><br />
                        {/* make this button can be click as router */}
                        {/*  */}
                        <br /><br />
                    </label>
                </form>
                <button >
                    <Link style={{ textDecoration: 'none', color:'black' }} to="/name" state={data2} >Submit</Link>
                </button>
            </Fragment>
        </div>
        //put all value in fragment props here and call props in details
    );
}

export default Otp;