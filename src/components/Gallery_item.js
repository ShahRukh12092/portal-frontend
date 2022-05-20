import React from "react";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";

const Gallery_item = (props) => {
  const { data } = props;
  return (
    <Box
      bgcolor={"white"}
      width={"260px"}
      height={"45vh"}
      m={1}
      borderRadius={2}
      boxShadow={"1px 1px 1px"}
      position="relative"
      border={1}
      borderTop={"none"}
      sx={{
        transition: ".5s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "2px 2px 2px",
        },
      }}
    >
      <Box height={"20%"} bgcolor={"gray"} borderRadius={"inherit"}></Box>
      <Avatar
        src={`${process.env.PUBLIC_URL}/Images/avatar.png`}
        //alt="SRK"
        sx={{
          width: "80px",
          height: "80px",
          position: "absolute",
          top: "2%",
          left: "36%",
        }}
      />
      <Box
        mt={"30px"}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection="column"
      >
        <Typography variant="h6" fontWeight={"bolder"}>
          {data.name}
        </Typography>
        <Typography variant="p" fontStyle={"italic"} mt={0.5}>
          {data.status === "Free"
            ? "Free"
            : data.status === "Job"
            ? `${data.designation}`
            : data.status === "Study"
            ? `${data.degree}`
            : `${data.designation} / ${data.degree} `}
        </Typography>
        <Typography variant="p" mt={0.5}>
          {data.status === "Free"
            ? ""
            : data.status === "Job"
            ? `${data.company}`
            : data.status === "Study"
            ? `${data.uni}`
            : `${data.company} / ${data.uni}`}
        </Typography>
        <Typography
          fontWeight={"bold"}
          border={2}
          p={1.3}
          mt={1}
          color={"blue"}
          borderRadius={5}
          sx={{
            "&:hover": {
              color: "red",
            },
            cursor: "pointer",
          }}
        >
          View more
        </Typography>
      </Box>
    </Box>
  );
};

export default Gallery_item;
