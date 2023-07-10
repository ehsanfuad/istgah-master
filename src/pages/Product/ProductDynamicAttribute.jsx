import React, { useState } from "react";
import { Box } from "@mui/system";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { FiCheck } from "react-icons/fi";
import ProductColor from "./ProductColor";
import ProductProperty from "./ProductProperty";
function ProductDynamicAttribute({ product, type }) {
  switch (type.name) {
    case "رنگ":
      return <ProductColor attributes={product.colors} type={type} />;
    case "وزن":
      return (
        <ProductProperty
          attributes={product.weights}
          type={type}
          name="weight"
        />
      );
    case "آسیاب":
      return (
        <ProductProperty attributes={product.grinds} type={type} name="grind" />
      );
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
