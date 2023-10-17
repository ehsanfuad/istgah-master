import React, { useState, useEffect } from "react";
import { Box, Divider, Typography, Button, useMediaQuery } from "@mui/material";
import { BiCoffeeTogo } from "react-icons/bi";
import { FiTruck } from "react-icons/fi";
import { theme } from "../../Theme";
import {
  calDiscountPercent,
  formatMoney,
  GetProductType,
} from "../../hooks/numberUtils";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartReducer";
import CounterCart from "../../components/Cart/CounterCart";

function ProductInfoCard({ product, productId }) {
  const mobileVersion = useMediaQuery(theme.breakpoints.down("md"));
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
        {dynamicType?.discountedPrice || product?.discountedPrice ? (
          <Box mt={1} display="flex" justifyContent="space-between">
            <Box visibility="hidden">.</Box>
            <Box display="flex" alignItems="center">
              <Box
                position="relative"
                pl={0.5}
                display="flex"
                justifyContent="end"
                visibility={
                  dynamicType?.discountedPrice || product?.discountedPrice
                    ? "visible"
                    : "hidden"
                }
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
                  variant="subtitle1"
                >
                  {formatMoney(
                    dynamicType?.price ? dynamicType?.price : product?.price
                  )}
                </Typography>
              </Box>
              <Box
                sx={{ width: "fit-content" }}
                borderRadius={3}
                alignItems="center"
                bgcolor="red"
                px={1}
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
          </Box>
        ) : null}
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
            {dynamicType?.discountedPrice || product?.discountedPrice
              ? formatMoney(
                  dynamicType?.discountedPrice
                    ? dynamicType?.discountedPrice
                    : product?.discountedPrice
                )
              : formatMoney(
                  dynamicType?.price ? dynamicType?.price : product?.price
                )}
          </Typography>
          <Typography sx={{ fontSize: "0.7rem" }} component="span">
            تومان
          </Typography>
        </Box>
        {currentProduct?.quantity >= 1 ? (
          <Box px={2}>
            <CounterCart product={currentProduct} />
          </Box>
        ) : (
          <Button variant="contained" onClick={() => addProduct(product)}>
            افزودن به سبد
          </Button>
        )}
      </Box>
    );
  };
  return mobileVersion ? null : <ForDesktop />;
}

export default ProductInfoCard;
