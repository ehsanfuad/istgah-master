import { Box, Typography } from "@mui/material";
import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { theme } from "../../../../Theme";
import OrderCard from "./OrderCard";
function OrderCards({ tabId }) {
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
      ],
    },
  ];

  return (
    <>
      {orders.map((order, index) => (
        <OrderCard order={order} tabId={tabId} key={index} />
      ))}
    </>
  );
}

export default OrderCards;
