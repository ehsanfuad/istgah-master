import {
  Box,
  Divider,
  LinearProgress,
  Typography,
  styled,
  useMediaQuery,
  Container,
} from "@mui/material";
import React from "react";
import BackButton from "../../components/BackButton";
import { theme } from "../../../../Theme";
import TitleContent from "./TitleContent";
import Dot from "../../components/Dot";
import ProgressBar from "./ProgressBar";
import ProductOrderDetails from "./ProductOrderDetails";

const StyledBox = styled(Box)(({ theme, pd, gp }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
  },
  gap: gp,
  padding: pd,
}));
const products = [
  {
    id: 1,
    specialSale: true,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title:
      "گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت",
    stockNumber: 3,
    rate: "۴.۳",
    price: 5000000,
    discountedPrice: 3304355,
    discount: 3,
    category: 6,
    quantity: 1,
  },
  {
    id: 2,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/90fc87b40eb1249673b9d0089aca514443a04edf_1619112519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "قاب مدل سیلیکونی مناسب برای گوشی موبایل اپل iphone ۱۲ pro",
    stockNumber: 10,
    rate: "۴",
    price: 1000000,
    discountedPrice: 55000,
    discount: null,
    category: 9,
    quantity: 1,
  },
  {
    id: 3,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/90fc87b40eb1249673b9d0089aca514443a04edf_1619112519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "قاب صورتی",
    stockNumber: 10,
    rate: "۴",
    price: 4700000,
    discountedPrice: 350000,
    discount: null,
    category: 12,
    quantity: 1,
  },
];
function OrderDetails() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box display="flex" flexDirection="column">
      <Box p={2}>
        <BackButton title="جزئیات سفارش" backUrl="/profile/orders" />
      </Box>
      <Divider flexItem />
      {/* پیگیری سفارش تاریخ ثبت */}
      <StyledBox pd="1rem" gp="1rem">
        <TitleContent title={"کد پیگیری سفارش"} content={"۳۳۲۳۰۲۱۴۰"} />
        <Dot />
        <TitleContent title={"تاریخ ثبت سفارش"} content={"یکشنبه ۱۵ تیر "} />
      </StyledBox>
      <Divider variant="middle" flexItem />
      {/* تحویل گیرنده تاریخ ثبت */}
      <StyledBox pd="1rem" gp="1rem">
        <TitleContent title={"تحویل گیرنده"} content={"فواد صدر"} />
        <Dot />
        <TitleContent title={"شماره موبایل"} content={"۰۹۰۳۰۴۸۳۳۴۵"} />
      </StyledBox>
      {/* آدرس */}
      <Box display="flex" flexDirection={"column"} gap={0.5} px={2} pb={2}>
        <TitleContent
          title={"آدرس"}
          content={"امیر آباد، خ. کارگر شمالی، خ. فرشی مقدم"}
          direction="column"
        />
      </Box>
      <Divider flexItem />
      {/* مبلغ نوع پرداخت */}
      <StyledBox pd="1rem" gp="1rem">
        <TitleContent title={"مبلغ"} content={"۳۰۱,۵۹۰ تومان"} />
        <Dot />
        <TitleContent title={"نوع پرداخت"} content={"پرداخت اینترنتی"} />
      </StyledBox>
      <Divider flexItem />
      {/* زمان تحویل - نمایش محصولات */}
      <Box
        border={biggerThanMd ? 1 : 0}
        borderRadius={2}
        borderColor={theme.palette.grey[300]}
        m={biggerThanMd ? 2 : 0}
        display="flex"
        flexDirection="column"
      >
        <Box display="flex" flexDirection={biggerThanMd ? "row" : "column"}>
          <Box flex={1} display="flex" flexDirection="column" gap={2} p={2}>
            {/* نوع ارسال -زمان تحویل */}
            <TitleContent title={"ارسال"} content={"پست"} />
            <TitleContent
              title={"زمان تحویل"}
              content={"یکشنبه ۲۴ اردیبهشت بازه ۳۲-۱۵  "}
            />
            {/* هزینه ارسال مبلغ مرسوله */}
            <StyledBox gap={2}>
              <TitleContent title={"هزینه ارسال"} content={"رایگان"} />
              <Dot />
              <TitleContent title={"مبلغ مرسوله"} content={"۲۸۲,۵۹۰ تومان"} />
            </StyledBox>
          </Box>
          {/* progressbar - پیگیری مرسوله */}
          <Box flex={1} order={biggerThanMd ? 0 : -1} p={2}>
            <ProgressBar orderstate="paid" />
          </Box>
        </Box>
      </Box>
      <Divider variant="middle" />
      <Box>
        {products.map((product, index) => (
          <Box mt={3} key={index}>
            <Container maxWidth="xl">
              <ProductOrderDetails product={product} key={index} border={0} />
            </Container>
            <Divider variant="middle" />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default OrderDetails;
