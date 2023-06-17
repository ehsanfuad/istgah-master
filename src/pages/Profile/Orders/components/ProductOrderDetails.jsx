import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../../Theme";

function ProductOrderDetails({ product, border }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={2}
      py={2}
      my={0.5}
      border={border}
      borderRadius={2}
      borderColor={theme.palette.grey[300]}
    >
      <Box
        maxWidth="116px"
        flex={1}
        display="flex"
        flexDirection="column"
        position="relative"
      >
        <img src={product.imgUrl} width="100%" alt={product.title} />
        <Box
          top="0"
          position="absolute"
          left="0"
          borderRadius={1}
          width="20px"
          height="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ backgroundColor: "rgb(211,211,211,0.5)" }}
        >
          {product.quantity}
        </Box>
      </Box>
      <Box flex={2} display="flex" flexDirection="column" gap={1.5}>
        <Typography className="noselect" fontSize="0.9rem" lineHeight={2}>
          {product.title}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            borderRadius={5}
            bgcolor="magenta"
            width="18px"
            height="18px"
          ></Box>
          <Typography>صورتی</Typography>
        </Box>
        <Box>
          <Typography fontSize="0.7rem" color={theme.palette.error.dark}>
            {product.price - product.discountedPrice} تخفیف
          </Typography>
        </Box>
        <Box>
          <Typography>32,000,000 تومان</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductOrderDetails;
