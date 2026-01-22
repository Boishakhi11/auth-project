// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqQTBDRWGIhB5-_sNSmIOkrjDlNE9bOAY",
  authDomain: "auth-project-e4c86.firebaseapp.com",
  projectId: "auth-project-e4c86",
  storageBucket: "auth-project-e4c86.firebasestorage.app",
  messagingSenderId: "719006711843",
  appId: "1:719006711843:web:eabaab5f9073a1ee537196",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
