import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClJPfO-g28fOVD8rix-kJmX3VcLYEshxo",
  authDomain: "educator-bfa7e.firebaseapp.com",
  projectId: "educator-bfa7e",
  storageBucket: "educator-bfa7e.appspot.com",
  messagingSenderId: "439365184426",
  appId: "1:439365184426:web:28713b60700b83a94559d3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const db = getDatabase(app);

export {db,app};
