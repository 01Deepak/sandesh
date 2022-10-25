import React from 'react'
import './Login.style.scss';

const Login = () => {
    return (
        <div className='container'>
            <div className="app_title">
               <span>Sandesh</span>
            </div>
            <div className='wrapper'>
                <p className='title'>Login</p>
                <form className='form'>
                    <input type="email" name="email"  placeholder='email'/>
                    <input type="password" name="password" placeholder='password'/>
                    <button type="submit">Sign In</button>
                </form>
                <p>You don't have an account? register</p>
            </div>
        </div>
    )
}

export default Login