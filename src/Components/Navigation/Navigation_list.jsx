// Navigation_list.jsx
import React, { useState, useContext, useEffect, useRef } from 'react';
import { SearchIcon, ShoppingCart, User, Menu, X } from 'lucide-react';
import { FiHeart } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Added useNavigate
import './Navigation.css';
import { AuthContext } from '../../util/AuthContext.jsx';

const Navigation_list = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate(); // Added navigate
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Log debug info on render
  useEffect(() => {
    console.log('Render - isLoggedIn:', isLoggedIn, 'Location:', location.pathname, 'menuOpen:', menuOpen, 'isDropdownOpen:', isDropdownOpen);
  }, [isLoggedIn, location.pathname, menuOpen, isDropdownOpen]);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

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
          <Link to="/" className="navigation-page" onClick={handleLinkClick}>Home</Link>
          <Link to="/contact" className="navigation-page" onClick={handleLinkClick}>Contact</Link>
          <Link to="/about" className="navigation-page" onClick={handleLinkClick}>About</Link>
          <Link to="/signup" className="navigation-page" onClick={handleLinkClick}>Sign Up</Link>
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
          <ShoppingCart
            className="shopping-cart"
            size={22}
            onClick={() => navigate('/cart')} // Navigate to cart on click
          />
          {isLoggedIn && (
            <div className="user-icon-wrapper" ref={dropdownRef}>
              <User
                className="user"
                size={22}
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <ul className="user-dropdown">
                  <li>
                    <Link to="/my-order" onClick={() => setIsDropdownOpen(true)}>My Order</Link>
                  </li>
                  <li>
                    <Link to="/my-cancellation" onClick={() => setIsDropdownOpen(true)}>My Cancellation</Link>
                  </li>
                  <li>
                    <span onClick={() => { logout(); setIsDropdownOpen(true); }}>Logout</span>
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