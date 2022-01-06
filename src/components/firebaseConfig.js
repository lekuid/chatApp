import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNeNpeNfdP_NQqWoUOf2tpmDpQx8Wtoj4",
  authDomain: "testimageapp-28ee5.firebaseapp.com",
  databaseURL: "https://testimageapp-28ee5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testimageapp-28ee5",
  storageBucket: "testimageapp-28ee5.appspot.com",
  messagingSenderId: "936498885007",
  appId: "1:936498885007:web:9423fe586378982c8f1bfa",
  measurementId: "G-VNJ7XTG5QG"
};

const Firebase = initializeApp(firebaseConfig);

export default Firebase