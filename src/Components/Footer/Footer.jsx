
import React from 'react';
import { FiSend } from "react-icons/fi";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container'>
        <div className='footer-column'>
          <h2>Exclusive</h2>
          <p>Suscribe</p>
          <p>Get 10% off your first order</p>
          <div className='email'>
            <input type='email' placeholder='enter your email' />
            <FiSend className='email-icon' />
          </div>
        </div>
        <div className='footer-column'>
          <p>Support</p>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className='footer-column'>
          <p>Account</p>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className='footer-column'>
          <p>Quick Link</p>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
        </div>
        <div className='footer-column'>
          <p>Download App</p>
          <p>Save $3 with App New User Only</p>
          <div className="download-method">
            <img className="qr" src="./../assets/images/QR_code.jpg" alt="QR Code" />
            <div className="store-buttons">
              <img src="./../assets/images/Google_play.png" alt="Google Play" />
              <img src="./../assets/images/App_store.png" alt="App Store" />
            </div>
          </div>
          <div className="social-icons">
            {[
              { icon: <Facebook size={24} className="icon" />, name: "Facebook" },
              { icon: <Twitter size={24} className="icon" />, name: "Twitter" },
              { icon: <Instagram size={24} className="icon" />, name: "Instagram" },
              { icon: <Linkedin size={24} className="icon" />, name: "Linkedin" },
            ].map((social, index) => (
              <span key={index} aria-label={social.name}>
                {social.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='copy-right'>
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
