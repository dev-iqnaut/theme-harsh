import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyClJPfO-g28fOVD8rix-kJmX3VcLYEshxo",
  // authDomain: "educator-bfa7e.firebaseapp.com",
  // projectId: "educator-bfa7e",
  // storageBucket: "educator-bfa7e.appspot.com",
  // messagingSenderId: "439365184426",
  // appId: "1:439365184426:web:28713b60700b83a94559d3"

  apiKey: "AIzaSyBzH0v6igVadt8Fy9KXGpmZ5TxN7kMZn04",
  authDomain: "testing-king-f4bc5.firebaseapp.com",
  projectId: "testing-king-f4bc5",
  storageBucket: "testing-king-f4bc5.appspot.com",
  messagingSenderId: "401822606909",
  appId: "1:401822606909:web:9ce11aae80adffea95ec54",
  measurementId: "G-8RPW8JHC9Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const db = getDatabase(app);

export {db,app};
