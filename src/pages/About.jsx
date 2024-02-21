import React, { useState, useEffect } from "react";
import background from "../components/Home_page_main_bg_img.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import img from "../components/buildingImage.jpg";
import "../styles/about.scss";
import img1 from "../components/Interior/imgOne.jpg";
import img2 from "../components/Interior/img2.jpg";
import img3 from "../components/Interior/img3.jpg";
import LoginIcon from "@mui/icons-material/Login";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import CallIcon from "@mui/icons-material/Call";
import SellIcon from "@mui/icons-material/Sell";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
function About() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [height, setHeight] = useState("0");
  const [showContent, setShowContent] = useState(false);

  const [typeEffect] = useTypewriter({
    words: [
      "SELL PROPERTIES...!",
      "SELL PLOTS...!",
      "BUY PROPERTIES...!",
      "BUY PLOTS...!",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoLoad = () => {
    setLogoLoaded(true);
  };

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    color: "#ffffff",
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      {
        scrollPosition > 300 && setIsScrolled(true);
      }
      {
        scrollPosition < 80 && setIsScrolled(false);
      }
      {
        scrollPosition > 900 && setShowContent(true);
      }
      {
        scrollPosition < 400 && setShowContent(false);
      }
      console.log(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      const timeoutId = setTimeout(() => {
        setHeight("150px");
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else {
      setHeight("0");
    }
  }, [isScrolled]);
  const componentStyle = {
    transform: isScrolled ? "translate(0%)" : "translate(200%)",
  };

  const componentStyle1 = {
    transform: isScrolled ? "translate(0%)" : "translate(-200%)",
  };

  const heightStyle = {
    height: height,
    width: isScrolled ? "7px" : "0",
    backgroundColor: "orange",
    borderRadius: "5px",
  };

  const img2Style = {
    transform: showContent ? "translateX(50%)" : "translateX(400%)",
    zIndex: "5",
    transition: "1s ease",
    transitionDelay: "1s",
  };
  const img3Style = {
    transform: showContent ? "translateX(30%)" : "translateX(400%)",
    zIndex: "3",
    transition: "1s ease",
    transitionDelay: "0.5s",
  };
  const img4Style = {
    transform: showContent ? "translateX(10%)" : "translateX(400%)",
    zIndex: "2",
    transition: "1s ease",
  };

  const img2StyleHeight = {
    transitionDelay: "1s",
    transition: "1s ease",
  };
  const img3StyleHeight = {
    height: showContent ? "60%" : "100%",
    transitionDelay: "0.5s",
    transition: "1s ease",
  };
  const img4StyleHeight = {
    height: showContent ? "50%" : "100%",
    transition: "1s ease",
  };

  const AbooutContentStyle = {
    border: showContent ? "2px solid orange" : "2px solid transparent",
    width: "50%",
    height: showContent ? "60%" : "0%",
    transition: "all 1s ease",
    transitionDelay: "2s",
  };

  const InnterContent = {
    opacity: showContent ? "100%" : "0%",
    transition: "all 0.5s ease",
    transitionDelay: "2s",
  };
  return (
    <div className="bg-black">
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
        >
          <span
            style={{ color: "#240404" }}
            className="text-3xl flex-row flex capitalize text-black"
          >
            we can help you to &nbsp;
          </span>
          <h1 className="flex-row flex text-3xl capitalize my-3 font-bold text-orange-400">
            {typeEffect}
          </h1>
        </div>
      </div>
      {/* <div className="text-white bg-black py-40 flex items-center flex-row">
        <span
          style={{
            width: "100%",
            backgroundImage:
              "linear-gradient(to right, transparent, white, transparent)",
            height: "1px",
          }}
        ></span>
      </div> */}

      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          color: "#ffffff",
          backgroundColor: "black",
          overflow: "hidden",
        }}
        className="mainDivOverflow text-black my-10 flex flex-row gap-10 justify-around relative pl-24 pr-24 pb-0"
      >
        <div
          style={{
            ...componentStyle1,
            transition: "transform 1s ease",
          }}
          className="flex flex-col gap-2 self-center items-center text-start w-1/2 h-3/4 bg-black text-white"
        >
          <div className=" flex flex-row items-center">
            <div
              style={{
                ...heightStyle,
                transition: "1s ease",
              }}
            ></div>
            <div>
              <h1 className="felx slidingRight flex-row text-4xl self-start ml-5">
                About Us:
              </h1>
              <h1 className="flex slidingRight flex-row ml-5 text-1xl text-white">
                Welcome to Home Vista – your one-stop destination for buying and
                selling plots and properties. Our streamlined platform connects
                buyers with sellers seamlessly. Find your dream plot or sell
                with ease at Home Vista. Your property journey simplified.
              </h1>
            </div>
          </div>
        </div>
        <div
          style={{
            ...componentStyle,
            transition: "transform 1s ease",
          }}
          className="slidingLeft py-20 w-1/2 h-3/4 flex align-middle justify-center bg-black"
        >
          <img className="rounded-xl img1" src={img} alt="" />
        </div>
      </div>

      <div className="items-center overflow-hidden p-10 relative flex flex-row h-screen bg-black text-white">
        <div className="flex flex-row w-1/2 h-full items-center">
          <img
            style={{
              ...img2Style,
              ...img2StyleHeight,
            }}
            className="absolute rounded-xl my-10 object-cover w-1/4 h-2/3 glow img2"
            src={img1}
            alt=""
          />
          <img
            style={{
              ...img3Style,
              ...img3StyleHeight,
            }}
            className="absolute rounded-xl my-10 object-cover w-1/4 h-2/3 glow img3"
            src={img2}
            alt=""
          />
          <img
            style={{
              ...img4Style,
              ...img4StyleHeight,
            }}
            className="absolute rounded-xl my-10 object-cover w-1/4 h-2/3 glow img4"
            src={img3}
            alt=""
          />
        </div>
        <div
          style={{
            ...AbooutContentStyle,
            boxSizing: "border-box",
          }}
          className="rounded-xl p-10 ListedInfo flex items-center"
        >
          <div
            style={{
              ...InnterContent,
            }}
            className="text-white justify-start"
          >
            <ul className="flex flex-col gap-4">
              <h1 className="text-2xl">Some of our fetures:</h1>
              <li>
                <strong>Extensive Property Listings:</strong>
                Explore a diverse range of plots and properties across various
                locations, types, and price ranges.
              </li>
              <li>
                <strong>Streamlined Transactions:</strong>
                Experience a hassle-free process for buying or selling
                properties with our user-friendly and efficient platform.
              </li>
              <li>
                <strong>Trusted Real Estate Advisors:</strong>
                Benefit from the expertise and guidance of our team of
                experienced real estate advisors committed to assisting you at
                every step.
              </li>
              <li>
                <strong>Secure and Transparent:</strong>
                Enjoy secure and transparent transactions, ensuring the
                confidentiality and integrity of your personal and transactional
                information.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="items-center overflow-hidden p-10 relative flex flex-row h-screen bg-black text-white">
        <div className="grid align-middle gap-5 justify-around items-center w-full">
          <div
            className="flex flex-row justify-center "
            style={{ width: "100%" }}
          >
            <div
              style={{
                backgroundColor: "orange",
                boxShadow: "0 0 25px 0 orange",
                width: scrollPosition > 1600 ? "80%" : "0%",
                position: "absolute",
                height: "12px",
                top: "50%",
                left: "10%",
                transition: "7.5s ease-in-out",
                transitionDelay: "1s",
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
              className="flex items-center justify-center"
            ></div>
            <div
              style={{
                backgroundColor: "white",
                width: scrollPosition > 1600 ? "0%" : "80%",
                position: "absolute",
                height: "12px",
                top: "50%",
                right: "10%",
                transition: "7.5s ease-in-out",
                transitionDelay: "1s",
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            ></div>
          </div>
          <div
            className="z-10 flex flex-row gap-20 justify-between w-full "
            style={{ width: "100%" }}
          >
            <div
              style={{
                border: "3px solid orange",
                boxShadow: scrollPosition > 1600 ? "0 0 20px 0 orange" : "none",
                transition: "1s ease",
                transitionDelay: "1.3s",
              }}
              className="bg-white h-40 w-40 rounded-full"
            >
              <LoginIcon
                style={{
                  color: "black",
                  fontSize: "8rem",
                  marginTop: "15px",
                  opacity: scrollPosition > 1600 ? "1" : "0",
                  transition: "1s ease",
                  transitionDelay: "1.7s",
                }}
              />
            </div>

            <div
              style={{
                border: "3px solid orange",
                boxShadow: scrollPosition > 1600 ? "0 0 20px 0 orange" : "none",
                transition: "1s ease",
                transitionDelay: "2.6s",
              }}
              className="bg-white h-40 w-40 rounded-full"
            >
              <FormatListNumberedIcon
                style={{
                  color: "black",
                  fontSize: "8rem",
                  marginTop: "15px",
                  opacity: scrollPosition > 1600 ? "1" : "0",
                  transition: "1s ease",
                  transitionDelay: "3s",
                  marginLeft: "15px",
                }}
              />
            </div>
            <div
              style={{
                border: "3px solid orange",
                boxShadow: scrollPosition > 1600 ? "0 0 20px 0 orange" : "none",
                transition: "1s ease",
                transitionDelay: "4.3s",
              }}
              className="bg-white flex items-center justify-center h-40 w-40 text-black rounded-full"
            >
              <CallIcon
                style={{
                  color: "black",
                  fontSize: "8rem",
                  marginTop: "15px",
                  opacity: scrollPosition > 1600 ? "1" : "0",
                  transition: "1s ease",
                  transitionDelay: "3.7s",
                  marginRight: "5px",
                }}
              />
            </div>
            <div
              style={{
                border: "3px solid orange",
                boxShadow: scrollPosition > 1600 ? "0 0 20px 0 orange" : "none",
                transition: "1s ease",
                transitionDelay: "5.6s",
              }}
              className="bg-white h-40 w-40 rounded-full"
            >
              <SellIcon
                style={{
                  color: "black",
                  fontSize: "8rem",
                  marginTop: "15px",
                  opacity: scrollPosition > 1600 ? "1" : "0",
                  transition: "1s ease",
                  transitionDelay: "5s",
                  marginLeft: "15px",
                }}
              />
            </div>
            <div
              style={{
                border: "3px solid orange",
                boxShadow: scrollPosition > 1600 ? "0 0 20px 0 orange" : "none",
                transition: "1s ease",
                transitionDelay: "6.5s",
              }}
              className="bg-white h-40 w-40 rounded-full"
            >
              <SelfImprovementIcon
                style={{
                  color: "black",
                  fontSize: "8rem",
                  marginTop: "15px",
                  opacity: scrollPosition > 1600 ? "1" : "0",
                  transition: "1s ease",
                  transitionDelay: "6s",
                  marginLeft: "15px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              justifySelf: "center",
              alignSelf: "center",
              width: "85%",
            }}
            className="absolute z-15 flex flex-row px-10 justify-around"
          >
            <div
              style={{
                border: "2px solid orange",
                transform:
                  scrollPosition > 1600
                    ? "translateY(-170%)"
                    : "translateY(0%)",
                transition: "1s ease",
                transitionDelay: "1.7s",
              }}
              className="z-5 flex flex-row items-center justify-center text-black bg-white h-20 w-32 rounded-xl"
            >
              LOGIN
            </div>
            <div
              style={{
                border: "2px solid orange",
                transform:
                  scrollPosition > 1600
                    ? "translateY(-170%)"
                    : "translateY(0%)",
                transition: "1s ease",
                transitionDelay: "3s",
              }}
              className="z-5 flex flex-row items-center justify-center text-black bg-white h-20 w-32 rounded-xl"
            >
              LIST
            </div>
            <div
              style={{
                border: "2px solid orange",
                transform:
                  scrollPosition > 1600
                    ? "translateY(-170%)"
                    : "translateY(0%)",
                transition: "1s ease",
                transitionDelay: "3.7s",
              }}
              className="z-5 flex flex-row items-center justify-center text-black bg-white h-20 w-32 rounded-xl"
            >
              CONTACT
            </div>
            <div
              style={{
                border: "2px solid orange",
                transform:
                  scrollPosition > 1600
                    ? "translateY(-170%)"
                    : "translateY(0%)",
                transition: "1s ease",
                transitionDelay: "5s",
              }}
              className="z-5 flex flex-row items-center justify-center text-black bg-white h-20 w-32 rounded-xl"
            >
              SELL/BUY
            </div>
            <div
              style={{
                border: "2px solid orange",
                transform:
                  scrollPosition > 1600
                    ? "translateY(-170%)"
                    : "translateY(0%)",
                transition: "1s ease",
                transitionDelay: "6s",
              }}
              className="z-5 flex flex-row items-center justify-center text-black bg-white h-20 w-32 rounded-xl"
            >
              RELAX
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
