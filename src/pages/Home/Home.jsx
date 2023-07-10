import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Slider from "../../components/Slider/Slider";
import InfoCard from "../../components/InfoCard/InfoCard";
import HomeCats from "../../components/HomeCats/HomeCats";
import RelativeProducts from "../../components/RelativeProducts/RelativeProducts";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import BlogPost from "../../components/BlogPost/BlogPost";

function Home() {
  return (
    <div>
      {/* <Slider /> */}
      <Container maxWidth="xl">
        <Box my={2}>
          <InfoCard />
        </Box>
        <Box my={2}>
          <HomeCats />
        </Box>
        <Box my={2}>
          <HomeProducts />
        </Box>
        <Box my={3}>
          {/* <RelativeProducts /> */}
          <BlogPost />
        </Box>
      </Container>
    </div>
  );
}

export default Home;
