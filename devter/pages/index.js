import { useState, useEffect } from "react";

import { loginWithGithub, onAuthStateChanged } from "_firebase/client";

import AppLayout from "components/AppLayout";
import Button from "components/Button";
import GitHub from "components/Icons/GitHub";

import { colors } from "styles/theme";
import Avatar from "components/Avatar";

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = async () => {
    try {
      await loginWithGithub();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <>
      <AppLayout>
        <section>
          <h1>Devter</h1>
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <GitHub width={24} height={24} fill="#fff" />
                Login with Github
              </Button>
            )}
            {user && user.photo && (
              <div>
                <Avatar alt={user.username} src={user.photo} withText />
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>
        {`
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
            color: ${colors.secondary};
            font-size: 2.5rem;
            font-weight: 800;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
