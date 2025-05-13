import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6cFM1Bo_ygJwRH5eEDjRH74RU5p3leAc",
  authDomain: "my-handyman-6f029.firebaseapp.com",
  projectId: "my-handyman-6f029",
  storageBucket: "my-handyman-6f029.firebasestorage.app",
  messagingSenderId: "171844452142",
  appId: "1:171844452142:web:a57be2dc2630ffab8704bf",
  measurementId: "G-0YHHNQBHGS",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const configureAuthPersistence = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    console.log("Auth persistence set to local");
  } catch (error) {
    console.error("Local persistence failed, falling back to memory:", error);
    await setPersistence(auth, inMemoryPersistence);
  }
};

const configureFirestorePersistence = async () => {
  try {
    await enableIndexedDbPersistence(db);
    console.log("Firestore offline persistence enabled");
  } catch (error) {
    console.warn("Firestore offline persistence failed:", error);
  }
};

configureAuthPersistence();
configureFirestorePersistence();

export { auth, db, storage };
