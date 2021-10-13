import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtAUH_XRFLvUGVwYgdoDm-jb8aXXgcXzE",
  authDomain: "devter-3026f.firebaseapp.com",
  projectId: "devter-3026f",
  storageBucket: "devter-3026f.appspot.com",
  messagingSenderId: "826572540564",
  appId: "1:826572540564:web:6ed81190c23302f16b0281",
  measurementId: "G-X4BJHGW5DV",
};

initializeApp(firebaseConfig);

const mapUserFromFirebaseAuth = (user) => {
  if (!user) return null;

  return {
    id: user.uid,
    username: user.displayName,
    email: user.email,
    photo: user.photoURL,
  };
};

export const onAuthStateChanged = (onChange) =>
  getAuth().onAuthStateChanged((user) => {
    const normalizeUser = mapUserFromFirebaseAuth(user);
    onChange(normalizeUser);
  });

export const loginWithGithub = async () => {
  const auth = getAuth();
  const githubProvider = new GithubAuthProvider();
  await signInWithPopup(auth, githubProvider);
};
