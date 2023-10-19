import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../../../../Theme";
TitleContent.defaultProps = {
  direction: "row",
};
function TitleContent({ title, content, direction }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box display="flex" flexDirection={biggerThanMd ? "row" : "column"} gap={2}>
      <Box
        display="flex"
        alignItems="stretch"
        flexDirection={biggerThanMd ? "row" : direction}
        gap={1}
        justifyContent={biggerThanMd ? "" : "space-between"}
      >
        <Box display="flex" alignItems="center">
          <Typography
            variant="subtitle1"
            fontSize="0.9rem"
            color={theme.palette.grey[600]}
          >
            {title}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography fontSize="0.9rem" variant="body1">
            {content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default TitleContent;
