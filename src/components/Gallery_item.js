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
      borderRadius={1.5}
      boxShadow={1}
      position="relative"
      border={1}
      borderTop={"none"}
      sx={{
        "&:hover": {},
      }}
    >
      <Box height={"20%"} bgcolor={"gray"} borderRadius={"inherit"}></Box>
      <Avatar
        src="public/logo512.png"
        //alt="SRK"
        sx={{
          width: 90,
          height: 90,
          position: "absolute",
          top: "5%",
          left: "30%",
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
