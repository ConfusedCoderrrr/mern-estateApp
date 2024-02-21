import React, { useState, useEffect } from "react";
import background from "../components/Home_page_main_bg_img.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    color: "#ffffff",
  };

  return (
    <div>
      <div
        style={backgroundStyle}
        className=" text-black flex flex-col relative bg-black"
      >
        <div
          className="absolute left-3 my3"
          style={{
            left: "18.75rem",
            top: "200px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Home;
