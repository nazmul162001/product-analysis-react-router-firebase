import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SignUp from '../SignUp/SignUp';
import ToggleSignInUp from '../ToggleSignInUp/ToggleSignInUp';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const Login = () => {
  const [clicked, setclicked] = useState('');
  const [err, setErr] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  // handle email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // handle password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // handle signIn
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    // confirm user
    if(!user){
      setErr('User not found! please signUp or input valid info');
      return;
    }
    if (user) {
      navigate('/');
      setErr('');
    } 
  };

  return (
    <div className={`container ${clicked}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSignIn} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input onChange={handleEmail} type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                onChange={handlePassword}
                type="password"
                placeholder="Password"
              />
            </div>
            <p className="text-red-600"> {err} </p>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebook />
              </a>
              <a href="#" className="social-icon">
                <FcGoogle />
              </a>
            </div>
          </form>
          {/* signUp  */}
          <SignUp setclicked={setclicked} />
        </div>
      </div>
      {/* Toggle signUp  */}
      <ToggleSignInUp setclicked={setclicked} />
    </div>
  );
};

export default Login;
