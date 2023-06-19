import React from "react";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ShowSubCats from "../../components/SubCategories/ShowSubCats";

function Search() {
  const params = useParams();
  const categorySlug = params.category;
  const categoryId = params.id;

  return (
    <Container maxWidth="xl">
      <Box mt={3} pb={1}>
        <Breadcrumb categoryId={categoryId} />
      </Box>
      <ShowSubCats categoryId={categoryId} />
    </Container>
  );
}

export default Search;
