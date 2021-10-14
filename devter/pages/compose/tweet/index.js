import { useState } from "react";

import { addDevit } from "_firebase/client";

import AppLayout from "components/AppLayout";
import Button from "components/Button";

import useUser from "hooks/useUser";
import { useRouter } from "next/router";

const COMPOSE_STATES = {
  USER_NOT_LOGGED: -1,
  LOADING: 0,
  SUCCESS: 1,
  ERROR: 2,
};

const ComposeTweet = () => {
  const [devit, setDevit] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_LOGGED);
  const user = useUser();

  const router = useRouter();

  const handleChange = (e) => {
    setDevit(e.target.value);
  };

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    if (devit.length === 0) return;
    setStatus(COMPOSE_STATES.LOADING);
    const res = await addDevit({
      avatar: user.avatar,
      message: devit,
      userId: user.id,
      username: user.username,
    });
    if (res) {
      setStatus(COMPOSE_STATES.SUCCESS);
      router.push("/home");
    } else {
      setStatus(COMPOSE_STATES.ERROR);
    }
  };

  const isButtonDisabled =
    devit.length === 0 ||
    status === COMPOSE_STATES.LOADING ||
    status === COMPOSE_STATES.SUCCESS;

  return (
    <>
      <AppLayout>
        <form onSubmit={hanldeSubmit}>
          <textarea
            onChange={handleChange}
            value={devit}
            placeholder="¿Qué esta pasando?"
          ></textarea>
          <div>
            <Button disabled={isButtonDisabled} type="submit">
              Devitear
            </Button>
          </div>
        </form>
      </AppLayout>

      <style jsx>{`
        div {
          padding: 15px;
        }

        textarea {
          width: 100%;
          min-height: 200px;
          border: 0;
          border-radius: 10px;
          font-size: 21px;
          padding: 10px;
          resize: none;
          outline: 0;
        }
      `}</style>
    </>
  );
};

export default ComposeTweet;
