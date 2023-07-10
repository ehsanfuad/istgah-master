import React from "react";
import { Box, Container, Grid, Link } from "@mui/material";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ShowSubCats from "../../components/SubCategories/ShowSubCats";
import useFetch from "../../hooks/useFetch";
import { Link as RouterLink } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

function Search() {
  const params = useParams();
  const categorySlug = params.category;
  const categoryId = params.id;
  let products = "";
  const { res, loading, error } = useFetch(`/product/getAll/${categoryId}`);
  if (loading) return "...";
  console.log(res);
  products = res;
  return (
    <Container maxWidth="xl">
      <Box mt={3} pb={1}>
        <Breadcrumb categoryId={categoryId} />
      </Box>
      <Box>
        <ShowSubCats categoryId={categoryId} />
      </Box>
      <Box>
        <Grid container>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
              <Link
                underline="none"
                color="text.secondary"
                component={RouterLink}
                to={`/product/${product.id}/${categoryId}`}
                target="_blank"
              >
                <ProductCard product={product} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Search;
