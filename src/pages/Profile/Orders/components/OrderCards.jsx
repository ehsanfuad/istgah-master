import { Box, Typography } from "@mui/material";
import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { theme } from "../../../../Theme";
import OrderCard from "./OrderCard";
function OrderCards({ tabId, orders }) {
  return (
    <>
      {orders.map((order, index) => (
        <OrderCard
          order={order.attributes}
          orderId={order.id}
          tabId={tabId}
          key={index}
        />
      ))}
    </>
  );
}

export default OrderCards;
