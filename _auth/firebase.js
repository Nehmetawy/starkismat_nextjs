import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0e1NnytUwfozRYc_v52kOxKNf6mYogn4",
  authDomain: "lucky-star-46876.firebaseapp.com",
  projectId: "lucky-star-46876",
  storageBucket: "lucky-star-46876.appspot.com",
  messagingSenderId: "422991921636",
  appId: "1:422991921636:web:a69849be573cd45ff4c7f1",
  measurementId: "G-F8NFBC07NN",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.useDeviceLanguage();
