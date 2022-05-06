import { Box } from "@material-ui/core";
import { Scale } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useState } from "react";

const Jobcard = () => {
  const [readmore, setreadmore] = useState(false);
  let des =
    "Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with";
  return (
    <Box
      width={"43%"}
      border={1}
      borderRadius={6}
      m={1}
      overflow="hidden"
      boxShadow={"1px 1px 1px"}
      bgcolor="white"
      sx={{
        transition: ".5s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "2px 2px 2px",
        },
      }}
    >
      <Box m={1}>
        <Typography variant="h6" fontWeight={"bolder"}>
          ROR Developer
        </Typography>
        <Typography fontStyle={"italic"}>Amrood Labs</Typography>
        <Typography fontStyle={"oblique"}>
          Required experience
          <span style={{ fontWeight: "bold", marginLeft: "3px" }}>
            Intermadite
          </span>
        </Typography>
        <Typography variant="p">
          {readmore ? des : `${des.substring(0, 250)}...`}
          <button
            onClick={() => setreadmore(!readmore)}
            style={{
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              marginLeft: "3px",
              color: "blue",
              fontWeight: "bold",
            }}
          >
            {!readmore ? "Show All" : "Show Less"}
          </button>
        </Typography>
      </Box>
    </Box>
  );
};

export default Jobcard;
