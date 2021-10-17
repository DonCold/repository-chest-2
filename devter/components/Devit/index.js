import { useRouter } from "next/router";
import Link from "next/link";

import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";

const Devit = ({ avatar, username, message, id, createdAt, img }) => {
  const timeago = useTimeAgo(createdAt);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/status/${id}`);
  };

  return (
    <>
      <article onClick={handleClick}>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <header>
            <strong>{username}</strong>
            <Link href={`/status/${id}`}>
              <a>
                <time>{timeago}</time>
              </a>
            </Link>
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

        article:hover {
          background: #f5f5f5;
          cursor: pointer;
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

        time {
          padding-left: 5px;
        }

        p {
          margin: 0;
        }

        a {
          color: #333;
          font-size: 14px;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Devit;
