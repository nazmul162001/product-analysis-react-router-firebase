import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='sticky top-0 z-50'>
      <div onClick={() => setOpen(!open)} className="humberger-menu w-10 h-10 absolute top-3 left-3 md:hidden z-50">
        {open ? <XIcon /> : <MenuAlt1Icon />}
      </div>
      <nav className={`nav-container flex flex-col md:flex-row justify-evenly text-center md:justify-center md:items-center pt-16 md:pt-0 bg-gradient-to-r from-indigo-400 to-blue-800 w-9/12 md:w-full h-screen md:h-16 absolute top-0 md:static duration-300 ease-in-out ${open ? 'left-0' : 'left-[-5000px]'}`}>
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
      </nav>
    </div>
  );
};

export default Navbar;
