import { useState, useEffect } from "react";
import AppLayout from "components/AppLayout";
import Devit from "components/Devit/index";

const HomePage = () => {
  const [timelime, setTimelime] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then((data) => {
        setTimelime(data);
      });
  }, []);

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
          display: flex;
          top: 0;
          width: 100%;
          padding-left: 20px;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
        }

        section {
          padding-top: 16px;
        }

        nav {
          bottom: 0;
          position: fixed;
          border-bottom: 1px solid #e6e6e6;
          height: 49px;
        }
      `}</style>
    </>
  );
};

export default HomePage;
