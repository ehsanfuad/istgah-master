import React, { useState } from "react";
import { Box } from "@mui/system";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { FiCheck } from "react-icons/fi";
import ProductColor from "./ProductColor";
import ProductProperty from "./ProductProperty";
function ProductDynamicAttribute({ product, type }) {
  switch (type) {
    case "رنگ":
      return <ProductColor attributes={product.colors} type={type} />;
    case "نوع آسیاب":
      return <ProductProperty attributes={product.grinds} type={type} />;
    case "وزن":
      return <ProductProperty attributes={product.weights} type={type} />;
    case "ساده":
      return null;
    default:
      break;
  }
  // if (attributes.length > 0) {
  //   return type === "رنگ" ? (
  //     <ProductColor attributes={attributes} type={type} />
  //   ) : (
  //     <ProductProperty attributes={attributes} type={type} />
  //   );
  // } else {
  //   return null;
  // }
}

export default ProductDynamicAttribute;
