import React, { useState, useRef, useEffect } from "react";
import dark from "../components/Home_page_main_bg_img.png";
import { Link } from "react-router-dom";
import Btn from "../NewComponents/Btn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/AddCircle";
import { app } from "../NewComponents/Outh";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

function Profile() {
  const imageRef = useRef("null");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [file, setFile] = useState(null);
  const [filePer, setFileper] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [formData, setFormData] = useState({});

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  function handleFileUpload(file) {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFileper(progress);
      },
      (error) => {
        setFileError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((dawnloadURL) => {
          setFormData({ ...formData, photo: dawnloadURL });
        });
      }
    );
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
      <div
        className={`w-2/5  py-10  border-solid flex flex-col gap-5 self-start mt-36 justify-center border-white bg-black bg-opacity-50 shadow-lg rounded-lg z-10 relative px-10 transition-div ${
          loading ? "" : "show"
        }`}
      >
        <div>
          <div className="relative flex flex-row justify-center align-middle mb-8">
            <input
              type="file"
              name=""
              className="cursor-pointer hidden"
              id=""
              ref={imageRef}
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <div className="relative">
              <img
                src={formData.photo || user.photo}
                className="rounded-full w-32 h-32 object-cover cursor-pointer"
                alt=""
                onClick={() => imageRef.current.click()}
              />
              <EditIcon className="absolute cursor-pointer right-4 bottom-4" />
            </div>

            <div className="absolute right-0 z-10">
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <SettingsApplicationsIcon
                  className="text-white"
                  style={{ fontSize: "3em" }}
                />
              </Button>
              <Menu
                className="absolute right-0"
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem className="text-md" onClick={handleClose}>
                  <div className="flex flex-row relative">
                    <div className="absolulte left-0">Logout</div>
                    <div className="absolute left-28">
                      <LogoutIcon
                        className="text-black ml-1"
                        style={{ fontSize: "1em" }}
                      />
                    </div>
                  </div>
                </MenuItem>
                <MenuItem className="text-md" onClick={handleClose}>
                  <div className="flex flex-row relative">
                    <div className="absolulte left-0">
                      Delete Account{" "}
                      <DeleteIcon
                        className="text-black"
                        style={{ fontSize: "1em" }}
                      />
                    </div>
                    <div className="absolute left-24"></div>
                  </div>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <p className="flex flex-row justify-center pb-8">
            {fileError ? (
              <span className="text-red-700">Error while uploading image</span>
            ) : filePer > 0 && filePer < 100 ? (
              <span className="text-slate-800">Uploading Image {filePer}</span>
            ) : filePer === 100 ? (
              <span className="text-green-300">
                Image uploaded successfully....!
              </span>
            ) : (
              ""
            )}
          </p>
          <div className="hover-underline-animation w-full">
            <input
              type="text"
              className="h-10 rounded-md px-7 focus:outline-none text-black"
              style={{ width: "100%" }}
              placeholder="Enter Username"
              name="username"
              id="username"
            />
          </div>
        </div>
        <div className="hover-underline-animation">
          <input
            type="email"
            className="h-10 rounded-md px-7 focus:outline-none text-black"
            style={{ width: "100%" }}
            placeholder="Enter Email"
            name="email"
            id="email"
          />
        </div>
        <div className="hover-underline-animation">
          <input
            type="password"
            className="h-10 rounded-md px-7 focus:outline-none text-black"
            style={{ width: "100%" }}
            placeholder="Enter Password"
            name="password"
            id="password"
          />
        </div>
        <div>
          <Btn title="Update" ActiveColor="bg-red-900" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
