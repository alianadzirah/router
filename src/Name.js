import React, { useState } from 'react';
import './App.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function Name () {
    const location = useLocation();
    const state2 = location.state;
    console.log(state2);  

    const [name, setName] = useState("");
    const [ic, setIC] = useState("");
    const data3 = {
        message3: state2.message1,
        message4: state2.message2,
        message5: "Your Name: "+name,
        message6: "Your IC Number: "+ic,
    };
    
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const icChangeHandler = (event) => {
        setIC(event.target.value);
    }

    const navigate = useNavigate();

    // function handleClick() {
    //     navigate("/detail")
    // }

    return (
        <div className='App'>
            <h1>Hello</h1>
            
            <label>Enter your name:
                <br /><br />
                <input 
                    type="text" 
                    value={name}
                    onChange={nameChangeHandler}
                />
            </label>
            <br /><br />

            <label>Enter your ic number:
                <br /><br />
                <input 
                    type="text" 
                    value={ic}
                    onChange={icChangeHandler}
                />
            </label>
            <br /><br />
            <button>
                <Link style={{ textDecoration: 'none', color:'black'}} to="/detail" state={data3}>Submit</Link>
            </button>
            

            <br /><br />
        </div>
    )
}

export default Name