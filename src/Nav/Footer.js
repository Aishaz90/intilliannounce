import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import './Footer.css'; // Assuming you will create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div id='floatf'>
        <div className="footer-links">
          <ul>
            <li className="footer-title">Quick Links</li>
            <hr />
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/categories" className="footer-link">Categories</Link></li>
            <li><Link to="/listing" className="footer-link">Listing Ads</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
          </ul>
          <ul>
            <li className="footer-title">Our Location</li>
            <hr />
            <li><Link to="/" className="footer-link">2118 Thornridge Cir. <br/>Syracuse,
            Connecticut 35624</Link></li>
          </ul>
        </div>
        <div className="subscribe-section">
          <h3 id="textSub">Subscribe For Update</h3>
          <div className="input-group" id="input">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your mail address.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ backgroundColor: '#BBB3B3' }}
            />
            <span className="input-group-text" style={{ color: '#FFF3F3', backgroundColor: '#E31616' }}>
              Subscribe
            </span>
          </div>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/pics/footer.png`} id='imgfooter' alt="" />
    </footer>
  );
};

export default Footer;
