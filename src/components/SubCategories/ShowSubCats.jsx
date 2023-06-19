import { Box } from "@mui/material";
import React from "react";
import SubCatCart from "./SubCatCart";
import useFetch from "../../hooks/useFetch";

function ShowSubCats({ categoryId }) {
  const { res, loading, error } = useFetch(
    `/category/getChildren/${categoryId}`
  );

  if (loading) return "...";
  const subCategories = res.data;
  console.log(subCategories);
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        display: "flex",
        whiteSpace: "nowrap",
      }}
    >
      {subCategories.map((subCat, index) => (
        <SubCatCart subCat={subCat} key={index} />
      ))}
    </Box>
  );
}

export default ShowSubCats;
