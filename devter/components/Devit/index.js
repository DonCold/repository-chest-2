import Avatar from "components/Avatar";

const Devit = ({ avatar, username, message, id, createdAt }) => {
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <header>
            <strong>{username}</strong>
            <date>{createdAt}</date>
          </header>
          <p>{message}</p>
        </section>
      </article>

      <style jsx>{`
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 2px solid #eee;
        }

        div {
          min-width: 60px;
          padding-right: 10px;
        }

        date {
          padding-left: 5px;
        }

        p {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Devit;
