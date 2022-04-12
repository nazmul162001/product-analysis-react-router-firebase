import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const SignUp = ({ setclicked }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const [err, serErr] = useState('');

  // handle email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // handle password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // handle confirm password
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  // confirm user
  if (user) {
    setclicked('');
    return;
  }

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password);
    if (password !== confirmPassword) {
      serErr('password do not matched');
      toast.error('Password do not matched');
      return;
    }
    createUserWithEmailAndPassword(email, password);
    toast.success('successfully signUp, Please! login now');
    serErr('');
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <h2 className="title">Sign up</h2>
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
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          onChange={handleConfirmPassword}
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <p className="text-red-600"> {err} </p>
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <FaFacebook />
        </a>
        <a href="#" className="social-icon">
          <FcGoogle />
        </a>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  );
};

export default SignUp;
