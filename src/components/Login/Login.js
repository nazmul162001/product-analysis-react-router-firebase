import React, { useState } from 'react';
import SignUp from '../SignUp/SignUp';
import ToggleSignInUp from '../ToggleSignInUp/ToggleSignInUp';
import './Login.css';

const Login = () => {
  const [clicked, setclicked] = useState('');
  return (
    <div className={`container ${clicked}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <SignUp />
        </div>
      </div>
      <ToggleSignInUp 
      clicked = {clicked}
      setclicked = {setclicked}
      />
    </div>
  );
};

export default Login;
