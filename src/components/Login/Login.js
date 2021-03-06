import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SignUp from '../SignUp/SignUp';
import ToggleSignInUp from '../ToggleSignInUp/ToggleSignInUp';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const googleProvider = new GoogleAuthProvider();
  const [clicked, setclicked] = useState('');
  const [err, setErr] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);

  // for private route
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // handle email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // handle password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
    // console.log(user);
  }


  // handle signIn
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
      })
      .catch(error => {
        setErr('user not found! please sign Up or input valid info');
        toast.error('user not found');
        console.log(error);
      });
  };

  // handle google signIN
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        toast.success('successfully login');
        console.log(user);
      })
      .catch((error) => {
        toast.error('login faild, try again');
        return;
      });
  };

  return (
    <div className={`container ${clicked}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSignIn} className="sign-in-form">
            <p>SignUp with your email Or Use this email:</p>
            <p><strong>Email:</strong> abc@gmail.com</p>
            <p><strong>Pass:</strong> 112233</p>
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
                placeholder="Password" />
            </div>
            {/* error  */}
            <p className="text-red-600"> {err} </p>

            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#_" className="social-icon">
                <FaFacebook />
              </a>
              <a onClick={handleGoogle} href="#_" className="social-icon">
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
      <ToastContainer />
    </div>
  );
}

export default Login;
