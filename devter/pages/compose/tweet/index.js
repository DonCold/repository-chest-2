import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { getDownloadURL } from "firebase/storage";

import { addDevit, uploadImage } from "_firebase/client";

import AppLayout from "components/AppLayout";
import Button from "components/Button";
import Avatar from "components/Avatar";

import useUser from "hooks/useUser";

const COMPOSE_STATES = {
  USER_NOT_LOGGED: -1,
  LOADING: 0,
  SUCCESS: 1,
  ERROR: 2,
};

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
};

const ComposeTweet = () => {
  const [devit, setDevit] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_LOGGED);

  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (file) {
      const onProgress = () => {};
      const onError = () => {};
      const onComplete = () => {
        getDownloadURL(file.snapshot.ref).then((url) => {
          setImageUrl(url);
          setDrag(DRAG_IMAGE_STATES.COMPLETE);
        });
      };
      file.on("state_changed", onProgress, onError, onComplete);
    }
  }, [file]);

  const handleChange = (e) => {
    setDevit(e.target.value);
  };

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    if (devit.length === 0 && !imageUrl) return;
    setStatus(COMPOSE_STATES.LOADING);
    const res = await addDevit({
      avatar: user.avatar,
      message: devit,
      userId: user.id,
      username: user.username,
      img: imageUrl,
    });
    if (res) {
      setStatus(COMPOSE_STATES.SUCCESS);
      router.push("/home");
    } else {
      setStatus(COMPOSE_STATES.ERROR);
    }
  };

  const isButtonDisabled =
    (devit.length === 0 && !imageUrl) ||
    status === COMPOSE_STATES.LOADING ||
    status === COMPOSE_STATES.SUCCESS;

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
    const task = uploadImage(e.dataTransfer.files[0]);
    setFile(task);
  };

  return (
    <>
      <AppLayout>
        <section className="form-container">
          <section className="avatar-container">
            {user && <Avatar src={user.avatar} />}
          </section>
          <form onSubmit={hanldeSubmit}>
            {user && <strong className="name-text">{user.username}</strong>}
            <textarea
              onChange={handleChange}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              value={devit}
              placeholder="¿Qué esta pasando?"
            ></textarea>
            {imageUrl && (
              <section className="image-section">
                <button onClick={() => setImageUrl(null)}>❌</button>
                <Image
                  className="image"
                  src={imageUrl}
                  alt="uploaded image"
                  width={500}
                  height={300}
                />
              </section>
            )}
            <div>
              <Button disabled={isButtonDisabled} type="submit">
                Devitear
              </Button>
            </div>
          </form>
        </section>
      </AppLayout>

      <style jsx>{`
        .form-container {
          display: flex;
          align-items: flex-start;
          padding-top: 20px;
        }

        form {
          padding-top: 10px;
          width: 100%;
        }

        .avatar-container {
          padding-top: 20px;
          padding-left: 10px;
          min-width: 60px;
          min-height: 60px;
        }

        .name-text {
          font-size: 1.2rem;
          font-weight: bold;
          padding-left: 10px;
        }

        div {
          padding: 15px;
        }

        textarea {
          width: 100%;
          min-height: 200px;
          border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
            ? "2px dashed #00bcd4"
            : "2px solid transparent"};
          border-radius: 10px;
          font-size: 21px;
          padding: 10px;
          resize: none;
          outline: 0;
        }

        button {
          background: rgba(255, 255, 255, 0.1);
          top: 15px;
          right: 15px;
          border: 0;
          border-radius: 9999px;
          height: 50px;
          width: 50px;
          position: absolute;
          z-index: 1;
          cursor: pointer;
        }

        .image-section {
          position: relative;
        }

        .image-section :global(img) {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default ComposeTweet;
