import { Box, Typography } from "@mui/material";
import React from "react";
import { MdClose } from "react-icons/md";
import { theme } from "../../../../Theme";

function AddressHeader({ handleCloseMap }) {
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Box flexGrow={1} display="flex" flexDirection="column" gap={1}>
        <Box width="fit-content">
          <Typography>آدرس جدید</Typography>
        </Box>
        <Box width="fit-content">
          <Typography fontSize="0.8rem" color={theme.palette.grey[500]}>
            موقعیت مکانی آدرس را مشخص کنید
          </Typography>
        </Box>
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <MdClose size={22} onClick={() => handleCloseMap()} />
      </Box>
    </Box>
  );
}

export default AddressHeader;
