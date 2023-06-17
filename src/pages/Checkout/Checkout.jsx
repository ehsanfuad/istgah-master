import {
  Box,
  Container,
  Divider,
  Grid,
  InputBase,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../Theme";
import BrandTitle from "./components/BrandTitle";
import CheckoutStepper from "./components/CheckoutStepper";
import CheckoutPrice from "./components/CheckoutPrice";
import CheckoutPriceMobile from "./components/CheckoutPriceMobile";
import AddressCard from "./components/AddressCard";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import useDraggableContainer from "../../hooks/useDraggableContainer ";

function Checkout() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const [showCode, setShowCode] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { containerRef, handleMouseDown, handleTouchStart } =
    useDraggableContainer();
  const handleOnClickCode = () => {
    setShowCode(true);
  };
  const orders = [
    {
      id: 1235,
      date: "20 اردیبهشت 1402",
      price: "20,000",
      refId: 123513513,
      products: [
        {
          id: 1,
          specialSale: true,
          imgUrl:
            "https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
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
      ],
    },
  ];
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{ paddingBottom: "100px" }}
          display="flex"
          flexDirection="column"
          py={biggerThanMd ? 3 : 0}
        >
          {/* header */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            pt={2}
            border={biggerThanMd ? 1 : 0}
            borderColor={theme.palette.grey[300]}
            borderRadius={2}
          >
            <BrandTitle />
            <Box width="100%" py={4}>
              <CheckoutStepper />
            </Box>
          </Box>
          <Box
            pt={2}
            display="flex"
            gap={2}
            flexDirection={biggerThanMd ? "row" : "column"}
          >
            <Box flex={3} display="flex" flexDirection="column" gap={2}>
              {/* address */}
              <Box
                display="flex"
                flexDirection="column"
                border={biggerThanMd ? 1 : 0}
                p={biggerThanMd ? 2 : 0}
                py={3}
                borderRadius={2}
                borderColor={theme.palette.grey[300]}
                height="fit-content"
              >
                <AddressCard />
              </Box>
              <Divider sx={{ display: biggerThanMd ? "none" : "block" }} />
              {/* code takhfif */}
              <Box
                display="flex"
                flexDirection={showCode ? "column" : "row"}
                justifyContent="space-between"
                border={biggerThanMd ? 1 : 0}
                p={biggerThanMd ? 2 : 0}
                pb={showCode ? 2 : 0}
                py={3}
                borderRadius={2}
                borderColor={theme.palette.grey[300]}
                height="fit-content"
              >
                <Typography fontSize="0.9rem">کد تخفیف</Typography>
                <Box
                  mt={showCode ? 2 : 0}
                  sx={{ cursor: "pointer" }}
                  onClick={handleOnClickCode}
                >
                  <Typography
                    fontSize="0.9rem"
                    color={theme.palette.primary.light}
                    display={showCode ? "none" : "block"}
                  >
                    افزودن کد تخفیف +
                  </Typography>
                  <Box display={showCode ? "block" : "none"}>
                    <Box
                      component="form"
                      sx={{
                        p: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        width: biggerThanMd ? "300px" : "100%",
                        border: 1,
                        borderRadius: 2,
                        borderColor: theme.palette.grey[300],
                      }}
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1, fontSize: "0.8rem" }}
                        placeholder="افزودن کد تخفیف"
                      />
                      <Typography
                        fontSize="0.9rem"
                        px={2}
                        color={theme.palette.primary.light}
                      >
                        ثبت
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ display: biggerThanMd ? "none" : "block" }} />
              {/* order details */}
              <Box
                display="flex"
                flexDirection="column"
                border={biggerThanMd ? 1 : 0}
                p={biggerThanMd ? 2 : 0}
                py={3}
                borderRadius={2}
                borderColor={theme.palette.grey[300]}
                height="fit-content"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  onClick={() => setShowDetails(!showDetails)}
                  width="fit-content"
                  sx={{ cursor: "pointer" }}
                >
                  <Typography>خلاصه سفارش</Typography>
                  <BiChevronDown
                    style={{ display: showDetails ? "none" : "block" }}
                    size={22}
                    color={theme.palette.grey[700]}
                  />
                  <BiChevronUp
                    style={{ display: showDetails ? "block" : "none" }}
                    size={22}
                    color={theme.palette.grey[700]}
                  />
                  <Box
                    p={0.5}
                    bgcolor={theme.palette.grey[200]}
                    borderRadius={3}
                  >
                    <Typography fontSize="0.7rem">2 کالا</Typography>
                  </Box>
                </Box>
                <Typography fontSize="0.7rem" variant="subtitle1">
                  ارسال با پست - هزینه ارسال : ۱۹,۰۰۰
                </Typography>
                <Box display={showDetails ? "flex" : "none"} mt={2}>
                  <div
                    className="scroll-container"
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    style={{ paddingBottom: "1rem" }}
                  >
                    <div className="scroll-wrapper">
                      {orders[0].products.map((product, index) => (
                        <Box
                          maxWidth="116px"
                          flex={1}
                          display="flex"
                          flexDirection="column"
                          position="relative"
                        >
                          <img src={product.imgUrl} width="100px" />
                          <Box
                            bottom="0"
                            left="0"
                            position="absolute"
                            borderRadius={1}
                            width="20px"
                            height="20px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ backgroundColor: "rgb(211,211,211,0.5)" }}
                          >
                            {1}
                          </Box>
                        </Box>
                      ))}
                    </div>
                  </div>
                </Box>
              </Box>
              <Divider sx={{ display: biggerThanMd ? "none" : "block" }} />
            </Box>
            <Box
              flex={1}
              border={biggerThanMd ? 1 : 0}
              borderRadius={2}
              pt={biggerThanMd ? 2 : 0}
              borderColor={theme.palette.grey[300]}
              position="sticky"
              top={10}
              height="fit-content"
            >
              <CheckoutPrice itemNumber={3} />
            </Box>
          </Box>
        </Box>
      </Container>
      {/* button pardakht mobile */}
      <Box
        position="fixed"
        bgcolor="#fafafa"
        sx={{
          width: "100%",
          height: "82px",
          zIndex: 1000,
          bottom: 0,
          boxShadow: "0 1px 5px rgb(0 0 0 / 20%)",
          borderTop: "1px solid #D3D3D3",
        }}
        display={biggerThanMd ? "none" : "block"}
      >
        <CheckoutPriceMobile />
      </Box>
    </>
  );
}

export default Checkout;
