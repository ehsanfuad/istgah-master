import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  Link,
} from "@mui/material";
import React from "react";
import { theme } from "../../Theme";
import { BiChevronLeft } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
function GridProducts({ title, products, category }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      p={1}
      mb={6}
      sx={{ mb: { xs: 6, md: 0 } }}
      display="flex"
      flexDirection="column"
      gap={1.4}
      borderBottom={biggerThanMd ? 0 : 1}
      borderColor={theme.palette.grey[400]}
    >
      <Box display="flex" flexDirection="column" gap={0.6}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography
          fontSize="0.7rem"
          variant="subtitle2"
          color={theme.palette.grey[500]}
        >
          براساس فروش کالا
        </Typography>
      </Box>
      <Grid container>
        {products.map((product, index) => (
          <Grid item xs={6} lg={6} key={index}>
            <Link
              to={`/search/${product.id}`}
              sx={{ textUnderlineOffset: "7px" }}
              component={RouterLink}
              underline="none"
              color="black"
            >
              <Box
                border={1}
                p={1}
                m={0.2}
                borderRadius={1}
                borderColor={theme.palette.grey[300]}
              >
                <img
                  style={{ width: "100%" }}
                  src={product.imgUrl}
                  alt={product.title}
                />
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center">
        <Link
          to={`/search/${category}`}
          sx={{ textUnderlineOffset: "7px" }}
          component={RouterLink}
          underline="none"
          color="black"
        >
          <Button variant="text" endIcon={<BiChevronLeft />} color="primary">
            مشاهده
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default GridProducts;
