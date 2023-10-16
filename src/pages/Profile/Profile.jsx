import React from "react";
import { Container, Box, Typography, useMediaQuery, Link } from "@mui/material";
import { theme } from "../../Theme";
import { Link as RouterLink } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { BsFillBagCheckFill, BsBagXFill, BsBagPlusFill } from "react-icons/bs";
import OrderSummery from "./Orders/components/OrderSummery";
import jwt_decode from "jwt-decode";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";

function Profile() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));

  const jwt = localStorage.getItem("jwt");
  let jwtErrorMessage = null;
  let userId = null;
  try {
    const decoded = jwt_decode(jwt);
    userId = decoded.id;
  } catch (error) {
    jwtErrorMessage = error.message;
    console.log("error", error);
  }
  const { res, loading, error } = useFetch(
    `/orders?filters[userId][$eq]=${userId}`
  );
  console.log(res);
  if (loading) return <Loading />;
  if ((!loading && res?.error?.status > 400) || jwtErrorMessage) {
    localStorage.removeItem("jwt");
    window.location.reload(false);
  }

  return (
    <Box p={2} display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            borderBottom={3}
            pb={1}
            borderColor={theme.palette.primary.main}
          >
            سفارش های من
          </Typography>
        </Box>
        <Box>
          <Link to="/profile/orders" component={RouterLink} underline="none">
            <Box display="flex" flexDirection="row" alignItems="center">
              <Typography fontSize="0.8rem">مشاهده همه</Typography>
              <BiChevronLeft size={20} />
            </Box>
          </Link>
        </Box>
      </Box>
      <Link
        to="/profile/orders"
        component={RouterLink}
        underline="none"
        color="inherit"
      >
        <Box
          pl={biggerThanMd ? 10 : 0}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pt={5}
        >
          <Box>
            <OrderSummery
              icon={<BsBagPlusFill size="3rem" color="#0073cf" />}
              ordercount={3}
              title="پرداخت شده"
            />
          </Box>
          <OrderSummery
            icon={<BsFillBagCheckFill size="3rem" color="#007500" />}
            ordercount={2}
            title="تحویل شده"
          />
          <Box>
            <OrderSummery
              icon={<BsBagXFill size="3rem" color="#750000" />}
              ordercount={0}
              title="لغو شده"
            />
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default Profile;
