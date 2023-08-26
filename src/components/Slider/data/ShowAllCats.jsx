import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { MdChevronLeft } from "react-icons/md";

function ShowAllCats({ paddingTop, paddingRight }) {
  return (
    <Box display="flex" alignItems="center" pt={paddingTop} pr={paddingRight}>
      <Typography variant="caption" color="gray">
        همه موارد این دسته
      </Typography>
      <MdChevronLeft color="GrayText" />
    </Box>
  );
}

export default ShowAllCats;
