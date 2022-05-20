import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { contex } from "../Navbar/Index";
import React from "react";
import { Paper } from "@mui/material";

toast.configure();

const Landingpage = () => {
  const { setuser } = useContext(contex);
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  //console.log(user);
  const handleSubmit = (event) => {
    console.log(email, password);
    if (!email || !password) {
      toast.error("enter the fields", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1400,
      });
      setEmail("");
      setpassword("");
      return;
    }
    fetch("http://localhost:30001/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setuser(data);
        if (!data.center) {
          sessionStorage.setItem("user", JSON.stringify(data));
          console.log(data);
        } else {
          sessionStorage.setItem("center", JSON.stringify(data));
        }
        setEmail("");
        setpassword("");
        navigate(`/`);

        return;
      })
      .catch((err) => {
        console.log(err);
        toast.error("invalid credentials", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      });
  };

  return (
    <>
      <Box height={"90vh"}>
        <CssBaseline />
        <Box
          boxShadow={"3px 3px 3px 3px black"}
          p={2}
          borderRadius={2}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "white",
            width: "fit-content",
            margin: "30px auto",
          }}
        >
          <Typography component="h1" variant="h3">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="enter the email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              placeholder="enter your password"
            />
            <Typography
              onClick={handleSubmit}
              marginLeft="42%"
              width={"fit-content"}
              p={1}
              borderRadius={1}
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "green",
                color: "black",
              }}
            >
              <Button fontWight="bold">Sign In</Button>
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            width={"100%"}
            m={0.5}
          >
            <Typography color={"blue"}>
              <Link to="/forgetPassword">Forget password</Link>
            </Typography>
            <Typography color={"blue"}>
              <Link to="/register">Create account</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Landingpage;
