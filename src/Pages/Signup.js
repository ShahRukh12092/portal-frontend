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
    event.preventDefault();
    console.log(email, password);
    if (!email || !password) {
      toast.error("enter the fields", { position: toast.POSITION.TOP_CENTER });
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
      <Box>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
            <Button
              type="submit"
              fullWidth
              onClick={handleSubmit}
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                marginRight: "50%",
                backgroundColor: "green",
              }}
            >
              Sign In
            </Button>
          </Box>
          {/* <Typography color={"blue"}>
            <Link to="/register">if you have no account</Link>
          </Typography> */}
        </Box>
      </Box>
    </>
  );
};

export default Landingpage;
