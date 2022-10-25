import React from 'react'
import './Register.style.scss'

const Register = () => {
  return (
    <div className='container'>
        <div className="app_title">
           <span>Sandesh</span>
        </div>
        <div className='wrapper'>
            <p className='title'>Register</p>
            <form className='form'>
              <input type="name" name="name" placeholder="Enter Name"/>
                <input type="email" name="email"  placeholder='Email'/>
                <input type="password" name="password" placeholder='Password'/>
                <label id='upload_dp' >Add DP
                <input type="file" id ='upload_dp' className='dp_upload' name="add_dp"/>
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <p>You have already an account? Sign In</p>
        </div>
    </div>
)
}

export default Register