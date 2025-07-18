import React from 'react'
import { SearchIcon,Heart, ShoppingCart } from 'lucide-react'
import { FiHeart } from 'react-icons/fi'
import {Link} from 'react-router-dom'
import './Navigation.css'
const Navigation_list = () => {
  return (
    <div className="Navigation-container">
      <div className="exclusive_text">
        <p>Exclusive</p>
      </div>
      <div className='navigation'>
        <nav className='navigation-lists'>
            <Link  to="/" className='navigation-page'>Home</Link>
            <Link  to="/contact" className='navigation-page'>Contact</Link>
            <Link  to="/about" className='navigation-page'>About</Link>
            <Link  to="/signup" className='navigation-page'>Sign Up</Link>
        </nav>
      </div>
      <div className='input_type'>
        <div className='input-type-main'>
          <input type="text" placeholder='what are you looking for?' className='input-type-all'/>
          <SearchIcon/>
        </div>
        <div className='icons'>
        <FiHeart className='heart-icon' size={22}/>
        <ShoppingCart className='shopping-cart' size={22}/>
        </div>   
      </div>
         
    </div>
  )
}

export default Navigation_list
