import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDWIJ_mmNjueWL4b-yTZOudLPhIvYKAn9k",
    authDomain: "leetcode-clone-47c5a.firebaseapp.com",
    projectId: "leetcode-clone-47c5a",
    storageBucket: "leetcode-clone-47c5a.appspot.com",
    messagingSenderId: "1019562131950",
    appId: "1:1019562131950:web:80469df9d29c5f62ac4eff",
    measurementId: "G-R46GC8SEBH",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
