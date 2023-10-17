import React, { useEffect, useState } from "react";
import { Box, Button, useMediaQuery, Typography } from "@mui/material";
import { theme } from "../../Theme";
import {
  GetProductType,
  calDiscountPercent,
  formatMoney,
  showPrice,
} from "../../hooks/numberUtils";
import { useDispatch, useSelector } from "react-redux";
import CounterCart from "../../components/Cart/CounterCart";
import { addToCart } from "../../store/cartReducer";

// function formatMoney(number) {
//   const formattedNumber = number.toLocaleString("fa-IR", {
//     useGrouping: true,
//     minimumFractionDigits: 0,
//   });
//   return formattedNumber;
// }
function ProductInfoCardMobile({ product, productId }) {
  let dynamicType = GetProductType(product.product_types);
  const dispatch = useDispatch();
  const grind = useSelector((state) => state.cart.grind);
  const color = useSelector((state) => state.cart.color);
  const weight = useSelector((state) => state.cart.weight);
  const [currentProduct, setCurrentProduct] = useState(null);
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    const findProduct = products.find(
      (item) =>
        item?.id == productId &&
        item?.color?.id == color?.id &&
        item?.grind?.id == grind?.id &&
        item?.weight?.id == weight?.id
    );
    setCurrentProduct(findProduct);
  }, [products, color, weight, grind]);

  const addProduct = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: process.env.REACT_APP_UPLOAD_URL + product.image?.orginal,
        price: dynamicType?.price ? dynamicType?.price : product?.price,
        discountedPrice: dynamicType?.discountedPrice
          ? dynamicType?.discountedPrice
          : product?.discountedPrice,
        color: color,
        grind: grind,
        weight: weight,
      })
    );
  };

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
          {currentProduct?.quantity >= 1 ? (
            <Box width="50%">
              <CounterCart product={currentProduct} />
            </Box>
          ) : (
            <Button variant="contained" onClick={() => addProduct(product)}>
              افزودن به سبد
            </Button>
          )}
          <Box display="flex" flexDirection="column">
            <Box
              position="relative"
              pl={0.5}
              justifyContent="end"
              display={
                dynamicType?.discountedPrice || product?.discountedPrice
                  ? "flex"
                  : "none"
              }
            >
              <Typography
                sx={{
                  textDecoration: "line-through",
                  fontSize: "0.8rem",
                }}
                color="grey.500"
                // variant="subtitle2"
              >
                {formatMoney(
                  dynamicType?.price ? dynamicType?.price : product?.price
                )}
              </Typography>
              <Box
                sx={{ width: "fit-content" }}
                borderRadius={3}
                alignItems="center"
                bgcolor="red"
                px={1}
                mr={0.5}
                display={
                  dynamicType?.discountedPrice || product?.discountedPrice
                    ? "flex"
                    : "none"
                }
              >
                <Typography
                  sx={{ fontSize: "10px" }}
                  color="white"
                  variant="caption"
                >
                  {calDiscountPercent(
                    dynamicType?.price ? dynamicType?.price : product?.price,
                    dynamicType?.discountedPrice
                      ? dynamicType?.discountedPrice
                      : product?.discountedPrice
                  )}
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
                {showPrice(dynamicType, product)}
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
