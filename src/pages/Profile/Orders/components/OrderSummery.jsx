import React from "react";
import { theme } from "../../../../Theme";
import { Box, Typography, useMediaQuery } from "@mui/material";

function OrderSummery({ ordercount, icon, title }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      display="flex"
      flexDirection={biggerThanMd ? "row" : "column"}
      alignItems="center"
      gap={1}
    >
      <Box width="3rem" height="3rem" display="flex" position="relative">
        {icon}
        <Box
          display={biggerThanMd ? "none" : "flex"}
          justifyContent="center"
          alignItems="center"
          position="absolute"
          bottom={0}
          left={0}
          width="20px"
          height="20px"
          sx={{ backgroundColor: "rgb(211,211,211,0.8)" }}
          borderRadius={1}
        >
          {ordercount}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
      >
        <Typography display={biggerThanMd ? "block" : "none"}>
          {ordercount} سفارش
        </Typography>
        <Typography variant="subtitle1" fontSize="0.8rem">
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

export default OrderSummery;
