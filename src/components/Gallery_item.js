import React from "react";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";

const Gallery_item = () => {
  return (
    <Box
      bgcolor={"white"}
      width={"230px"}
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
          width: 90,
          height: 90,
          position: "absolute",
          top: "5%",
          left: "30%",
          verticalAlign: "middle",
        }}
      />
      <Box
        mt={"56px"}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection="column"
      >
        <Typography variant="h6" fontWeight={"bolder"}>
          Shah Rukh khan
        </Typography>
        <Typography variant="p" fontStyle={"italic"}>
          Software Enginer
        </Typography>
        <Typography variant="p">Amrood Lab</Typography>
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
