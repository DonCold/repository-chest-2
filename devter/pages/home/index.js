import { useState, useEffect } from "react";

import AppLayout from "components/AppLayout";
import Devit from "components/Devit/index";
import useUser from "hooks/useUser";
import { getDevits } from "_firebase/client";

const HomePage = () => {
  const [timelime, setTimelime] = useState([]);
  const user = useUser();

  useEffect(() => {
    user && getDevits().then(setTimelime);
  }, [user]);

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timelime?.map((devit) => {
            return (
              <Devit
                key={devit.id}
                username={devit.username}
                avatar={devit.avatar}
                id={devit.id}
                message={devit.message}
              />
            );
          })}
        </section>
        <nav></nav>
      </AppLayout>

      <style jsx>{`
        header {
          align-items: center;
          height: 49px;
          position: sticky;
          border-bottom: 1px solid #e6e6e6;
          border-radius: 10px 10px 0 0;
          background-color: #ffffffee;
          backdrop-filter: blur(5px);
          display: flex;
          top: 0;
          width: 100%;
          z-index: 1;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 48px;
        }

        section {
          padding-top: 16px;
        }

        nav {
          bottom: 0;
          background-color: #ffffffee;
          backdrop-filter: blur(5px);
          position: sticky;
          border-top: 1px solid #e6e6e6;
          height: 49px;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default HomePage;
