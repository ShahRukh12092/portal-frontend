import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../Pages/Signup";
import Gallery from "../Pages/Gallery";
import About from "../Pages/About";
import Jobs from "../Pages/Jobs";
import Home from "../Pages/Home";
import Navbar from "./Navbar";
import Chatpage from "../Pages/Chatpage";
import Register from "../Pages/Register";
import AddStudent from "../components/AddStudent.js";
import Forgetpassword from "../Pages/Forgetpassword";
export const contex = createContext();
const Index = () => {
  const [SelectedChat, setSelectedChat] = useState();
  const [user, setuser] = useState({});
  const [Chats, setChats] = useState([]);

  return (
    <div>
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
          <Route path="/addStudent" element={<AddStudent />} exact />
          <Route path="/chat" element={<Chatpage />} />
          <Route path="/forgetPassword" element={<Forgetpassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </contex.Provider>{" "}
    </div>
  );
};

export default Index;
