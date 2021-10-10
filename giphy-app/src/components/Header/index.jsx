import React, { useState } from 'react';

import { Link, useRoute } from 'wouter';

import useUser from '@/hooks/useUser';

import Login from '@/components/Login';
import { ModalPortal } from './../Modal';

import './Header.css';

const Header = () => {
  const { isLogged, logout } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [match] = useRoute('/login');

  const handleClose = () => {
    setShowModal(false);
  }

  const handleLogin = () => {
    console.log('handleLogin');
    setShowModal(false);
  }

  if (match) return null;
  return (
    <div className="header-style">
      {
        !isLogged ? (
          <div>
            <Link to='/login' className="link-theme">
              Login
            </Link>
            {
              !showModal && <button className="button-theme" onClick={() => { setShowModal(true) }}>Login - Modal</button>
            }
            { showModal && <ModalPortal onClose={handleClose}><Login onLogin={handleLogin} /></ModalPortal> }
          </div>
        ) : (
          <button className="button-theme" onClick={logout}>Logout</button>
        )
      }
    </div>
  )

}

export default Header;
