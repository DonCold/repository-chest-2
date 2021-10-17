import { useState, useEffect } from "react";
import Link from "next/link";

import Devit from "components/Devit/index";

import Create from "components/Icons/Create";
import Home from "components/Icons/Home";
import Search from "components/Icons/Search";

import useUser from "hooks/useUser";
import { listenLatestDevits } from "_firebase/client";
import { colors } from "styles/theme";

const HomePage = () => {
  const [timelime, setTimelime] = useState([]);
  const user = useUser();

  useEffect(() => {
    let unsuscribe;
    if (user) {
      unsuscribe = listenLatestDevits(setTimelime);
    }

    return () => unsuscribe && unsuscribe();
  }, [user]);

  return (
    <>
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
              img={devit.img}
              createdAt={devit.createdAt}
            />
          );
        })}
        {timelime.length === 0 && (
          <div className="no-devits">
            <p>No hay devits, ¿Porque no publicamos el primero?</p>
            <Link href="/compose/tweet">
              <a>
                <Create width={32} height={32} stroke="#09f" />
              </a>
            </Link>
          </div>
        )}
      </section>
      <nav>
        <Link href="/home">
          <a>
            <Home width={32} height={32} stroke="#09f" />
          </a>
        </Link>
        <Link href="/search">
          <a>
            <Search width={32} height={32} stroke="#09f" />
          </a>
        </Link>
        <Link href="/compose/tweet">
          <a>
            <Create width={32} height={32} stroke="#09f" />
          </a>
        </Link>
      </nav>

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
          padding-top: 8px;
          flex: 1;
        }

        nav {
          bottom: 0;
          background-color: #ffffffee;
          position: sticky;
          border-top: 1px solid #eee;
          border-radius: 0 0 10px 10px;
          height: 49px;
          width: 100%;
          display: flex;
          z-index: 2;
        }

        nav a {
          display: flex;
          align-items: center;
          flex: 1 1 auto;
          height: 100%;
          justify-content: center;
        }

        a:hover {
          background: radial-gradient(#0099ff30 15%, transparent 16%);
          background-size: 100px 100px;
          background-position: center;
        }

        a:hover > :global(svg) {
          stroke: ${colors.secondary};
        }

        .no-devits {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text: center;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default HomePage;
