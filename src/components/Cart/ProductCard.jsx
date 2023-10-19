import { Box, Typography } from "@mui/material";
import React from "react";
import CounterCart from "./CounterCart";
import { theme } from "../../Theme";
import { formatNumber } from "../../hooks/numberUtils";
import DynamicPropCart from "./DynamicPropCart";
import LazyImage from "../LazyImage/LazyImage";

function ProductCard({ product, border, counterCart = true }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={2}
      py={2}
      my={0.5}
      border={border}
      borderRadius={2}
      borderColor={theme.palette.grey[300]}
    >
      <Box maxWidth="116px" flex={1} display="flex" flexDirection="column">
        <LazyImage imageUrl={product?.image} width={116} height={100} />
        {counterCart && <CounterCart product={product} />}
        {!counterCart && (
          <Box display="flex" justifyContent="center" sx={{ width: "100%" }}>
            {formatNumber(product.quantity)}
          </Box>
        )}
      </Box>
      <Box flex={2} display="flex" flexDirection="column" gap={1}>
        <Typography className="noselect" fontSize="0.9rem" lineHeight={2}>
          {product.name}
        </Typography>
        <DynamicPropCart name="وزن:" property={product.weight} id="weight" />
        <DynamicPropCart name="آسیاب:" property={product.grind} id="grind" />
        <DynamicPropCart name="رنگ:" property={product.color} id="color" />
        {product.discountedPrice ? (
          <Box>
            <Typography fontSize="0.7rem" variant="subtitle2" color="red">
              {formatNumber(product.price - product.discountedPrice)} تومان
              تخفیف
            </Typography>
          </Box>
        ) : null}
        <Box>
          <Typography variant="body1">
            {formatNumber(
              product.discountedPrice ? product.discountedPrice : product.price
            )}{" "}
            تومان
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
