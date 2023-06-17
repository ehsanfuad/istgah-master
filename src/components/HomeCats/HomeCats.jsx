import { Typography, Box, Grid, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./HomeCats.scss";
import useFetch from "../../hooks/useFetch";

let categories = [
  {
    img: "https://dkstatics-public.digikala.com/digikala-categories/5d89d5b168e5ed079d619181e849cc737ec42c8d_1678698730.png?x-oss-process=image/format,webp",
    name: "ابزار ،لوارم ساختمانی و صنعتی",
    path: "test",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-categories/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1662362431.png?x-oss-process=image/format,webp",
    name: "موبایل",
    path: "test",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png?x-oss-process=image/format,webp",
    name: "کالای دیجیتال",
    path: "test",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png?x-oss-process=image/format,webp",
    name: "مد و پوشاک",
    path: "test",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png?x-oss-process=image/format,webp",
    name: "کالاهای سوپرمارکتی",
    path: "test",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png?x-oss-process=image/format,webp",
    name: "محصولات بومی و محلی",
    path: "test",
  },
  {
    img: "https://dkstatics-public.digikala.com/digikala-categories/4e985adcf61dd54d4d8abe725a62ba3990ea1eb1_1678698550.png?x-oss-process=image/format,webp",
    name: "خودرو و موتور سیکلت",
    path: "test",
  },
];
const Cat = ({ image, name, slug }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <img
        src={process.env.REACT_APP_UPLOAD_URL + image}
        alt={name}
        style={{ width: "80%" }}
        loading="lazy"
      />
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
  categories = res.data;
  return (
    <Box display="flex" flexDirection="column" gap={1} alignItems="center">
      <Box mb={3}>
        <Typography variant="h6">دسته بندی های فروشگاه</Typography>
      </Box>
      <Box>
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
