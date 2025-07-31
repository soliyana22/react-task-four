import React from 'react'
import { ChevronDown } from 'lucide-react'
import './Header.css'
const Header = () => {
  return (
    <div className="header-container">
        <p className="header-sale">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <p className='header-shopnow'>Shop Now</p>
        <div className='header-language'>
          <p className='header-lang'>English </p>
          <ChevronDown size={22} color="white" className='header-lang-icon'/>
        </div>
    </div>
  )
}

export default Header