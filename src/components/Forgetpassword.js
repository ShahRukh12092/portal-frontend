import React, { useState } from "react";
import "./forgetpassword.css";
const Forgetpassword = () => {
  const Forget = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      const response = await fetch("/forgetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      // const data = await response.json();
      console.log(response.status);
      if (response.status === 400) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
        setemail("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [email, setemail] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <form method="POST" className="table">
        <h2>Forget password</h2>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="enter your email"
        />

        <input
          style={{ width: "133px" }}
          type="submit"
          value="Request Code"
          className="submit"
          id="Login"
          onClick={Forget}
        />
        {error && <span className="error">invalid email</span>}
      </form>
    </>
  );
};

export default Forgetpassword;
