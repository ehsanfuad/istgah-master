import { Box, Card, CardActionArea, Typography } from "@mui/material";
import { ReactComponent as SpecialSaleImg } from "../../images/SpecialSell.svg";
import React from "react";
// import { product } from "../data/dummy";
import { MdStarRate } from "react-icons/md";
import useClasses from "../../hooks/useClasses";

function ProductCard({ product }) {
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
            visibility: product.discount ? "visible" : "hidden",
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
              mb={3}
              display="flex"
              justifyContent="center"
            >
              <img
                style={{ objectFit: "contain" }}
                width="100%"
                src={product.imgUrl}
                alt="product image"
              />
            </Box>
          </Box>
          {/* information col */}
          <Box display="flex" flexDirection="column" width="100%">
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
                {product.title}
              </Typography>
            </Box>
            {/* rate and stock number */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mt={1}
            >
              {product.stockNumber <= 3 ? (
                <Typography
                  sx={{ fontSize: "12px" }}
                  variant="subtitle2"
                  color="red"
                >
                  تنها {product.stockNumber} عدد در انبار باقی مانده
                </Typography>
              ) : (
                <span></span>
              )}
              <Box display="flex" alignItems="center">
                <Typography ml={0.5} component="p" variant="subtitle2">
                  {product.rate}
                </Typography>
                <MdStarRate fontSize="1rem" color="gold" />
              </Box>
            </Box>
            {/* price and discount persentage */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent={product.discount ? "space-between" : "end"}
            >
              <Box
                borderRadius={2}
                display="flex"
                alignItems="center"
                bgcolor="red"
                px={1}
                visibility={product.discount ? "visible" : "hidden"}
              >
                {/* moshkel */}
                <Typography
                  sx={{ fontSize: "13px" }}
                  color="white"
                  variant="subtitle1"
                >
                  {product.discount + "%"}
                </Typography>
              </Box>

              <Box display="flex">
                <Typography variant="subtitle1">
                  {product.discount ? product.discountedPrice : product.price}
                </Typography>
                <Typography variant="subtitle1">تومان</Typography>
              </Box>
            </Box>
            {/* show main price */}
            <Box
              position="relative"
              pl={4.5}
              display="flex"
              justifyContent="end"
              visibility={product.discount ? "visible" : "hidden"}
            >
              <Typography
                sx={{
                  textDecoration: "line-through",
                  // textDecorationThickness: "2px",
                  // textUnderlineOffset: "-.3em",
                  // textDecorationSkipInk: "none",
                }}
                color="grey.500"
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
