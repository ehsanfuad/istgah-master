import { Box, Divider } from "@mui/material";
import React from "react";

function ModalContainer({ title, content, footer }) {
  const style = {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60vw",
    height: "80vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 4,
    overflow: "auto",
    // paddingX: 2.5,
    // paddingY: 2,
  };
  return (
    <Box sx={style}>
      <Box width="100%">{title}</Box>
      <Divider />
      <Box>{content}</Box>
    </Box>
  );
}

export default ModalContainer;
