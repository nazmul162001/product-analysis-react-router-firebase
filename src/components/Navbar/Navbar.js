import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div onClick={() => setOpen(!open)} className="humberger-menu w-8 h-8 absolute top-0 left-0 md:hidden">
        {open ? <XIcon /> : <MenuAlt1Icon />}
      </div>
      <nav className="nav-container flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-indigo-400 to-blue-800 md:h-16">
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
    </>
  );
};

export default Navbar;
