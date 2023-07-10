import React from "react";
import { Box, Button, useMediaQuery, Typography } from "@mui/material";
import { theme } from "../../Theme";
import { calDiscountPercent, formatMoney } from "../../hooks/numberUtils";

// function formatMoney(number) {
//   const formattedNumber = number.toLocaleString("fa-IR", {
//     useGrouping: true,
//     minimumFractionDigits: 0,
//   });
//   return formattedNumber;
// }
function ProductInfoCardMobile({ product }) {
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
          <Button variant="contained">افزودن به سبد</Button>
          <Box display="flex" flexDirection="column">
            <Box
              position="relative"
              pl={0.5}
              justifyContent="end"
              display={product.discountedPrice ? "flex" : "none"}
            >
              <Typography
                sx={{
                  textDecoration: "line-through",
                  fontSize: "0.8rem",
                  // textDecorationThickness: "2px",
                  // textUnderlineOffset: "-.3em",
                  // textDecorationSkipInk: "none",
                }}
                color="grey.500"
                // variant="subtitle2"
              >
                {formatMoney(product.price)}
              </Typography>
              <Box
                sx={{ width: "fit-content" }}
                borderRadius={3}
                alignItems="center"
                bgcolor="red"
                px={1}
                mr={0.5}
                display={product.discountedPrice ? "flex" : "none"}
              >
                <Typography
                  sx={{ fontSize: "10px" }}
                  color="white"
                  variant="caption"
                >
                  {calDiscountPercent(product.price, product.discountedPrice)}
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="end"
              mb={1}
              gap={0.5}
            >
              <Typography
                sx={{ fontSize: "1.2rem" }}
                variant="body2"
                component="span"
              >
                {product.discountedPrice
                  ? formatMoney(product.discountedPrice)
                  : formatMoney(product.price)}
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
