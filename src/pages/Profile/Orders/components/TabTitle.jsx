import React from "react";
import { theme } from "../../../../Theme";
import { Box, Typography } from "@mui/material";

function TabTitle({ count, title, active }) {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Typography variant="body1" fontSize="0.8rem">
        {title}
      </Typography>
      <Box
        p={1}
        width="5px"
        height="5px"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius={1.5}
        bgcolor={active ? theme.palette.primary.main : theme.palette.grey[500]}
      >
        <Typography fontSize="0.8rem">{count}</Typography>
      </Box>
    </Box>
  );
}

export default TabTitle;
