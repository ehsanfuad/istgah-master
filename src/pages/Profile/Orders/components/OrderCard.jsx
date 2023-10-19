import React from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  Link,
} from "@mui/material";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BiChevronLeft } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
import { theme } from "../../../../Theme";
import {
  convertToPersianDate,
  formatMoney,
} from "../../../../hooks/numberUtils";
import LazyImage from "../../../../components/LazyImage/LazyImage";

function CardTitle({ tabId }) {
  switch (tabId) {
    case 0:
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Box color={theme.palette.success.main}>
            <MdCheckCircle size={25} />
          </Box>
          <Typography color={theme.palette.grey[800]} fontSize="0.9rem">
            پرداخت شده
          </Typography>
        </Box>
      );
      break;
    case 1:
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Box>
            <FaHandHoldingHeart size={25} color={theme.palette.success.main} />
          </Box>
          <Typography color={theme.palette.grey[800]} fontSize="0.9rem">
            تحویل شده
          </Typography>
        </Box>
      );
      break;
    case 2:
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Box>
            <MdCancel size={25} color={theme.palette.grey[500]} />
          </Box>
          <Typography color={theme.palette.grey[800]} fontSize="0.9rem">
            لغو شده
          </Typography>
        </Box>
      );
      break;
    default:
      break;
  }
}
function OrderCard({ tabId, order, orderId }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      border={biggerThanMd ? 1 : 0}
      borderColor={theme.palette.grey[300]}
      borderRadius={3}
      m={biggerThanMd ? 2 : 0}
      pt={biggerThanMd ? 2 : 0}
    >
      <Box
        px={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <CardTitle tabId={tabId} />
        <Link
          to={`/profile/orders/${orderId}`}
          component={RouterLink}
          underline="none"
        >
          <BiChevronLeft size={25} color={theme.palette.grey[800]} />
        </Link>
      </Box>
      <Box
        display="flex"
        flexDirection={biggerThanMd ? "row" : "column"}
        gap={2}
        px={2}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="start"
          gap={0.4}
        >
          <Typography fontSize="0.8rem" color={theme.palette.grey[500]}>
            کد سفارش
          </Typography>
          <Typography fontSize="0.9rem" color={theme.palette.grey[900]}>
            {order.invoiceNumber ? order.invoiceNumber : "ندارد"}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <Typography fontSize="0.8rem" color={theme.palette.grey[500]}>
            {convertToPersianDate(order.publishedAt)}
          </Typography>
          <Typography fontSize="0.9rem" color={theme.palette.grey[900]}>
            {formatMoney(order.price)} ریال
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ display: biggerThanMd ? "flex" : "none" }} flexItem />
      <Box pr={2}>
        <Grid container>
          {order.products.map((product, index) => (
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} key={index}>
              <Link
                to={`/profile/orders/${orderId}`}
                component={RouterLink}
                underline="none"
              >
                <LazyImage
                  imageUrl={product?.image}
                  width={"100%"}
                  height={"100%"}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider
        sx={{ display: biggerThanMd ? "none" : "flex" }}
        variant="middle"
      />
    </Box>
  );
}

export default OrderCard;
