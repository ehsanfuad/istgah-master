import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Box, Container, useMediaQuery } from "@mui/material";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { theme } from "../../Theme";
import ProductImages from "../../components/Product/ProductImages";
import ProductTitle from "./ProductTitle";
import ProductDynamicAttribute from "./ProductDynamicAttribute";
import ProductFeatures from "./ProductFeatures";
import ProductInfoCard from "./ProductInfoCard";
import ProductComments from "./ProductComments";
import ProductInfoCardMobile from "./ProductInfoCardMobile";
import { useDispatch, useSelector } from "react-redux";
import useProduct from "../../hooks/useProduct";

function Product() {
  const color = useSelector((state) => state.cart.color);
  const weight = useSelector((state) => state.cart.weight);
  const grind = useSelector((state) => state.cart.grind);
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.id;
  const categoryId = params.categoryId;
  const { product, loading, error } = useProduct(
    `/product/getProduct/${productId}`
  );
  const mobileVersion = useMediaQuery(theme.breakpoints.down("md"));
  if (loading) return "...";
  return (
    <Box sx={{ paddingBottom: mobileVersion ? "82px" : "0" }}>
      <Container maxWidth="xl">
        <Box pt={2}>
          <Breadcrumb categoryId={categoryId} />
        </Box>
        <Box display="flex" sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <Box flex={2}>
            <ProductImages image={product.image} images={product.images} />
          </Box>
          <Box flex={3} sx={{ pr: { md: 0.5 } }}>
            <ProductTitle name={product.name} />
            <Box display="flex" flexDirection="column">
              <Box
                display="flex"
                sx={{ flexDirection: { xs: "column", md: "row" } }}
              >
                <Box flex={2}>
                  <Box display="flex" flexDirection="column">
                    {product.product_types.map((type, index) => (
                      <ProductDynamicAttribute
                        product={product}
                        type={type}
                        key={index}
                      />
                    ))}
                    <ProductFeatures features={product.features} />
                  </Box>
                </Box>
                <ProductInfoCard product={product} productId={productId} />
              </Box>
            </Box>
          </Box>
        </Box>
        <ProductComments description={product.description} />
      </Container>
      <ProductInfoCardMobile product={product} productId={productId} />
    </Box>
  );
}

export default Product;
