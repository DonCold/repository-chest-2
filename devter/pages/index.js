import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { loginWithGithub, onAuthStateChanged } from "_firebase/client";

import AppLayout from "components/AppLayout";
import Button from "components/Button";
import GitHub from "components/Icons/GitHub";

import { colors } from "styles/theme";

export default function Home() {
  const [user, setUser] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    user && router.replace("/home");
  }, [user]);

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
            {user === undefined && <Image src="/loading.svg" width="200" height="200" />}
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
