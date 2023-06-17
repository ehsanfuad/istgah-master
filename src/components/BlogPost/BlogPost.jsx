import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { BiChevronLeft } from "react-icons/bi";
import { theme } from "../../Theme";

function BlogPost() {
  const articles = [
    {
      title: "بررسی اسپیکر بلوتوثی انکر Select 2؛ مکعب دوست‌داشتنی",
      image:
        "https://www.digikala.com/mag/wp-content/uploads/2023/04/01.25-7-610x380.jpg",
      link: "",
    },
    {
      title: "۳ راه حل برای جلوگیری از ایجاد گلوگاه حرارتی در کارت‌های گرافیک",
      image:
        "https://www.digikala.com/mag/wp-content/uploads/2023/04/gpu-00-610x380.jpg",
      link: "",
    },
    {
      title: "چگونه مشکلات هات اسپات در آیفون را حل کنیم؟",
      image:
        "https://www.digikala.com/mag/wp-content/uploads/2023/04/Untitled-2-11-610x380.jpg",
      link: "",
    },
    {
      title: "بررسی ماوس گرین GM606-RGB؛ بهترین ماوس گرین",
      image:
        "https://www.digikala.com/mag/wp-content/uploads/2023/04/01.18-141-610x380.jpg",
      link: "",
    },
  ];
  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="subtitle1" fontSize="0.8">
          خواندنی‌ها
        </Typography>
        <Button variant="text" endIcon={<BiChevronLeft />} color="primary">
          مطالب بیشتر
        </Button>
      </Box>
      <Grid container spacing={2}>
        {articles.map((article, index) => (
          <Grid item lg={3} md={3} xs={12} key={index}>
            <Box
              border={1}
              borderColor={theme.palette.grey[400]}
              borderRadius={2}
              overflow="hidden"
              display="flex"
              flexDirection="column"
              minHeight="100%"
            >
              <img
                style={{ width: "100%" }}
                src={article.image}
                alt={article}
              />
              <Box pt={0.5} pb={2} px={1}>
                <Typography variant="subtitle1" fontSize="0.8rem">
                  {article.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BlogPost;
