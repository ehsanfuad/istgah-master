import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
  Divider,
} from "@mui/material";
import React from "react";
import { theme } from "../../../Theme";

function CheckoutPrice({ itemNumber, rawPrice, cartPrice, discountedPrice }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      px={biggerThanMd ? 2 : 0}
      gap={2}
      display="flex"
      flexDirection="column"
    >
      <Box
        color={theme.palette.grey[900]}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="subtitle1" fontSize="0.8rem">
          {`قیمت کالا ها (${itemNumber})`}
        </Typography>
        <Typography
          variant="body2"
          color={theme.palette.grey[800]}
          fontSize="0.8rem"
        >
          {rawPrice} تومان
        </Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="subtitle1" fontSize="0.8rem">
          هزینه ارسال با پست
        </Typography>
        <Typography
          variant="body2"
          color={theme.palette.grey[800]}
          fontSize="0.8rem"
        >
          ۱۹,۰۰۰ تومان
        </Typography>
      </Box>
      <Divider display={discountedPrice ? "block" : "none"} />
      <Box
        display={discountedPrice ? "flex" : "none"}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        color="red"
      >
        <Typography variant="subtitle1" fontSize="0.8rem" color="red">
          سود شما از خرید
        </Typography>
        <Typography variant="body2" color="red" fontSize="0.8rem">
          {discountedPrice} تومان
        </Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="subtitle1" fontSize="0.8rem">
          قابل پرداخت
        </Typography>
        <Typography
          variant="body2"
          color={theme.palette.grey[800]}
          fontSize="0.8rem"
        >
          {cartPrice} تومان
        </Typography>
      </Box>

      <Box
        display={biggerThanMd ? "flex" : "none"}
        flexDirection="row"
        justifyContent="center"
      >
        <Button
          variant="contained"
          size="large"
          sx={{ paddingX: "5rem", marginBottom: "1rem", width: "100%" }}
        >
          پرداخت
        </Button>
      </Box>
    </Box>
  );
}

export default CheckoutPrice;
