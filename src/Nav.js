import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };

  return (
    <nav>
        <h3>Logo</h3>
        <ul className='nav-links'>
            <Link style={navStyle} to="/number">
               <li>Mobile Number</li> 
            </Link>

            <Link style={navStyle} to="/otp">
               <li>Otp</li> 
            </Link>

            <Link style={navStyle} to="/name">
               <li>Name</li> 
            </Link>

            <Link style={navStyle} to="/detail">
               <li>Detail</li> 
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;