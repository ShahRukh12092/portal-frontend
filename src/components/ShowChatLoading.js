import React from "react";
import { Skeleton, Box } from "@mui/material";

const ShowChatLoading = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
};

export default ShowChatLoading;
