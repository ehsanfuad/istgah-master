import {
  Box,
  Card,
  CardActionArea,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ReactComponent as SpecialSaleImg } from "../../images/SpecialSell.svg";
import React from "react";
// import { product } from "../data/dummy";
import { MdStarRate } from "react-icons/md";
import useClasses from "../../hooks/useClasses";
import LazyImage from "../LazyImage/LazyImage";
import { theme } from "../../Theme";
import { calDiscountPercent, formatMoney } from "../../hooks/numberUtils";

// function calDiscountPercent(price, discountedPrice) {
//   if (discountedPrice) {
//     return (((price - discountedPrice) * 100) / price).toFixed() + "%";
//   }
// }

function ProductCard({ product }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const biggerThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(product);
  const styles = (theme) => ({
    root: {
      // maxWidth: 345,
      margin: theme.spacing(0.5),
      padding: theme.spacing(0.8),
      borderRadius: theme.spacing(0),
      "&:hover": {
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      },
    },
  });
  const classes = useClasses(styles);
  return (
    <Card className={classes.root}>
      {/* card content */}
      <Box p={1} sx={{ minHeight: { xs: "180px" } }}>
        {/* specisl sale */}
        <Box
          mb={0.5}
          sx={{
            visibility: product.discountedPrice ? "visible" : "hidden",
          }}
        >
          <SpecialSaleImg />
        </Box>
        {/* main two columns img and information */}
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "row", sm: "column" },
            alignItems: { sm: "center" },
          }}
        >
          {/* img col */}
          <Box>
            <Box
              sx={{
                width: { xs: "118px", sm: "240px" },
                mx: { xs: 0, md: 6 },
              }}
              display="flex"
              justifyContent="center"
            >
              <LazyImage
                imageUrl={
                  process.env.REACT_APP_UPLOAD_URL + product?.image?.url
                }
                width={biggerThanSm ? 200 : 115}
                height={biggerThanSm ? 200 : 115}
              />
            </Box>
          </Box>
          {/* information col */}
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            height="fit-content"
          >
            {/* product title */}
            <Box minHeight="60px">
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  lineClamp: 2,
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
                component="h2"
                variant="subtitle1"
                lineHeight="2.15"
                textAlign="right"
              >
                {product.name}
              </Typography>
            </Box>
            {/* rate and stock number */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mt={1}
            >
              {product.stock && product.stock <= 3 ? (
                <Typography
                  sx={{ fontSize: "12px" }}
                  variant="subtitle2"
                  color="red"
                >
                  تنها {product.stock} عدد در انبار باقی مانده
                </Typography>
              ) : (
                <span></span>
              )}
              <Box display="flex" alignItems="center">
                <Typography ml={0.5} component="p" variant="subtitle2">
                  {(Math.random() + 4).toFixed(1)}
                </Typography>
                <MdStarRate fontSize="1rem" color="gold" />
              </Box>
            </Box>
            {/* price and discount persentage */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent={product.discountedPrice ? "space-between" : "end"}
            >
              <Box
                borderRadius={2}
                display="flex"
                alignItems="center"
                bgcolor={theme.palette.error.dark}
                px={1}
                visibility={product.discountedPrice ? "visible" : "hidden"}
              >
                {/* moshkel */}
                <Typography
                  sx={{ fontSize: "13px" }}
                  color="white"
                  variant="subtitle1"
                >
                  {calDiscountPercent(product.price, product.discountedPrice)}
                </Typography>
              </Box>

              <Box display="flex" gap={0.5}>
                <Typography variant="body2">
                  {product.discountedPrice
                    ? formatMoney(product.discountedPrice)
                    : formatMoney(product.price)}
                </Typography>
                <Typography variant="body2">تومان</Typography>
              </Box>
            </Box>
            {/* show main price */}
            <Box
              position="relative"
              pl={4.5}
              display="flex"
              justifyContent="end"
              visibility={product.discountedPrice ? "visible" : "hidden"}
            >
              <Typography
                sx={{
                  textDecoration: "line-through",
                  // textDecorationThickness: "2px",
                  // textUnderlineOffset: "-.3em",
                  // textDecorationSkipInk: "none",
                }}
                color="grey.600"
                variant="subtitle1"
                fontSize="0.8rem"
              >
                {product.price}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default ProductCard;
