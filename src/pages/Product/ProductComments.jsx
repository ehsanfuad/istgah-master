import React from "react";
import { Box, Paper, Typography } from "@mui/material";

function ProductComments({ description }) {
  return (
    <Box my={1} display="flex" flexDirection="column">
      <Paper sx={{ p: 2 }} elevation={2}>
        <Typography fontSize="18px" variant="body1" component="p">
          توضیحات:
        </Typography>
        <Typography variant="body2" lineHeight={2}>
          {description}
        </Typography>
      </Paper>
    </Box>
  );
}

export default ProductComments;
