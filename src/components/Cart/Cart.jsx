import { Box, Popover, Typography, Link, Button, Divider } from "@mui/material";
import React from "react";
import useClasses from "../../hooks/useClasses";
import { Link as RouterLink } from "react-router-dom";
import { theme } from "../../Theme";
import { FiChevronLeft } from "react-icons/fi";
import "./Cart.scss";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { getCartQuantity } from "../../hooks/numberUtils";

function Cart({ setCartAnchorEl, cartAnchorEl, eventCart, isShowCart }) {
  const open = Boolean(cartAnchorEl);
  const id = open ? "simple-popover" : undefined;
  const products = useSelector((state) => state.cart.products);
  const productNumber = getCartQuantity(products);
  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  const handleCartClick = () => {
    setCartAnchorEl(eventCart);
  };
  const styles = (theme) => ({
    popover: {
      pointerEvents: "none",
    },
    popoverContent: {
      pointerEvents: "auto",
    },
  });
  const classes = useClasses(styles);

  const CartContent = () => {
    return (
      <Popover
        id={id}
        open={open}
        anchorEl={cartAnchorEl}
        onClose={handleCartClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className={classes.popover}
        classes={{
          paper: classes.popoverContent,
        }}
        disdisablerestorefocus="true"
        PaperProps={{
          onMouseEnter: handleCartClick,
          onMouseLeave: handleCartClose,
        }}
      >
        <Box
          pt={1}
          display="flex"
          flexDirection="column"
          width="400px"
          height="500px"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height="30px"
            px={2}
          >
            <Typography
              fontSize="0.8rem"
              color={theme.palette.grey[700]}
            >{`${productNumber} کالا`}</Typography>
            <Link to="/cart" component={RouterLink} underline="none">
              <Box display="flex" alignItems="center">
                <Typography fontSize="0.8rem">مشاهده‌ی سبد خرید</Typography>
                <FiChevronLeft />
              </Box>
            </Link>
          </Box>
          <Box sx={{ overflowY: "scroll", height: "390px" }} px={2}>
            {products.map((product, index) => (
              <ProductCard product={product} key={index} border={1} />
            ))}
          </Box>
          <Divider flexItem />
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            height="80px"
            px={2}
          >
            <Box display="flex" flexDirection="column">
              <Typography color={theme.palette.grey[600]} variant="subtitle2">
                مبلغ قابل پرداخت
              </Typography>
              <Typography fontSize={"1.25rem"}> ۱۳،۸۰۰،۰۰۰ تومان</Typography>
            </Box>
            <Button
              sx={{ paddingY: "0.7rem" }}
              variant="contained"
              color="primary"
            >
              ورود و ثبت سفارش
            </Button>
          </Box>
        </Box>
      </Popover>
    );
  };
  return isShowCart ? <CartContent /> : null;
}

export default Cart;
