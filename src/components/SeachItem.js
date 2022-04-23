import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const SeachItem = ({ user, handleChat }) => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      alighnitems="center"
      bgcolor="#c2cfc5"
      onClick={handleChat}
      sx={{
        // some styles
        ":hover": {
          boxShadow: 7,
        },
        cursor: "pointer",
      }}
      color="black"
      mb={2}
      px={2}
      py={2}
    >
      <Avatar
        alt={user.name}
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <Box ml={2}>
        <Typography variant="h6">{user.name}</Typography>
        <Typography>{user.email}</Typography>
      </Box>
    </Box>
  );
};

export default SeachItem;
