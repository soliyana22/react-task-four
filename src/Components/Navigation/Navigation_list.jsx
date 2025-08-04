import React, { useState, useContext, useEffect, useRef } from 'react';
import { SearchIcon, ShoppingCart, User, Menu, X } from 'lucide-react';
import { FiHeart } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Added useSelector
import './Navigation.css';
import { AuthContext } from '../../util/AuthContext.jsx';

const Navigation_list = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  // Get cart items from Redux store and calculate total items
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

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
    console.log('Render - isLoggedIn:', isLoggedIn, 'Location:', location.pathname, 'menuOpen:', menuOpen, 'isDropdownOpen:', isDropdownOpen, 'cartItemCount:', cartItemCount);
  }, [isLoggedIn, location.pathname, menuOpen, isDropdownOpen, cartItemCount]);

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
          <div className="cart-icon-wrapper" style={{ position: 'relative' }}>
            <ShoppingCart
              className="shopping-cart"
              size={22}
              onClick={() => navigate('/cart')}
            />
            {cartItemCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: '#DB4444',
                  color: 'white',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {cartItemCount}
              </span>
            )}
          </div>
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