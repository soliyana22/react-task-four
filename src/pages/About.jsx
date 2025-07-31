import React from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import './About.css'
import { useNavigate } from 'react-router-dom'
const About = () => {
 const navigate = useNavigate();
  return (
    <div className='error-container'>
      <div className='nav-links'>
        <Link to="/" className='Inactive'>Home</Link><span>/</span>404 Error
      </div>
    <div className='error-message' >
      <p className='main'>404 Not Found</p>
      <p>Your visited page not found. You may go home page.</p>
    </div>
    <div className='back-button'>
      <button className='back-button-main' onClick={() => navigate('/home')}>
        Back to Homepage
      </button>
    </div>

</div>
  )
}

export default About
