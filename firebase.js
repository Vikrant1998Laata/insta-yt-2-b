// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnMDNjzA4jl_pbNMMDFb0wU_vrvMJs1nE",
  authDomain: "insta-2-yt-1af31.firebaseapp.com",
  projectId: "insta-2-yt-1af31",
  storageBucket: "insta-2-yt-1af31.appspot.com",
  messagingSenderId: "734149068610",
  appId: "1:734149068610:web:2580a11691d0d1ae976adb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };