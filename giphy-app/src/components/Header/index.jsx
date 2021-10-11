import React, { useState } from 'react';

import { useRoute } from 'wouter';

import useUser from '@/hooks/useUser';

import Login from '@/components/Login';
import { ModalPortal } from '../Modal';

import './Header.css';
import Button from '../Button';

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
            <Button to='/login'>
              Login
            </Button>
            {
              !showModal && <Button onClick={() => { setShowModal(true) }}>Login - Modal</Button>
            }
            { showModal && <ModalPortal onClose={handleClose}><Login onLogin={handleLogin} /></ModalPortal> }
          </div>
        ) : (
          <Button onClick={logout}>Logout</Button>
        )
      }
    </div>
  )

}

export default Header;
