import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

import {
  getFirestore,
  Timestamp,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

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
const db = getFirestore();

const mapUserFromFirebaseAuth = (user) => {
  if (!user) return null;

  return {
    id: user.uid,
    username: user.displayName,
    email: user.email,
    avatar: user.photoURL,
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

export const addDevit = async ({ avatar, message, userId, username, img }) => {
  return await addDoc(collection(db, "devits"), {
    avatar,
    message,
    img,
    userId,
    username,
    createdAt: Timestamp.fromDate(new Date()),
    likeCount: 0,
    sharedCount: 0,
  });
};

export const getDevits = async () => {
  let snapshots;
  try {
    snapshots = await getDocs(
      query(collection(db, "devits"), orderBy("createdAt", "desc"))
    );
  } catch (error) {
    console.log(error);
  }

  if (!snapshots) return [];
  const data = snapshots.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;
    const { createdAt } = data;

    return {
      ...data,
      createdAt: +createdAt.toDate(),
    };
  });

  return data;
};

export const uploadImage = (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `images/${file.name}`);
  return uploadBytesResumable(storageRef, file);
};
