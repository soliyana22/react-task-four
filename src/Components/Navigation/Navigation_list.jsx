import React, { useState, useContext, useEffect } from 'react';
import { SearchIcon, ShoppingCart, User } from 'lucide-react';
import { FiHeart } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navigation.css';
import { AuthContext } from '../../util/AuthContext.jsx';

const Navigation_list = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const location = useLocation();

  const toggleDropdown = () => {
    if (isLoggedIn && location.pathname === '/home') {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    console.log('isLoggedIn:', isLoggedIn, 'Location:', location.pathname);
  }, [isLoggedIn, location.pathname]);

  return (
    <div className="navigation-container">
      <div className="exclusive_text">
        <p>Exclusive</p>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className={`navigation ${menuOpen ? 'show' : ''}`}>
        <nav className="navigation-lists">
          <Link to="/" className="navigation-page">Home</Link>
          <Link to="/contact" className="navigation-page">Contact</Link>
          <Link to="/about" className="navigation-page">About</Link>
          <Link to="/signup" className="navigation-page">Sign Up</Link>
        </nav>
      </div>
      <div className="input_type">
        <div className="input-type-main">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="input-type-all"
          />
          <SearchIcon />
        </div>
        <div className="icons">
          <FiHeart className="heart-icon" size={22} />
          <ShoppingCart className="shopping-cart" size={22} />
          {isLoggedIn && location.pathname === '/home' && (
            <div className="user-icon-wrapper" style={{ position: 'relative' }}>
              <User
                className="user"
                size={22}
                onClick={toggleDropdown}
                style={{ cursor: 'pointer' }}
              />
              {isDropdownOpen && (
                <ul className="user-dropdown">
                  <li>
                    <Link to="/my-order" onClick={() => setIsDropdownOpen(false)}>My Order</Link>
                  </li>
                  <li>
                    <Link to="/my-cancellation" onClick={() => setIsDropdownOpen(false)}>My Cancellation</Link>
                  </li>
                  <li>
                    <span onClick={() => { logout(); setIsDropdownOpen(false); }}>Logout</span>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation_list;