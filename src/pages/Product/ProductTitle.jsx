import React from "react";
import { Typography } from "@mui/material";

function ProductTitle({ name }) {
  return (
    <Typography
      component="h1"
      sx={{
        fontSize: { xs: "1.1rem", md: "1.5rem" },
        lineHeight: "2.12",
      }}
    >
      {name}
    </Typography>
  );
}

export default ProductTitle;
