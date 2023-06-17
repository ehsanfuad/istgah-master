import React from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

function Search() {
  const params = useParams();
  const categorySlug = params.category;
  const categoryId = params.id;
  //tetst
  return <Container maxWidth="xl"></Container>;
}

export default Search;
