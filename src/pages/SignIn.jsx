import React, { useState, useEffect } from "react";
import dark from "../components/Home_page_main_bg_img.png";
import { Link } from "react-router-dom";
import Btn from "../NewComponents/Btn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../redux/user/userSlice";
import { nanoid } from "@reduxjs/toolkit";

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  async function handleSignIn() {
    const userData = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch("http://localhost:3300/api/user/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }).then(response => response.json())
      .then(data => {
        if (data.success) {
          const { filteredUserInfo } = data;
          console.log(filteredUserInfo);
          dispatch(saveUser(filteredUserInfo));
        console.log("Signed in successfully");
        alert("signed in successfully !");
        navigate("/");
        } else {
          console.error(data.message);
        }
      })
      .catch(error => console.error(error));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
      className="flex items-center justify-center transitionPage"
    >
      {/* Blurred background */}
      <div
        style={{
          backgroundImage: `url(${dark})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          filter: "blur(2px)",
          zIndex: 1,
          position: "absolute",
          width: "100%",
        }}
      />
      <div className={`w-1/3 h-1/2 py-10  border-solid flex flex-col gap-8 align-middle justify-center border-white bg-black bg-opacity-50 shadow-lg rounded-lg z-10 relative px-10 transition-div ${loading ? '' : 'show'}`}>
        <div className="hover-underline-animation">
          <input
            type="email"
            className="h-10 rounded-md px-3 focus:outline-none text-black"
            style={{ width: "100%" }}
            placeholder="Enter Username"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
          />
        </div>
        <div className="hover-underline-animation">
          <input
            type="password"
            className="h-10 rounded-md px-3 focus:outline-none text-black"
            style={{ width: "100%" }}
            placeholder="Enter Password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
        </div>
        <div
          className="flex flex-row align-middle justify-center gap-5"
          onClick={handleSignIn}
        >
          <Btn title="Sign-in" />
        </div>
        <div className="flex flex-row align-middle justify-center gap-5">
          <span className="text-orange-400">
            Don't have account?{" "}
            <Link
              className="text-blue-300 hover-underline-animation"
              to="/sign-up"
            >
              Register Here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
