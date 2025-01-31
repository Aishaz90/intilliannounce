import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';

export default function Contact() {
  return (
    <div>
      <div className='post'>
        <img src="pics/post1.png" alt="" className='img1' />
        <div className='blur'>
          <Nav />
          <div className="title">
            <h1 id='h11'>Contact Us</h1>
            <Link to="/" className='aa'>Home ---</Link>
            <Link to='/contact' className='aa'>Contact Us</Link>
          </div>
        </div>
      </div>

      <div id="container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103599.79974620968!2d-5.916870860617949!3d35.76324614996101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTanger!5e0!3m2!1sfr!2sma!4v1729441546096!5m2!1sfr!2sma" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div id="container2">
        <div style={{ borderRight: '#01005328 solid' }}>
          <div id="d1" style={{ display: 'flex' }}>
            <div className="divside"></div>
            <h4 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold', marginTop: '3%', marginLeft: '2%' }}>Send Message to Us</h4>
          </div>
          <form style={{ padding: '20px' }}>
            <input type="text" placeholder="Enter your name ..." className="form-control" style={{ display: 'inline-block', width: '48%', height: '50px', background: 'url(pics/p/User.png) no-repeat 10px 50%' }} />
            <input type="text" placeholder="Enter your Mail Address ..." className="form-control" style={{ width: '48%', display: 'inline-block', marginLeft: '2.5%', height: '50px', background: 'url(pics/p/Vector-1.png) no-repeat 10px 50%' }} />
            <input type="text" placeholder="Subject" style={{ display: 'block', width: '100%', height: '50px', background: 'url(pics/p/Vector-2.png) no-repeat 20px 50%' }} className="form-control mt-3" />
            <textarea name="msg" placeholder="Type your Message ..." className="form-control w-100 mt-3" style={{ height: '300px', background: 'url(pics/p/Vector.png) no-repeat 10px 5%' }}></textarea>
            <input type="submit" value="Send" className="b1" style={{marginTop: '50px', fontWeight: 'bolder', fontFamily: 'Abhaya Libre SemiBold' }} />
          </form>
        </div>
        
        <div>
          <div id="d1" style={{ display: 'flex', width: '100%' }}>
            <div className="divside"></div>
            <h4 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold', marginTop: '3%', marginLeft: '2%', width: '100%' }}>Get In Touch</h4>
          </div>
          <div>
            <p style={{ color: '#01005391', padding: '5%' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, <br/>odio libero non possimus eveniet ipsa neque beatae, eos, magnam <br/>officiis rem asperiores consequatur vero cumque voluptatibus architecto debitis? <br/> Adipisci, ipsum.</p>
            <div style={{ background: 'url(pics/p/Vector-3.png) no-repeat 15px', width: '100%', height: '100px' }}>
              <h5 style={{ color: '#020053', marginLeft: '15%', fontFamily: 'Abhaya Libre SemiBold', paddingTop: '5%' }}>2118 Thornridge Cir. Syracuse,<br /> Connecticut 35624</h5>
            </div>
            <div style={{ background: 'url(pics/p/Vector-4.png) no-repeat 15px', width: '100%', height: '100px' }}>
              <h5 style={{ color: '#020053', marginLeft: '15%', fontFamily: 'Abhaya Libre SemiBold', paddingTop: '5%' }}>+091 345 6789<br />+034 567 8910</h5>
            </div>
            <div style={{ background: 'url(pics/p/Vector-5.png) no-repeat 15px', width: '100%', height: '100px' }}>
              <h5 style={{ color: '#020053', marginLeft: '15%', fontFamily: 'Abhaya Libre SemiBold', paddingTop: '5%' }}>Info@intilliannounce.com<br />azjhn.announce@intillianounce.com</h5>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
