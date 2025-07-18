import React from 'react'
import './SignUp.css'
const SignUp = () => {
  return (
    <div className='signup-container'>
      <div className='signup-content'>
        <div className='image_content'>
          <img src="./../../assets/images/E-commerce_img.jpg"/>
        </div>
        <div className='text_content'>
          <p>Create Account</p>
          <p>Enter your details hear</p>
          <div className='text-box'>
            <input type="text" placeholder='Name' className='input-box'/>
          <input type="text" placeholder='Email or Phone Number' className='input-box'  />
          <input type="text" placeholder='Password' className='input-box' />
          <button>
            Create Account
          </button>
          {/* <div className='signup-google'>
           <p>Sign Up with Google</p>
          
          </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
