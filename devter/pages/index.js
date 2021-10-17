import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { loginWithGithub } from "_firebase/client";

import Button from "components/Button";
import GitHub from "components/Icons/GitHub";

import useUser, { USER_STATES } from "hooks/useUser";

import { colors } from "styles/theme";

export default function Home() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/home");
  }, [user]);

  const handleClick = async () => {
    try {
      await loginWithGithub();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <h1>Devter</h1>
        <div>
          {user === USER_STATES.NOT_LOGGED && (
            <Button onClick={handleClick}>
              <GitHub width={24} height={24} fill="#fff" />
              Login with Github
            </Button>
          )}
          {user === USER_STATES.NOT_KNOWN && (
            <Image src="/loading.svg" width="200" height="200" />
          )}
        </div>
      </section>

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
