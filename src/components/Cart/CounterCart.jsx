import "./Cart.scss";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../Theme";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../store/cartReducer";
import { useDispatch } from "react-redux";

function CounterCart({ product }) {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(product.quantity);
  useEffect(() => {
    setCounter(product.quantity);
  }, [product]);
  const handleDecrease = (product) => {
    if (counter > 1) {
      dispatch(
        decrementQuantity({
          id: product.id,
          color: product.color,
          grind: product.grind,
          weight: product.weight,
        })
      );
    } else {
      dispatch(
        removeItem({
          productId: product.id,
          colorId: product?.color?.id,
          grindId: product?.grind?.id,
          weightId: product?.weight?.id,
        })
      );
    }
  };
  const handleIncrease = (product) => {
    dispatch(
      incrementQuantity({
        id: product.id,
        color: product.color,
        grind: product.grind,
        weight: product.weight,
      })
    );
  };
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-around"
      border={1}
      borderColor={theme.palette.grey[300]}
      borderRadius={1}
      py={0.8}
      mx={1.5}
      mt={1}
      className="counter-box"
    >
      <Box color={theme.palette.primary.main}>
        <FaPlus size={13} onClick={() => handleIncrease(product)} />
      </Box>
      <Box>
        <Typography
          variant="subtitle1"
          className="noselect"
          color={theme.palette.primary.main}
        >
          {counter}
        </Typography>
      </Box>
      <Box color={theme.palette.primary.main}>
        {counter <= 1 ? (
          <FaTrashAlt size={13} onClick={() => handleDecrease(product)} />
        ) : (
          <FaMinus size={13} onClick={() => handleDecrease(product)} />
        )}
      </Box>
    </Box>
  );
}

export default CounterCart;
