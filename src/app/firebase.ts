import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABozvXAmAyIC2UEDdBxOsYdLjsrmxAbZw",
  authDomain: "gb-react-chat-41de1.firebaseapp.com",
  projectId: "gb-react-chat-41de1",
  storageBucket: "gb-react-chat-41de1.appspot.com",
  messagingSenderId: "975457017384",
  appId: "1:975457017384:web:60a5b391b6ae95ca32df1d",
  measurementId: "G-CSDZRJCRCH",
};
export const fb = initializeApp(firebaseConfig);
export const auth = getAuth(fb);
const analytics = getAnalytics(fb);
