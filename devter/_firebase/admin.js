import admin from "firebase-admin";

import serviceAccount from "./devter.json";

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (e) {}

export const firestore = admin.firestore();
