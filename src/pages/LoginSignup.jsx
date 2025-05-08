import React from 'react'
import './Css/LoginSignup.css'
function LoginSignup() {
  return (
    <div className='main-loginSignup-container'>
      <div className="loginSignup-holder">
        <h3>Sign Up</h3>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Password'/>
          <button>Continue</button>
        </div>
        <div className="loginSignup-agree">
          <p>Already have an account?<span>Login here</span></p>
            
            <p className='terms'><input type="checkbox" name="" id="" />By continuing, i agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
