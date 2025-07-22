import React, { useState } from 'react'
import { SearchIcon, ShoppingCart } from 'lucide-react'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navigation.css'

const Navigation_list = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="Navigation-container">
      {/* Logo/Brand */}
      <div className="exclusive_text">
        <p>Exclusive</p>
      </div>

      {/* Hamburger Button for Mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Nav Links */}
      <div className={`navigation ${menuOpen ? 'show' : ''}`}>
        <nav className="navigation-lists">
          <Link to="/home" className="navigation-page">Home</Link>
          <Link to="/contact" className="navigation-page">Contact</Link>
          <Link to="/about" className="navigation-page">About</Link>
          <Link to="/" className="navigation-page">Sign Up</Link>
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
        </div>
      </div>
    </div>
  )
}

export default Navigation_list
