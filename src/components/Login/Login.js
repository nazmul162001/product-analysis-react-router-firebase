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

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const [clicked, setclicked] = useState('');
  const [err, setErr] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

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

  // handle signIn
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    // // confirm user
    if (user) {
      navigate(from, { replace: true });
      toast.success('successfully login')
      setErr('');
    }
    if (!user) {
      setErr('user not found!!! please signUp or input valid info');
      toast.error('user not found')
      return;
    }
    return;
  };

  // handle google signIN
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        toast.success('successfully login')
        console.log(user);
      })
      .catch((error) => {
        toast.error('login faild, try again')
        return;
      });
  };

  return (
    <div className={`container ${clicked}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSignIn} className="sign-in-form">
            <h3 className="text-xl text-red-700 font-mono font-bold">
              Please Login first to explore this site !!!
            </h3>
            <p>* you can sign up with any random email, no need to verify *</p>
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
            {/* error  */}
            <p className="text-red-600"> {err} </p>

            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebook />
              </a>
              <a onClick={handleGoogle} href="#" className="social-icon">
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;
