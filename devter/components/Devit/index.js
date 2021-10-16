import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";

const Devit = ({ avatar, username, message, id, createdAt }) => {
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
