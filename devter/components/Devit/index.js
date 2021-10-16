import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";

const Devit = ({ avatar, username, message, id, createdAt, img }) => {
  const timeago = useTimeAgo(createdAt);

  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <header>
            <strong>{username}</strong>
            <span>{timeago}</span>
          </header>
          {message && <p>{message}</p>}
          {img && <img src={img} alt={username} />}
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

        img {
          margin-top: 10px;
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        span {
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
