import React, { useState, useEffect } from 'react'
import { SearchIcon, ShoppingCart, Menu, X, User,ShoppingBag } from 'lucide-react'
import { FiHeart,FiStar,FiLogOut,FiX} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import './Navigation.css'


const Navigation_list = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const handleUserClick = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleLogout = async () => {
    const auth = getAuth()
    await signOut(auth)
    setDropdownOpen(false)
  }

  return (
    <div className="Navigation-container">
      {/* Logo */}
      <div className="exclusive_text">
        <p>Exclusive</p>
      </div>

      {/* Hamburger Button */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Links */}
      <div className={`navigation ${menuOpen ? 'show' : ''}`}>
        <nav className="navigation-lists">
          <Link to="/" className="navigation-page">Home</Link>
          <Link to="/contact" className="navigation-page">Contact</Link>
          <Link to="/about" className="navigation-page">About</Link>
          <Link to="/signup" className="navigation-page">Sign Up</Link>
        </nav>
      </div>

      {/* Search + Icons */}
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
          
          {/* Show only if user is logged in */}
          {user && (
            <div className="user-dropdown-container">
              <User
                className="user-icon"
                size={22}
                onClick={handleUserClick}
              />
              {dropdownOpen && (
                <div className="user-dropdown">
                  <div className='each-user-dropdown'>
                  <User/>
                  <Link to="/my-orders" onClick={() => setDropdownOpen(false)}>Manage My Account</Link>
                  </div>
                   <div className='each-user-dropdown'>
                    <ShoppingBag/>
                  <Link to="/my-orders" onClick={() => setDropdownOpen(false)}>My Order</Link>
                  </div>
                  <div className='each-user-dropdown'>
                    <FiX size={18} className='cancel-icon' />
                  <Link to="/my-cancellations" onClick={() => setDropdownOpen(false)}>My Cancellations</Link>
                  </div>
                  <div className='each-user-dropdown'>
                  <FiStar/>
                  <Link to="/my-cancellations" onClick={() => setDropdownOpen(false)}>My Reviews</Link>
                  </div>
                  <div className='each-user-dropdown'>
                    <FiLogOut/>
                  <Link to="/my-cancellations" onClick={() => setDropdownOpen(false)}>Logout</Link>
                  
                </div>
              </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navigation_list
