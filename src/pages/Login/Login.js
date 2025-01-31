import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div id="imgcont">
      <img src="pics/login.png" className="imge" alt="" />
      <div id="divup">
        <Link className="navbar-brand" to="/">
          <img src="pics/logoo.png" alt="Logo" />
        </Link>
        <div id="formulaire">
          <h2 id='hh2'>Login</h2>
          <div id="inputs">
            <label
              htmlFor=""
              style={{
                color: '#020053',
                fontFamily: 'Abhaya Libre SemiBold',
              }}
            >
              User name or email address
            </label>
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: '#FFF3F3',
                border: '1px solid #020053',
                marginBottom: '5px',
              }}
            />
            <label
              htmlFor=""
              style={{
                color: '#020053',
                fontFamily: 'Abhaya Libre SemiBold',
              }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              style={{
                backgroundColor: '#FFF3F3',
                border: '1px solid #020053',
              }}
            />
          </div>
          <button
            to="#"
            style={{
              padding: '10px',
              borderRadius: '10px',
              border:'none',
              backgroundColor: '#FA5252',
              color: '#f5f2f2ea',
              fontFamily: 'Abhaya Libre SemiBold',
              margin: '10% 0% 0% 5%',
              width:'20%',
            }}
          >
            Login
          </button>
          <Link to="#" style={{ color: '#FA5252' }} id="forget">
            Forget your password
          </Link>
          <img src="images/or.png" alt="" id="or" />
          <div>
            <div id="alinks">
              <Link
                to=""
                style={{ textDecoration: 'none', color: '#4A429A' }}
              >
                <img
                  src="images/GoogleChromeLogo.png"
                  alt=""
                  style={{ width: '20px', margin: '2%' }}
                />
                Continue with Google
              </Link>
            </div>
            <div id="alinks">
              <Link
                to=""
                style={{ textDecoration: 'none', color: '#4A429A' }}
              >
                <img
                  src="images/User.png"
                  alt=""
                  style={{ width: '20px', margin: '2%' }}
                />
                Continue as Admin
              </Link>
            </div>
          </div>
          <p
            style={{
              color: '#020053',
              fontFamily: 'Abhaya Libre SemiBold',
              margin: '0% 6% 0% 6%',
            }}
          >
            Don't you have an account?
          </p>
          <Link id="sign" to="/sigup" style={{ color: '#FA5252' }}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
