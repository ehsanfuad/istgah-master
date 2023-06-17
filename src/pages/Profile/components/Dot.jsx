import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { theme } from "../../../Theme";

function Dot() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      display={biggerThanMd ? "block" : "none"}
      width="4px"
      height="4px"
      borderRadius={3}
      bgcolor={theme.palette.grey[300]}
    ></Box>
  );
}

export default Dot;
