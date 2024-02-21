import React, { useState, useEffect } from "react";
import dark from "../components/Home_page_main_bg_img.png";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../NewComponents/Btn";
import Outh from "../NewComponents/Outh";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  const navigate = useNavigate();
  async function handleSubmit() {
    const formData = {
      username: username,
      password: password,
      email: email,
    };
    const res = await fetch("/api/user/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((result) => {
        console.log(result);
        if (result.status != 201) {
          console.log(result);
          alert("user already exsists");
        } else {
          alert("user created successfully");

          navigate("/sign-in");
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        alert(error);
      });
  }

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
      className="flex items-center justify-center"
    >
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
      <div
        className={`w-1/3  py-10 mt-16 border-solid flex flex-col gap-5 align-middle justify-center border-white bg-black bg-opacity-50 shadow-lg rounded-lg z-10 relative px-10 transition-div ${
          loading ? "" : "show"
        }`}
      >
        <div className="hover-underline-animation">
          <input
            type="text"
            className="h-10 rounded-md px-3 focus:outline-none text-black"
            style={{ width: "100%" }}
            placeholder="Enter Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            name="username"
            id="username"
          />
        </div>
        <div className="hover-underline-animation">
          <input
            type="email"
            className="h-10 rounded-md px-3 focus:outline-none text-black"
            style={{ width: "100%" }}
            placeholder="Enter Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            name="email"
            id="email"
          />
        </div>
        <div className="hover-underline-animation">
          <input
            type="password"
            className="h-10 rounded-md px-3 focus:outline-none text-black"
            style={{ width: "100%" }}
            placeholder="Enter Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            name="password"
            id="password"
          />
        </div>
        <div
          className="flex flex-row align-middle justify-center gap-5"
          onClick={() => {
            handleSubmit();
          }}
        >
          <Btn
            title="Sign-up"
            ActiveColor="bg-slate-900"
            UpdatedColor="bg-orange-400"
            width="w-48"
          />
        </div>
        <div
          className="flex flex-row align-middle justify-center gap-5"
          onClick={() => {
            handleSubmit();
          }}
        >
          <Outh title="Continue with google" />
        </div>

        <div className="flex flex-row align-middle justify-center gap-5">
          <span className="text-orange-400">
            Already have account?{" "}
            <Link
              className="text-blue-300 hover-underline-animation"
              to="/sign-in"
            >
              Sign-in Here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
