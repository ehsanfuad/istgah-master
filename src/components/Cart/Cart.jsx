import { Box, Popover, Typography, Link, Button, Divider } from "@mui/material";
import React from "react";
import useClasses from "../../hooks/useClasses";
import { Link as RouterLink } from "react-router-dom";
import { theme } from "../../Theme";
import { FiChevronLeft } from "react-icons/fi";
import "./Cart.scss";
import ProductCard from "./ProductCard";

const allProducts = [
  {
    id: 1,
    specialSale: true,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    images: [
      "https://dkstatics-public.digikala.com/digikala-products/73409683bedd334608bd3aff7c048fcddc3094ed_1653804651.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      "https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1653804655.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      "https://dkstatics-public.digikala.com/digikala-products/081fcfb278d1dd56bdf49cde4bc60e80d7fd1d70_1653804657.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      "https://dkstatics-public.digikala.com/digikala-products/195bd99289c288cbb927fe9b9d659275eefeae71_1631704698.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      "https://cdn.wallpapersafari.com/29/55/EFmg6T.jpg",
    ],
    title:
      "گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت",
    stockNumber: 3,
    rate: "۴.۳",
    price: "۵۰,۰۰۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: 3,
    category: 6,
  },
  {
    id: 2,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/90fc87b40eb1249673b9d0089aca514443a04edf_1619112519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "قاب مدل سیلیکونی مناسب برای گوشی موبایل اپل iphone ۱۲ pro",
    stockNumber: 10,
    rate: "۴",
    price: "۵۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 9,
  },
  {
    id: 3,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/90fc87b40eb1249673b9d0089aca514443a04edf_1619112519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "قاب صورتی",
    stockNumber: 10,
    rate: "۴",
    price: "۵۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 12,
  },
  {
    id: 4,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/90fc87b40eb1249673b9d0089aca514443a04edf_1619112519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "قاب آبی",
    stockNumber: 10,
    rate: "۴",
    price: "۵۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 13,
  },
  {
    id: 5,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/b37fec818d72ef88ab5bdd21ffa3d3e2be4f4a70_1642526181.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "ماکارونی پنه ریگاته زر ماکارون مقدار 500 گرم",
    stockNumber: 2,
    rate: "۴",
    price: "۵۳,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 2,
  },
  {
    id: 6,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/117515968.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "تی شرت مردانه کد S179",
    stockNumber: 20,
    rate: "۴",
    price: "۱۰۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 3,
  },
  {
    id: 7,
    specialSale: false,
    imgUrl:
      "https://dkstatics-private.digikala.com/digikala-products/207796d1e23a809407f636646336a76e5fbe86f6_1609055168.jpg?OSSAccessKeyId=LTAIPClJziKGRUZJ&Expires=1920095169&Signature=EXKKP%2BXn%2FDqGWp%2BlmUhyUAQANtM%3D",
    title: "لاک ناخن گلدن رز مدل Color Expert شماره 88",
    stockNumber: 20,
    rate: "۴",
    price: "۹۳,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 4,
  },
  {
    id: 8,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/4ee7993d830bd15dcc1cc662f80148529bf36916_1619271926.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "اجاق گاز اسنوا مدل SGC5-1101N Romina Series",
    stockNumber: 20,
    rate: "۴",
    price: "۱۰,۰۰۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 15,
  },
  {
    id: 9,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/61f47d4064d911b6fb6d7cc60956369ecd552d47_1624952981.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "تبلت اپل مدل iPad Pro 12.9 inch 2021 5G ظرفیت 512 گیگابایت",
    stockNumber: 20,
    rate: "۴",
    price: "۵۲,۰۰۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 7,
  },
  {
    id: 10,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/8b992591cd7606de5eb5affe9ec8b9725c349fe3_1654514995.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "لپ تاپ 16.2 اینچ اپل مدل MacBook Pro MK193 2021",
    stockNumber: 20,
    rate: "۴",
    price: "۸۳,۸۹۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 8,
  },
  {
    id: 11,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/8b992591cd7606de5eb5affe9ec8b9725c349fe3_1654514995.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "نمونه لپ تاپ ۱",
    stockNumber: 20,
    rate: "۴",
    price: "۸۳,۸۹۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 16,
  },
  {
    id: 12,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/8b992591cd7606de5eb5affe9ec8b9725c349fe3_1654514995.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "نمونه لپ تاپ ۲",
    stockNumber: 20,
    rate: "۴",
    price: "۸۳,۸۹۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 17,
  },
];

function Cart({ setCartAnchorEl, cartAnchorEl, eventCart, isShowCart }) {
  const open = Boolean(cartAnchorEl);
  const id = open ? "simple-popover" : undefined;
  const productNumber = 1;
  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  const handleCartClick = () => {
    setCartAnchorEl(eventCart);
  };
  const styles = (theme) => ({
    popover: {
      pointerEvents: "none",
    },
    popoverContent: {
      pointerEvents: "auto",
    },
  });
  const classes = useClasses(styles);

  const CartContent = () => {
    return (
      <Popover
        id={id}
        open={open}
        anchorEl={cartAnchorEl}
        onClose={handleCartClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className={classes.popover}
        classes={{
          paper: classes.popoverContent,
        }}
        disdisablerestorefocus="true"
        PaperProps={{
          onMouseEnter: handleCartClick,
          onMouseLeave: handleCartClose,
        }}
      >
        <Box
          pt={1}
          display="flex"
          flexDirection="column"
          width="400px"
          height="500px"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height="30px"
            px={2}
          >
            <Typography
              fontSize="0.8rem"
              color={theme.palette.grey[700]}
            >{`${productNumber} کالا`}</Typography>
            <Link to="/cart" component={RouterLink} underline="none">
              <Box display="flex" alignItems="center">
                <Typography fontSize="0.8rem">مشاهده‌ی سبد خرید</Typography>
                <FiChevronLeft />
              </Box>
            </Link>
          </Box>
          <Box sx={{ overflowY: "scroll", height: "390px" }} px={2}>
            {allProducts.slice(0, 4).map((product, index) => (
              <ProductCard product={product} key={index} border={1} />
            ))}
          </Box>
          <Divider flexItem />
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            height="80px"
            px={2}
          >
            <Box display="flex" flexDirection="column">
              <Typography color={theme.palette.grey[600]} variant="subtitle2">
                مبلغ قابل پرداخت
              </Typography>
              <Typography fontSize={"1.25rem"}> ۱۳،۸۰۰،۰۰۰ تومان</Typography>
            </Box>
            <Button
              sx={{ paddingY: "0.7rem" }}
              variant="contained"
              color="primary"
            >
              ورود و ثبت سفارش
            </Button>
          </Box>
        </Box>
      </Popover>
    );
  };
  return isShowCart ? <CartContent /> : null;
}

export default Cart;
