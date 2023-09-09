import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

function Loading({ showBrand = true }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {showBrand ? <Typography>کافه ایستگاه</Typography> : null}
      <CircularProgress />
    </Box>
  );
}

export default Loading;
