import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  // handle signOut
  const handleSignOut = e => {
    signOut(auth)
  }

  return (
    <div className="sticky top-0 z-50">
      <div
        onClick={() => setOpen(!open)}
        className="humberger-menu w-10 h-10 absolute top-3 left-3 md:hidden z-50"
      >
        {open ? <XIcon /> : <MenuAlt1Icon />}
      </div>
      <nav
        className={`nav-container flex flex-col md:flex-row justify-evenly text-center md:justify-center md:items-center pt-16 md:pt-0 bg-gradient-to-r from-indigo-400 to-blue-800 w-9/12 md:w-full h-screen md:h-16 absolute top-0 md:static duration-300 ease-in-out ${
          open ? 'left-0' : 'left-[-5000px]'
        }`}
      >
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/about"
        >
          About
        </NavLink>
        <div className='flex items-center absolute top-2 right-1/2 md:right-[200px]'>
        <span className='text-slate-50 font-mono font-bold text-xl pr-3 hidden md:block'> {user?.displayName || user?.displayName} </span>
        <div className="img w-12 h-12 rounded-full">
        <img className='rounded-full' src= {user?.photoURL || user?.photoURL} alt="" />
        </div>
        </div>
        {user ? (
          <button
            onClick={handleSignOut}
            type="button"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-8 py-2 rounded-md absolute top-4 right-6"
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => navigate('/login')}
            type="button"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-8 py-2 rounded-md absolute top-4 right-6"
          >
            Login
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
