import { Box, Typography } from "@mui/material";
import React from "react";

function DynamicPropCart({ name, id, property }) {
  return (
    <Box display={property ? "flex" : "none"} alignItems="center" gap={1}>
      {property ? (
        <>
          <Typography variant="body2" fontSize="0.8rem">
            {name}
          </Typography>
          {id === "color" ? (
            <Box
              borderRadius={5}
              bgcolor={property?.value}
              width="15px"
              height="15px"
            ></Box>
          ) : null}
        </>
      ) : null}
      <Typography variant="subtitle2">{property?.name}</Typography>
    </Box>
  );
}

export default DynamicPropCart;
