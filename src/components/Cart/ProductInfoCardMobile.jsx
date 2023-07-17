import React from "react";
import { Box, Button, useMediaQuery, Typography, Link } from "@mui/material";
import { theme } from "../../Theme";
import { Link as RouterLink } from "react-router-dom";
function ProductInfoCardMobile({ cartPrice }) {
  const mobileVersion = useMediaQuery(theme.breakpoints.down("md"));
  if (mobileVersion) {
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
          <Link to="/checkout" component={RouterLink} underline="none">
            <Button
              variant="contained"
              sx={{ paddingX: 6, paddingY: 1.3, borderRadius: 2 }}
              size="large"
            >
              ثبت سفارش
            </Button>
          </Link>
          <Box display="flex" flexDirection="column">
            <Box
              position="relative"
              pl={0.5}
              justifyContent="end"
              display="flex"
            >
              <Typography
                fontSize="0.7rem"
                color="grey.700"
                variant="subtitle1"
              >
                جمع سبد خرید
              </Typography>
            </Box>
            <Box
              gap={0.5}
              display="flex"
              alignItems="center"
              justifyContent="end"
              mb={1}
            >
              <Typography variant="subtitle1" component="span">
                {cartPrice}
              </Typography>
              <Typography sx={{ fontSize: "0.7rem" }} component="span">
                تومان
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
}

export default ProductInfoCardMobile;
