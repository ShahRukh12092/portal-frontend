import React from "react";
import { useContext } from "react";
import "../App.css";
import { contex } from "../Navbar/Index";
import { Box, Typography, capitalize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
// import ScrollableFeed from "react-scrollable-feed";
import io from "socket.io-client";
toast.configure();
const link = "http://localhost:30001/";
var socket, selectedChat;
const ChatArea = () => {
  const getname = (current, users) => {
    console.log(current._id);
    return users[0]._id === current._id ? users[1].name : users[0].name;
  };
  const { user, SelectedChat, setSelectedChat } = useContext(contex);
  const [messagedata, setmessagedata] = useState("");
  const [messages, setmessages] = useState([]);
  const [Socket, setSocket] = useState(false);
  const sendMessage = async () => {
    if (!messagedata) {
      toast.warning("enter the Message first", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      return;
    }
    try {
      const res = await fetch(`http://localhost:30001/sendMessage`, {
        method: "POST",
        body: JSON.stringify({ data: messagedata, ChatId: SelectedChat._id }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const result = await res.json();

      setmessagedata("");
      socket.emit("send", result);
      setmessages([...messages, result]);
      console.log(messages);
    } catch (error) {
      toast.error("something wsent Wrong", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
  };
  const FetchMessages = async () => {
    if (!SelectedChat) return;
    try {
      const res = await fetch(
        `http://localhost:30001/getChat/${SelectedChat._id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(sessionStorage.getItem("user")).token
            }`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setmessages(data);
      socket.emit("con", SelectedChat._id);
    } catch (error) {
      console.log(error);
      toast.error("something went Wrong", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
  };
  useEffect(() => {
    socket = io(link);
    socket.emit("setup", user);
    socket.on("Connected", () => setSocket(true));
  }, []);

  useEffect(() => {
    FetchMessages();
    selectedChat = SelectedChat;
  }, [SelectedChat]);
  useEffect(() => {
    socket.on("RecieveMessage", (newMessage) => {
      if (!selectedChat || selectedChat._id !== newMessage.chat._id) {
      } else {
        setmessages([...messages, newMessage]);
      }
    });
  });

  return (
    <Box
      display={{ xs: SelectedChat ? "flex" : "none", md: "flex" }}
      flexDirection="column"
      flex={{ xs: SelectedChat ? "1" : "none", md: "0.65" }}
    >
      <Box
        display="flex"
        height="39px"
        alignItems={"center"}
        fontSize={{ xs: "30px", md: "33px" }}
        padding="10px"
        backgroundColor="white"
      >
        <ArrowBackIcon
          sx={{
            fontSize: "50px",
            display: { xs: "flex", md: "none" },
          }}
          onClick={() => setSelectedChat("")}
        />

        {SelectedChat ? (
          <Typography marginLeft={{ md: "5%", xs: "30%" }} variant="h5">
            {console.log(SelectedChat)}
            {SelectedChat.Groupchat
              ? capitalize(SelectedChat.Name)
              : capitalize(
                  getname(
                    JSON.parse(sessionStorage.getItem("user")),
                    SelectedChat.users
                  )
                )}
          </Typography>
        ) : (
          <Typography marginLeft={"35%"} variant="h5">
            Select the chat to start
          </Typography>
        )}
      </Box>
      <div
        className="check"
        style={{
          flex: "1",
          padding: "20px",
          OverFlow: "scroll",
          backgroundColor: "#dadbd3",
          overflowY: "scroll",
        }}
      >
        {messages.map((i) => (
          // <div
          //   style={{
          //     // width: "50%",
          //     marginLeft: user._id === i.sender._id ? "auto" : "0",
          //   }}
          //>
          <div
            style={{
              fontSize: "19px",
              padding: "10px",
              width: "40%",
              marginBottom: "30px",
              borderRadius: "7px",
              wordWrap: "break-word",
              marginLeft:
                JSON.parse(sessionStorage.getItem("user"))._id === i.sender._id
                  ? "auto"
                  : "0",
              backgroundColor:
                JSON.parse(sessionStorage.getItem("user"))._id === i.sender._id
                  ? "lightblue"
                  : "lightgreen",
            }}
          >
            <p>{i.data}</p>
          </div>
          // </div>
        ))}{" "}
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "62px",
          backgroundColor: "#dadbd3",
          borderTop: "1px solid black",
        }}
      >
        <input
          placeholder="enter the message"
          style={{
            marginLeft: "10px",
            flex: "1",
            borderRadius: "30px",
            padding: "10px",
            border: "none",
            outline: "none",
          }}
          value={messagedata}
          onChange={(e) => {
            setmessagedata(e.target.value);
          }}
        ></input>
        <SendIcon
          sx={{ fontSize: "33px", cursor: "pointer" }}
          onClick={sendMessage}
        />
      </Box>
    </Box>
  );
};
export default ChatArea;
