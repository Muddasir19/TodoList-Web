import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQMrRQ2Wbuc7R1jMnIsqnEpjMd5SQ_tFA",
  authDomain: "todolist-web-121c1.firebaseapp.com",
  projectId: "todolist-web-121c1",
  storageBucket: "todolist-web-121c1.appspot.com",
  messagingSenderId: "679894827822",
  appId: "1:679894827822:web:441f0b7deff59a7303f0bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();