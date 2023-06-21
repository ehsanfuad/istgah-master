import { Typography, Box, Grid, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./HomeCats.scss";
import useFetch from "../../hooks/useFetch";
import LazyImage from "../LazyImage/LazyImage";

const Cat = ({ image, name, slug }) => {
  // console.log("imageUrl", process.env.REACT_APP_UPLOAD_URL + image);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <LazyImage
        imageUrl={process.env.REACT_APP_UPLOAD_URL + image}
        width={100}
        height={100}
      />
      {/* <img
        src={process.env.REACT_APP_UPLOAD_URL + image}
        alt={name}
        style={{ width: "80%" }}
        loading="lazy"
      /> */}
      <Typography
        variant="body1"
        textAlign="center"
        fontSize="0.7rem"
        className="line-clamp"
      >
        {name}
      </Typography>
    </Box>
  );
};
function HomeCats() {
  const { res, loading, error } = useFetch(`/category/getAll`);
  if (loading) return "در حال بارگذاری";
  let categories = res.data;
  return (
    <Box display="flex" flexDirection="column" gap={1} alignItems="center">
      <Box mb={3}>
        <Typography variant="h6">دسته بندی های فروشگاه</Typography>
      </Box>
      <Box width="100%">
        <Grid container direction="row" rowSpacing={3} justifyContent="center">
          {categories.map((category, index) => {
            if (category.parentId === 0) {
              return (
                <Grid item xs={4} lg={2} key={index}>
                  <Link
                    to={`/search/${category.slug}`}
                    sx={{ textUnderlineOffset: "7px" }}
                    component={RouterLink}
                    underline="none"
                    color="black"
                  >
                    <Cat image={category.parentImage} name={category.name} />
                  </Link>
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default HomeCats;
