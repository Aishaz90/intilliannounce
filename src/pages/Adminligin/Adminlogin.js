import React from 'react'
import { Link } from 'react-router-dom'
import './Adminlogin.css'
export default function Adminlogin() {
  return (
    <div id="imgcont">
      <img src="pics/AsAdmin.png" className="imgee" alt="" />
      <div id="divupp">
        <Link className="navbar-brand" to="/">
          <img src="pics/logoo.png" alt="Logo" id='lg'/>
        </Link>
        <div id="formulaires">
          <h2 id='hh2'>Admin Section</h2>
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
        </div>
      </div>
    </div>
  )
}
