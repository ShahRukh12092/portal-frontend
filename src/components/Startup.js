import { Box } from "@material-ui/core";
import React from "react";
import "./Startup.css";

const Startup = () => {
  let des =
    "Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with";

  return (
    <Box className="card" width={"300px"} height={"300px"}>
      <figure>
        <img src={`${process.env.PUBLIC_URL}/Images/avatar.png`} alt="LOGO" />
      </figure>

      <div className="title">
        <h2>Startup title</h2>
      </div>

      <div className="abstact">
        <p>{`${des.substring(0, 100)}`}</p>
      </div>
    </Box>
  );
};

export default Startup;
