import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../Theme";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import "./Cart.scss";
function CounterCart() {
  const [counter, setCounter] = useState(1);
  const handleMinus = (counter) => {
    setCounter(counter - 1);
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
    >
      <Box color={theme.palette.primary.main}>
        <FaPlus size={13} onClick={() => setCounter(counter + 1)} />
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
          <FaTrashAlt size={13} onClick={() => handleMinus(counter)} />
        ) : (
          <FaMinus size={13} onClick={() => handleMinus(counter)} />
        )}
      </Box>
    </Box>
  );
}

export default CounterCart;
