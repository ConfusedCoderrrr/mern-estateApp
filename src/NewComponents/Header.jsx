import React, { useState } from "react";
import "./header.css";
import Homevista from "../components/home.png";
import { Link } from "react-router-dom";
import Burger from "../components/burger-bar.png";
import Btn from "./Btn";
import { useSelector } from "react-redux";

function header() {
  const handleSearchClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      console.log(text);
    } catch (error) {
      console.error("Error reading from clipboard:", error);
    }
  };
  const [searchValue, setSearchValue] = useState();
  const userData = useSelector((state) => state.user.userData);
  console.log(userData);
  return (
    <div className=" grid grid-cols-7 items-center fixed top-0 w-full p-4 text-white lg:px-10 md:px-6 px-4 py-4 rounded-b-lg z-50 bg-gradient-to-b from-black via-transparent to-transparent">
      <Link
        className="focus:outline-none hover:scale-105 origin-center transition-transform md:col-span-2 col-span-4"
        to="/"
      >
        <img
          src={Homevista}
          className="focus:outline-none w-52 h-20"
          alt="HomeVista Logo"
        />
      </Link>
      <div className="flex md:col-span-3 col-span-1">
        <div className="relative hidden xl:block">
          <input
            onClick={handleSearchClick}
            type="text"
            value={searchValue}
            style={{ width: "180%", border: "2px solid orange" }}
            placeholder="Search...."
            className="text-slate-600 hover:scale-105 origin-center transition-transform font-medium text-xl px-0 py-2 bg-slate-100 rounded-md relative pl-6 border-none focus:outline-none shadow-lg"
          />
          <div
            style={{ right: "-70%" }}
            className=" absolute top-1/2 transform -translate-y-1/2"
          >
            <button className="hover:scale-125 origin-center transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.9999 14L11.0093 11.004L13.9999 14ZM12.6666 6.99998C12.6666 8.50287 12.0696 9.94421 11.0069 11.0069C9.94415 12.0696 8.50281 12.6666 6.99992 12.6666C5.49703 12.6666 4.05569 12.0696 2.99298 11.0069C1.93027 9.94421 1.33325 8.50287 1.33325 6.99998C1.33325 5.49709 1.93027 4.05575 2.99298 2.99304C4.05569 1.93034 5.49703 1.33331 6.99992 1.33331C8.50281 1.33331 9.94415 1.93034 11.0069 2.99304C12.0696 4.05575 12.6666 5.49709 12.6666 6.99998V6.99998Z"
                  stroke="#9E9E9E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="md:col-span-2 col-span-2 text-xl flex items-center justify-end gap-2 px-3 lg:gap-5 "
        style={{ width: "100%" }}
      >
        <Link
          to="/"
          className="hover:font-medium text-base hidden md:block hover:text-orange-400 hover:text-md hover-underline-animation"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:font-medium text-base hidden md:block hover:text-orange-400 hover:text-md hover-underline-animation"
        >
          About
        </Link>
        {/* <Link
          to="/profile"
          className="hover:font-medium text-base hidden md:block hover:text-orange-400 hover:text-md transition-opacity hover-underline-animation"
        >
          Profile
        </Link> */}
        <div>
          {userData && (
            <Link to="/profile">
              {" "}
              <img
                className="rounded-full h-14 w-14 object-cover hover:scale-105"
                style={{
                  border: "solid orange 2px",
                }}
                src={userData.photo}
              />{" "}
            </Link>
          )}
          {!userData && (
            <Link to="/sign-in">
              <Btn
                title="Sign-in"
                ActiveColor="bg-slate-900"
                UpdatedColor="bg-orange-400"
              />
            </Link>
          )}
        </div>

        <div className="text-end align-middle md:hidden flex col-span-1">
          <button className="sm:w-20 w-16 text-slate-200 px-3 py-2 rounded-lg hover:bg-orange-400 hover:text-slate-100 shadow-xl transition-transform transform hover:scale-105 focus:shadow-outline-blue active:scale-110 focus:outline-none focus:shadow-outline-blue active:shadow-none">
            <img src={Burger} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default header;
