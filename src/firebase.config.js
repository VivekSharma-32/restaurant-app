import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvh2tOwwd2fAkX24To1PLgQhM2BWpw1zI",
  authDomain: "restaurantapp-ba52e.firebaseapp.com",
  databaseURL: "https://restaurantapp-ba52e-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-ba52e",
  storageBucket: "restaurantapp-ba52e.appspot.com",
  messagingSenderId: "532834296634",
  appId: "1:532834296634:web:e65648c523ce2baa3be603",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
