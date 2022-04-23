import React, { useState, useEffect } from "react";
import "./navbr.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let nav = useNavigate();
  const checkprofile = () => {
    if (sessionStorage.getItem("user")) {
      setprofile(true);
    } else if (sessionStorage.getItem("center")) {
      setprofile(true);
    } else {
    }
  };
  const [isSmall, setisSmall] = useState(false);
  const [profile, setprofile] = useState(false);

  useEffect(() => {
    checkprofile();
  }, [nav]);

  const clear = () => {
    sessionStorage.clear();
    setprofile(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="HomeL">
          <img src="./Images/logo.png" alt="" className="logo1" srcset="" />
        </Link>
        <ul
          className={isSmall ? "links-mobile" : "links"}
          onClick={() => setisSmall(false)}
        >
          <Link to="/" className="Home">
            <li>Home</li>
          </Link>
          <Link to="/jobs" className="job">
            <li>jobs</li>
          </Link>
          <Link to="/gallery" className="gallery">
            <li>Gallery</li>
          </Link>
          <Link to="/chat" className="about">
            <li>Chat</li>
          </Link>
          {profile && (
            <Link to="/signin" className="button">
              <li onClick={clear}>Logout</li>
            </Link>
          )}
          {!profile && (
            <Link to="/signin" className="button">
              <li style={{ color: "yellow" }}>Sign In</li>
            </Link>
          )}
        </ul>
        <button className="mobile-icon" onClick={() => setisSmall(!isSmall)}>
          {isSmall ? (
            <i className="fas fa-times"></i>
          ) : (
            <i class="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
