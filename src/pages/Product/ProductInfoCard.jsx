import React from "react";
import { Box, Divider, Typography, Button, useMediaQuery } from "@mui/material";
import { BiCoffeeTogo } from "react-icons/bi";
import { FiTruck } from "react-icons/fi";
import { theme } from "../../Theme";

function ProductInfoCard({ product }) {
  const mobileVersion = useMediaQuery(theme.breakpoints.down("md"));

  const ForDesktop = () => {
    return (
      <Box
        flex={1}
        mx={1}
        p={1.5}
        border={1}
        sx={{
          borderColor: "grey.300",
          borderRadius: "6px",
          height: "fit-content",
        }}
        bgcolor="#f7f7f8"
        display="flex"
        flexDirection="column"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={1}
        >
          <Typography>فروشنده</Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="body2">کافه ایستگاه</Typography>
            <BiCoffeeTogo style={{ fontSize: "25px" }} color="red" />
          </Box>
        </Box>
        <Divider />
        <Box
          mt={1}
          mb={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography>ارسال</Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="body2">پست/پیک</Typography>
            <FiTruck style={{ fontSize: "20px", marginRight: "3px" }} />
          </Box>
        </Box>
        <Divider />
        {product.discount ? (
          <Box mt={1} display="flex" justifyContent="space-between">
            <Box visibility="hidden">.</Box>
            <Box display="flex" alignItems="center">
              <Box
                position="relative"
                pl={0.5}
                display="flex"
                justifyContent="end"
                visibility={product.discount ? "visible" : "hidden"}
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
                  variant="caption"
                >
                  {product.price}
                </Typography>
              </Box>
              <Box
                sx={{ width: "fit-content" }}
                borderRadius={3}
                alignItems="center"
                bgcolor="red"
                px={1}
                display={product.discount ? "flex" : "none"}
              >
                <Typography
                  sx={{ fontSize: "10px" }}
                  color="white"
                  variant="caption"
                >
                  {product.discount + "%"}
                </Typography>
              </Box>
            </Box>
          </Box>
        ) : null}
        <Box display="flex" alignItems="center" justifyContent="end" mb={1}>
          <Typography
            sx={{ fontSize: "1.2rem" }}
            variant="subtitle2"
            component="span"
          >
            {product.discount ? product.discountedPrice : product.price}
          </Typography>
          <Typography sx={{ fontSize: "0.7rem" }} component="span">
            تومان
          </Typography>
        </Box>
        <Button variant="contained">افزودن به سبد</Button>
      </Box>
    );
  };
  return mobileVersion ? null : <ForDesktop />;
}

export default ProductInfoCard;
