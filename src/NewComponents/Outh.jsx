import Btn from "./Btn";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3530b.firebaseapp.com",
  projectId: "mern-estate-3530b",
  storageBucket: "mern-estate-3530b.appspot.com",
  messagingSenderId: "358056585074",
  appId: "1:358056585074:web:ce73a9217fe77898a61feb",
  measurementId: "G-6P7DQCJ302",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Outh = ({ title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/user/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      console.log(result);
      dispatch(saveUser(data));
      if (res.ok) {
        navigate("/");
      }

      // ... and so on for other fields
    } catch (err) {
      console.log("Google error", err);
    }
  };

  return (
    <div className="w-full" onClick={handleGoogleClick}>
      <Btn title={title} ActiveColor="bg-red-900" />
    </div>
  );
};

export default Outh;
