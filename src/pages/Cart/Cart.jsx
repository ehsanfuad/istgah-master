import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { theme } from "../../Theme";
import { FiMoreVertical } from "react-icons/fi";
import ProductCard from "../../components/Cart/ProductCard";
import ProductInfoCardMobile from "../../components/Cart/ProductInfoCardMobile";
import Navbar from "../../components/Navbar/Navbar";
import CartPrice from "../../components/Cart/CartPrice";
import { useSelector } from "react-redux";
import {
  formatMoney,
  getCartPrice,
  getCartQuantity,
  getDiscountedCart,
  getRawCartPrice,
  sumDiscountCart,
} from "../../hooks/numberUtils";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const cartItemNumber = getCartQuantity(products);
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));

  const Title = () => {
    return (
      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="body1" fontSize="0.8rem">
          سبد خرید
        </Typography>
        <Box
          p={1}
          width="5px"
          height="5px"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={1.5}
          bgcolor={theme.palette.primary.main}
        >
          <Typography fontSize="0.8rem">{cartItemNumber}</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Navbar />
      <Box sx={{ paddingBottom: biggerThanMd ? "0" : "82px" }}>
        <Container maxWidth="xl">
          <Box mt={2} sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={0}>
              <Tab label={<Title />} disableRipple />
            </Tabs>
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Box
            pt={2}
            display="flex"
            gap={biggerThanMd ? 1 : 0}
            flexDirection={biggerThanMd ? "row" : "column"}
          >
            <Box
              flex={3}
              display="flex"
              flexDirection="column"
              border={biggerThanMd ? 1 : 0}
              pt={biggerThanMd ? 2 : 0}
              borderRadius={2}
              borderColor={theme.palette.grey[300]}
            >
              <Box px={2} display="flex" justifyContent="space-between">
                <Box gap={1.5} display="flex" flexDirection="column">
                  <Typography>سبد خرید شما</Typography>
                  <Typography
                    fontSize="0.8rem"
                    variant="subtitle2"
                    color={theme.palette.grey[600]}
                  >
                    {cartItemNumber} کالا
                  </Typography>
                </Box>
                <Box color={theme.palette.grey[500]}>
                  <FiMoreVertical size={23} />
                </Box>
              </Box>
              <Box>
                {products.map((product, index) => (
                  <Box mt={3} key={index}>
                    <Container maxWidth="xl">
                      <ProductCard product={product} key={index} border={0} />
                    </Container>
                    <Divider />
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              flex={1}
              border={biggerThanMd ? 1 : 0}
              borderRadius={2}
              pt={biggerThanMd ? 2 : 0}
              borderColor={theme.palette.grey[300]}
              position="sticky"
              top={100}
              height="fit-content"
            >
              <CartPrice
                itemNumber={cartItemNumber}
                rawPrice={getRawCartPrice(products)}
                discountedPrice={getDiscountedCart(products)}
                sumDiscountCart={sumDiscountCart(products)}
                cartPrice={formatMoney(getCartPrice(products))}
              />
            </Box>
          </Box>
        </Container>
        <ProductInfoCardMobile
          cartPrice={formatMoney(getCartPrice(products))}
        />
      </Box>
    </>
  );
}

export default Cart;
