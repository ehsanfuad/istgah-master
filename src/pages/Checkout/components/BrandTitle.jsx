import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../../../Theme";

function BrandTitle() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Typography
      variant="body2"
      fontSize={biggerThanMd ? "2rem" : "1.5rem"}
      color="primary"
    >
      کافه ایستگاه
    </Typography>
  );
}

export default BrandTitle;
