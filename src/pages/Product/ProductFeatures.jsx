import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function ProductFeatures({ features }) {
  return (
    <Box>
      <Typography fontSize="18px" variant="body1" component="p">
        ویژگی ها
      </Typography>
      <Box mt={2} display="flex" flexDirection="column">
        {features.map((feature, index) => (
          <Box mb={1.5} key={index} display="flex">
            <Typography
              sx={{ fontSize: { xs: "12px", md: "15px" } }}
              color="grey.600"
            >{`• ${feature.key} :`}</Typography>
            <Typography
              sx={{ marginRight: "3px", fontSize: { xs: "14px", md: "17px" } }}
            >{`${feature.value}`}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ProductFeatures;
