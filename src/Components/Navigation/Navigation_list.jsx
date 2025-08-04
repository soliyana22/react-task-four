import React, { useState, useContext, useEffect, useRef } from 'react';
import { SearchIcon, ShoppingCart, User, Menu, X, Star, LogOut } from 'lucide-react';
import { FiHeart } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import { AuthContext } from '../../util/AuthContext.jsx';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const Navigation_list = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
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

  // Hide icons and dropdown on /signup and /login pages
  const isSignupOrLogin = location.pathname === '/signup' || location.pathname === '/login';

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

        {!isSignupOrLogin && (
          <div className="icons">
            <FiHeart className="heart-icon" size={22} />
            <div className="cart-icon-wrapper">
              <ShoppingCart
                className="shopping-cart"
                size={22}
                onClick={() => navigate('/cart')}
              />
              {cartItemCount > 0 && (
                <span className="cart-counter">{cartItemCount}</span>
              )}
            </div>
            <div className="user-icon-wrapper" ref={dropdownRef}>
              <User
                className="user"
                size={22}
                onClick={toggleDropdown}
              />
              {isLoggedIn && isDropdownOpen && (
                <ul className="user-dropdown" role="menu">
                  <li className="menuitem">
                    <Link to="/my-account" onClick={() => setIsDropdownOpen(false)}>
                      <div className='menu-icon'><User size={32} className='menu-icon'/><p>Manage My Account</p></div>
                    </Link>
                  </li>
                  <li className="menuitem">
                    <Link to="/my-order" onClick={() => setIsDropdownOpen(false)}>
                      <div className='menu-icon'><HiOutlineShoppingBag size={32} className='menu-icon'/><p>My Order</p></div>
                    </Link>
                  </li>
                  <li className="menuitem">
                    <Link to="/my-cancellation" onClick={() => setIsDropdownOpen(false)}>
                      <div className='menu-icon'><X size={32} /><p>My Cancellation</p></div>
                    </Link>
                  </li>
                  <li className="menuitem">
                    <Link to="/my-Reviews" onClick={() => setIsDropdownOpen(false)}>
                      <div className='menu-icon'><Star size={32} className='menu-icon'/><p>My Reviews</p></div>
                    </Link>
                  </li>
                  <li className="menuitem">
                    <span onClick={() => { logout(); setIsDropdownOpen(false); navigate('/login'); }}>
                      <div className='menu-icon'><LogOut size={32} className='menu-icon'/><p>Logout</p></div>
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation_list;