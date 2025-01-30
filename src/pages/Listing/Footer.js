import React from "react";
import './Footer.css'; // Assuming you will create a separate CSS file for styling

export default function Footer() {
  return (
    <footer>
      {/* Subscribe Section */}
      <div className="subscribe-section">
        <h3 className="textSub">Subscribe For Updates</h3>
        <div className="input-group" id="input">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email address..."
            aria-label="Recipient's email"
            aria-describedby="subscribe-btn"
          />
          <span id="subscribe-btn">Subscribe</span>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        {footerData.map((section, index) => (
          <ul key={index}>
            <li className="footer-title">{section.title}</li>
            <hr className="footer-line" />
            {section.links.map((link, i) => (
              <li key={i} className="footer-item">{link}</li>
            ))}
          </ul>
        ))}
      </div>
    </footer>
  );
}


const footerData = [
  {
    title: "Company",
    links: ["Home", "About Us", "Our Factories", "Mission and Strategy", "Profitable Actions"],
  },
  {
    title: "How to Sell Fast",
    links: ["Selling Tips", "Buy and Sell Quickly", "Membership", "Banner Advertising", "Promote Your Ad"],
  },
  {
    title: "Information",
    links: ["Company & Contact Info", "Blog & Articles", "Sitemap", "Terms of Service", "Privacy Policy"],
  },
  {
    title: "Help & Support",
    links: ["Live Chat", "FAQ", "How to Stay Safe", "Terms & Conditions", "Contact Us"],
  },
];
