import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../../../Theme";

const handleProgress = (orderstate) => {
  switch (orderstate) {
    case "paid":
      return {
        title: "پرداخت شده",
        color: "#036aa1",
        percent: 50,
        backgroundColor: "#f0f9ff",
        fontColor: "#172554",
      };
      break;
    case "delivered":
      return {
        title: "تحویل مرسوله به مشتری",
        color: "#15803d",
        percent: 100,
        backgroundColor: "#ecfdf5",
        fontColor: "#052e16",
      };
    case "canceled":
      return {
        title: "لغو شده",
        color: "#e80505",
        percent: 100,
        backgroundColor: "#fff1f2",
        fontColor: "#4c0519",
      };
    default:
      break;
  }
};

const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, orderstate }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: handleProgress(orderstate).color,
    },
  })
);

function ProgressBar({ orderstate }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="start"
      gap={1}
      bgcolor={biggerThanMd ? "" : handleProgress(orderstate).backgroundColor}
      px={1}
      py={2}
      borderRadius={2}
    >
      <Typography
        variant="subtitle1"
        color={handleProgress(orderstate).fontColor}
      >
        {handleProgress(orderstate).title}
      </Typography>
      <BorderLinearProgress
        variant="determinate"
        value={handleProgress(orderstate).percent}
        orderstate={orderstate}
      />
    </Box>
  );
}

export default ProgressBar;
