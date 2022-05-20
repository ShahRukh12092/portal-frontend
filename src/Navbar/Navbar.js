import React, { useState, useEffect } from "react";
import "./navbr.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@material-ui/core";
import { Logout } from "@mui/icons-material";

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
    nav("/signin");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
            <>
              <Box mt={"-4px"}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                      mt: 2,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>Profile</MenuItem>
                <Divider />
                <MenuItem>My account</MenuItem>
                <Divider />
                <MenuItem onClick={clear}>Logout</MenuItem>
              </Menu>
            </>
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
