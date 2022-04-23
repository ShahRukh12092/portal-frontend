import React from "react";
import { useContext } from "react";
import "../App.css";
import { contex } from "../Navbar/Index";
import Box from "@mui/material/Box";
import SideChats from "../components/SideChats";
import ChatArea from "../components/ChatArea";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Chatpage = () => {
  let navigate = useNavigate();
  const check = async () => {
    if (!sessionStorage.getItem("user")) {
      return navigate("/signin");
    } else {
      console.log(JSON.parse(sessionStorage.getItem("user")));
    }
  };

  useEffect(() => {
    check();
    //    set;
  }, []);

  return (
    <div className="app">
      <Box
        sx={{
          display: "flex",
          width: "90vw",
          height: "90vh",
          marginTop: "7px",
          boxShadow: "-1px 4px 20px -6px rgba(0, 0, 0, 0.75)",
        }}
      >
        <SideChats />
        <ChatArea />
      </Box>
    </div>
  );
};

export default Chatpage;
