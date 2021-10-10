import React from 'react';

import { Link } from 'wouter'

import './Header.css';

const Header = () => {
  const isLogged = false;

  return (
    <div className="header-style">
      {
        !isLogged ? (
          <Link to='/login' className="link-theme">
            Login
          </Link>
        ) : (
          <Link to='/logout' className="link-theme">
            Logout
          </Link>
        )
      }
    </div>
  )
}

export default Header;
