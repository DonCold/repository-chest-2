import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

import {
  getFirestore,
  Timestamp,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_APIKEY);

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

const msgDevitFirebase = (doc) => {
  const data = doc.data();
  data.id = doc.id;
  const { createdAt } = data;

  return {
    ...data,
    createdAt: +createdAt.toDate(),
  };
};

export const listenLatestDevits = (onChange) => {
  const q = query(
    collection(db, "devits"),
    orderBy("createdAt", "desc"),
    limit(20)
  );

  return onSnapshot(q, ({ docs }) => {
    const data = docs.map(msgDevitFirebase);
    onChange(data);
  });
};

export const getDevits = async () => {
  let snapshots;
  try {
    snapshots = await getDocs(
      query(collection(db, "devits"), orderBy("createdAt", "desc"), limit(20))
    );
  } catch (error) {
    console.log(error);
  }

  if (!snapshots) return [];
  return snapshots.docs.map(msgDevitFirebase);
};

export const uploadImage = (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `images/${file.name}`);
  return uploadBytesResumable(storageRef, file);
};
