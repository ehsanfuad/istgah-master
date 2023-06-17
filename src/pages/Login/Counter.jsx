import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
function Counter({ count, setCount, TIME }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    // Clear interval and reset count when component unmounts
    return () => {
      clearInterval(intervalId);
      setCount(TIME);
    };
  }, []);

  return (
    <div>
      {count > 0 ? (
        <Typography fontSize="0.8rem" color="grey">
          {Math.floor(count / 60)}:{count % 60} مانده تا دریافت مجدد کد
        </Typography>
      ) : (
        ""
      )}
    </div>
  );
}
export default Counter;
