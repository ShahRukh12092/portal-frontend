import {
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

toast.configure();

const Forgetpassword = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error("enter fields", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return;
    }
    if (password.length < 7) {
      toast.error("password length should be greater than 7", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:30001/checkemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const n = await response.json();
      setEmail("");
      setpassword("");
      navigate(`/signin`);
    } catch (error) {
      toast.error("user not exist with given email", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return;
    }
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
            Reset Password
          </Typography>

          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            width="100%"
            placeholder="Enter the email"
            label="email"
            value={email}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type="password"
            id="password"
            variant="outlined"
            autoComplete="off"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            placeholder="enter new password"
          />

          <button
            onClick={handleSubmit}
            type="submit"
            style={{
              padding: "4px",
              borderRadius: "2px",
              marginTop: "5px",
              background: "none",
              border: "none",
              backgroundColor: "green",
              cursor: "pointer",
              fontWeight: "bold",
              marginLeft: "35%",
            }}
          >
            Rest password
          </button>
        </Box>
      </Box>
    </>
  );
};

export default Forgetpassword;
