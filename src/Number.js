import React, { useState, Fragment } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';

function Number(props) {
    const [number, setNumber] = useState("");

    const numberChangeHandler = (event) => {
        setNumber(event.target.value);
    }

    const data1 = {
        message: "Mobile Number: "+number,
    };
    
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/otp")
    }

    return(
        <div className='App'>
            <Fragment>
                    <form onSubmit={handleSubmit}>
                        <label>Mobile Number:
                            <input 
                                type="text" 
                                id="number"
                                value={number}
                                onChange={numberChangeHandler}
                            />
                        </label>
                        <br />                        
                    </form>
                    <button>
                        <Link style={{ textDecoration: 'none', color:'black' }} to="/otp" state={data1}>Submit</Link>
                    </button>
                    
            </Fragment>
        </div>
    );
           
};

export default Number;