import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../../../Theme";

function CheckoutPriceMobile({ cartPrice }) {
  const mobileVersion = useMediaQuery(theme.breakpoints.down("md"));
  if (!mobileVersion) return null;
  return (
    <Box
      position="fixed"
      bgcolor="#fafafa"
      sx={{
        width: "100%",
        height: "82px",
        zIndex: 1000,
        bottom: 0,
        boxShadow: "0 1px 5px rgb(0 0 0 / 20%)",
        borderTop: "1px solid #D3D3D3",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={2}
        height="100%"
      >
        <Button
          variant="contained"
          sx={{ paddingX: 6, paddingY: 1.3, borderRadius: 2 }}
          size="large"
        >
          پرداخت
        </Button>
        <Box display="flex" flexDirection="column">
          <Box position="relative" pl={0.5} justifyContent="end" display="flex">
            <Typography fontSize="0.8rem" color="grey.700" variant="subtitle1">
              مبلغ قابل پرداخت
            </Typography>
          </Box>
          <Box
            gap={0.5}
            display="flex"
            alignItems="center"
            justifyContent="end"
            mb={1}
          >
            <Typography fontSize="1rem" variant="caption" component="span">
              {cartPrice}
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: "0.8rem" }}
              component="span"
            >
              تومان
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CheckoutPriceMobile;
