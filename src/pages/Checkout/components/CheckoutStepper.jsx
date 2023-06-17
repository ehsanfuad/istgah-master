import React from "react";
import { Box, Step, StepLabel, Stepper, useMediaQuery } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import { theme } from "../../../Theme";

function CheckoutStepper() {
  const steps = ["پرداخت", "سبد خرید"];
  const labelStyles = {
    fontFamily: "iransansBold",
  };

  const activeLabelStyles = {
    ...labelStyles,
    // Additional styles for the active label
    fontFamily: "iransansLight",
  };
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const icons = [
    <IoWalletOutline
      size={biggerThanMd ? 35 : 25}
      color={theme.palette.primary.main}
    />,
    <FiShoppingCart
      size={biggerThanMd ? 35 : 25}
      color={theme.palette.grey[500]}
    />,
  ];
  return (
    <Stepper
      sx={{ direction: "initial" }}
      alternativeLabel
      activeStep={0}
      orientation="horizontal"
    >
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel
            StepIconComponent={() => icons[index]}
            style={index === 1 ? activeLabelStyles : labelStyles}
            color={index === 1 ? "blue" : "red"}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default CheckoutStepper;
