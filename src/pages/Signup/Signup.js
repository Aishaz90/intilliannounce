import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
export default function Signup() {
  return (
    <div id="imgcont">
      <img src="pics/singup.png" className="imge" alt="" />
      <div id="divup">
        <Link className="navbar-brand" to="/">
          <img src="pics/logoo.png" alt="Logo" />
        </Link>
        <div id="formulaire">
          <h2 id='hh2'>Sign Up</h2>
         <div id="inputs">
          <label style={{ color: "#020053", fontFamily: "Abhaya Libre SemiBold" }}>
          Username
        </label>
        <input
          type="text"
          className="form-control"
          style={{
            backgroundColor: "#FFF3F3",
            border: "1px solid #020053",
            marginBottom: "5px",
          }}
        />
         <label style={{ color: "#020053", fontFamily: "Abhaya Libre SemiBold" }}>
          Email
        </label>
        <input
          type="email"
          className="form-control"
          style={{
            backgroundColor: "#FFF3F3",
            border: "1px solid #020053",
            marginBottom: "5px",
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
            <label style={{ color: "#020053", fontFamily: "Abhaya Libre SemiBold" }}>
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          style={{
            backgroundColor: "#FFF3F3",
            border: "1px solid #020053",
          }}
        />
          </div>
          <div className="terms">
            <input type="checkbox" id="terms-checkbox" />
            <label htmlFor="terms-checkbox">
              By registering, you accept our{" "}
              <Link to="/terms" style={{
            backgroundColor: "#FFF3F3",
            color: '#fa5252',
          }}>Terms & Conditions</Link>
            </label>
          </div>
          <button className="signup-btn">Sign Up</button>
          <img src="images/or.png" alt="" id="orr" />
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
            <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}
