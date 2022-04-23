import React, { useState } from "react";
import {
  Tooltip,
  Box,
  Button,
  Drawer,
  TextField,
  Typography,
  Stack,
  Avatar,
  capitalize,
} from "@mui/material";
import { toast } from "react-toastify";
import ShowChatLoading from "./ShowChatLoading";
import SeachItem from "./SeachItem";
import { useContext } from "react";
import { contex } from "../Navbar/Index";
import { useEffect } from "react";
toast.configure();

const SideChats = () => {
  const getname = (current, users) => {
    // console.log(current._id);
    return users[0]._id === current._id ? users[1].name : users[0].name;
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchdata, setsearchdata] = useState("");
  const [results, setresults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [currentUser, setcurrentUser] = useState();
  const { user, setuser, SelectedChat, setSelectedChat, Chats, setChats } =
    useContext(contex);
  const check = JSON.parse(sessionStorage.getItem("user"));

  const handleSubmit = async () => {
    if (!searchdata) {
      toast.error("enter the user name to serach user !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      return;
    }
    try {
      setisLoading(true);
      const token = JSON.parse(sessionStorage.getItem("user"));
      const data = await fetch(
        `http://localhost:30001/SearchUser?search=${searchdata}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      const result = await data.json();
      console.log(result);
      setsearchdata("");
      setisLoading(false);
      setresults(result);
    } catch (error) {
      console.log(error);
      toast.error("Error to find users", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      setsearchdata("");
    }
  };

  const CreateChat = async (userid) => {
    try {
      const token = JSON.parse(sessionStorage.getItem("user"));
      const data = await fetch(`http://localhost:30001/chat`, {
        method: "POST",
        body: JSON.stringify({ Userid: userid }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
      });
      const newchat = await data.json();
      console.log(newchat);

      if (!Chats.find((chat) => chat._id === newchat._id)) {
        setChats([newchat, ...Chats]);
      }
      setSelectedChat(newchat);
      setIsDrawerOpen(false);
      console.log(userid);
      setresults([]);
    } catch (error) {
      console.log(error);
      toast.error("Error to Create chat with searched user", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
  };

  const Fetchingchats = async () => {
    try {
      const token = JSON.parse(sessionStorage.getItem("user"));

      const res = await fetch(`http://localhost:30001/getchats`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });
      const data = await res.json();
      setChats(data);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    console.log(JSON.parse(sessionStorage.getItem("user")));
    setcurrentUser(JSON.parse(sessionStorage.getItem("user")));
    Fetchingchats();
    console.log("h2");
  }, []);

  return (
    <Box
      display={{ xs: SelectedChat ? "none" : "flex", md: "flex" }}
      flexDirection="column"
      flex={{ xs: SelectedChat ? "none" : "1", md: "0.35" }}
      // alignItems={"center"}
      //bgcolor="#f6f6f6;"
      // width={{ xs: "100%", md: "32%" }}
      //height="100"
      // border={2}
      //borderRadius={4}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        backgroundColor="#f6f6f6"
        height="39px"
        padding="10px"
      >
        <Tooltip title="Search the user " placement="top-start">
          <Typography
            onClick={() => setIsDrawerOpen(true)}
            display="flex"
            style={{ border: "black" }}
            variant="h6"
            sx={{ cursor: "pointer" }}
          >
            Search the user
            <i
              className="fas fa-search"
              style={{
                marginLeft: "8px",
                fontSize: "20px",
                marginTop: "7px",
              }}
            />
          </Typography>
        </Tooltip>
      </Box>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setsearchdata("");
        }}
      >
        <Box m={2} style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            required
            id="search"
            label="Search the user"
            value={searchdata}
            onChange={(e) => setsearchdata(e.target.value)}
            autoFocus
            placeholder="Search the user"
          />
          <Button
            style={{
              backgroundColor: "green",
              height: 58,
              borderRadius: 5,
              marginLeft: "8px",
              color: "white",
            }}
            type="submit"
            onClick={handleSubmit}
          >
            Serach
          </Button>
        </Box>
        {isLoading ? (
          <ShowChatLoading />
        ) : (
          results?.map((user) => (
            <SeachItem
              key={user._id}
              user={user}
              handleChat={() => CreateChat(user._id)}
            />
          ))
        )}
      </Drawer>
      <Box
        flex="1"
        backgroundColor={"white"}
        display="flex"
        flexDirection="column"
        justifyContent={"flex-start"}
        sx={{ overflowY: "scroll" }}
      >
        {Chats ? (
          <Stack mt={2} overflow={"scroll"}>
            {Chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    boxShadow: 7,
                  },
                }}
                key={chat._id}
                backgroundColor={SelectedChat === chat ? "#dadbd3" : "white"}
                color={"black"}
                width="96%"
                m={1}
                mt={2}
                height="95px"
                display="flex"
                border={3}
                borderRadius={3}
                borderColor={"#dadbd3"}
              >
                <Avatar
                  alt={
                    chat.Groupchat
                      ? capitalize(chat.Name)
                      : capitalize(
                          getname(
                            JSON.parse(sessionStorage.getItem("user")),
                            chat.users
                          )
                        )
                  }
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: 70,
                    height: 70,
                    marginTop: "4px",
                    marginLeft: "5px",
                  }}
                />{" "}
                <Typography
                  sx={{ marginLeft: "12px", marginTop: "12px" }}
                  variant="h5"
                >
                  {chat.Groupchat
                    ? capitalize(chat.Name)
                    : capitalize(
                        getname(
                          JSON.parse(sessionStorage.getItem("user")),
                          chat.users
                        )
                      )}
                </Typography>
              </Box>
            ))}
          </Stack>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default SideChats;
