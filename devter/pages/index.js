import { useState, useEffect } from 'react';

import { loginWithGithub, onAuthStateChanged } from '../firebase/client';

import AppLayout from './../components/AppLayout';
import Button from './../components/Button/index';
import GitHub from './../components/Icons/GitHub';

import { colors } from '../styles/theme';

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = async () => {
    try {
      await loginWithGithub();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <AppLayout>
        <section>
         <h1>Devter</h1>
         <div>
          {
            user === null && (
              <Button onClick={handleClick}>
                <GitHub width={24} height={24} fill="#fff" />
                Login with Github
              </Button>
            )
          }
          {
            user && user.photo && (
              <div>
                <img src={user.photo} alt={user.username} />
                <strong>{user.username}</strong>
              </div>
            )
          }
         </div>
        </section>
      </AppLayout>

      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-items: center;
          place-content: center;
        }

        div {
          margin-top: 20px;
        }

        h1 {
          color: ${ colors.secondary };
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
        }
      `}</style>
    </>
  )
}
