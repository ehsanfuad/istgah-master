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
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import useFetch from "../../../../hooks/useFetch";
import Loading from "../../../../components/Loading/Loading";
import {
  convertToPersianDate,
  formatMoney,
} from "../../../../hooks/numberUtils";
import ProductCard from "../../../../components/Cart/ProductCard";

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
  const params = useParams();
  const orderId = params.id;

  const jwt = localStorage.getItem("jwt");
  let jwtErrorMessage = null;
  let userId = null;
  let order = null;
  try {
    const decoded = jwt_decode(jwt);
    userId = decoded.id;
  } catch (error) {
    jwtErrorMessage = error.message;
    console.log("error", error);
  }

  const { res, loading, error } = useFetch(
    `/order/orderDetails/${userId}/${orderId}`
  );
  console.log(res);
  if (loading) return <Loading />;
  if ((!loading && res?.error?.status > 400) || jwtErrorMessage) {
    localStorage.removeItem("jwt");
    window.location.reload(false);
  }
  order = res;

  if (!order)
    return (
      <Box p={2}>
        <BackButton title="جزئیات سفارش" backUrl="/profile/orders" />
      </Box>
    );
  return (
    <Box display="flex" flexDirection="column">
      <Box p={2}>
        <BackButton title="جزئیات سفارش" backUrl="/profile/orders" />
      </Box>
      <Divider flexItem />
      {/* پیگیری سفارش تاریخ ثبت */}
      <StyledBox pd="1rem" gp="1rem">
        <TitleContent
          title={"کد پیگیری سفارش"}
          content={order.invoiceNumber ? order.invoiceNumber : "ندارد"}
        />
        <Dot />
        <TitleContent
          title={"تاریخ ثبت سفارش"}
          content={convertToPersianDate(order.publishedAt)}
        />
      </StyledBox>
      <Divider variant="middle" flexItem />
      {/* تحویل گیرنده تاریخ ثبت */}
      <StyledBox pd="1rem" gp="1rem">
        <TitleContent title={"تحویل گیرنده"} content={order.fullName} />
        <Dot />
        <TitleContent title={"شماره موبایل"} content={order.mobile} />
      </StyledBox>
      {/* آدرس */}
      <Box display="flex" flexDirection={"column"} gap={0.5} px={2} pb={2}>
        <TitleContent
          title={"آدرس"}
          content={order.address}
          direction="column"
        />
      </Box>
      <Divider flexItem />
      {/* مبلغ نوع پرداخت */}
      <StyledBox pd="1rem" gp="1rem">
        <TitleContent
          title={"مبلغ"}
          content={`${formatMoney(order.price)} ریال`}
        />
        <Dot />
        <TitleContent title={"نوع پرداخت"} content={"پرداخت اینترنتی"} />
      </StyledBox>
      <Divider flexItem />
      {/* زمان تحویل - نمایش محصولات */}
      {/* <Box
        border={biggerThanMd ? 1 : 0}
        borderRadius={2}
        borderColor={theme.palette.grey[300]}
        m={biggerThanMd ? 2 : 0}
        display="flex"
        flexDirection="column"
      >
        <Box display="flex" flexDirection={biggerThanMd ? "row" : "column"}>
          <Box flex={1} display="flex" flexDirection="column" gap={2} p={2}>
           
            <TitleContent title={"ارسال"} content={"پست"} />
            <TitleContent
              title={"زمان تحویل"}
              content={"یکشنبه ۲۴ اردیبهشت بازه ۳۲-۱۵  "}
            />
            
            <StyledBox gap={2}>
              <TitleContent title={"هزینه ارسال"} content={"رایگان"} />
              <Dot />
              <TitleContent title={"مبلغ مرسوله"} content={"۲۸۲,۵۹۰ تومان"} />
            </StyledBox>
          </Box>
          
          <Box flex={1} order={biggerThanMd ? 0 : -1} p={2}>
            <ProgressBar orderstate="paid" />
          </Box>
        </Box>
      </Box>
      <Divider variant="middle" /> */}
      <Box>
        {order.products.map((product, index) => (
          <Box mt={3} key={index}>
            <Container maxWidth="xl">
              {/* <ProductOrderDetails product={product} key={index} border={0} /> */}
              <ProductCard
                product={product}
                key={index}
                border={1}
                counterCart={false}
              />
            </Container>
            <Divider variant="middle" />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default OrderDetails;
