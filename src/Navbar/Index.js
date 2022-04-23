import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../Pages/Signup";
import Gallery from "../Pages/Gallery";
import About from "../Pages/About";
import Jobs from "../Pages/Jobs";
import Home from "../Pages/Home";
import Navbar from "./Navbar";
import Chatpage from "../Pages/Chatpage";
import signup from "../components/signup";
//import Forgetpassword from "../Components/Forgetpassword";
export const contex = createContext();
const Index = () => {
  const [SelectedChat, setSelectedChat] = useState();
  const [user, setuser] = useState({});
  const [Chats, setChats] = useState([]);

  return (
    <>
      <contex.Provider
        value={{
          user,
          setuser,
          SelectedChat,
          setSelectedChat,
          Chats,
          setChats,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} exact />
          <Route path="/jobs" element={<Jobs />} exact />
          <Route path="/gallery" element={<Gallery />} exact />
          <Route path="/signin" element={<Signin />} exact />
          {/* <Route path="/forgetpassword" element={<Forgetpassword />} exact /> */}
          <Route path="/chat" element={<Chatpage />} />
          {/* <Route path="/register" element={<signup />} /> */}
        </Routes>
      </contex.Provider>{" "}
    </>
  );
};

export default Index;
