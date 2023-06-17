import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import {
  BsThreeDotsVertical,
  BsSignpost2,
  BsEnvelope,
  BsTelephone,
} from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { theme } from "../../../../Theme";

function AddressCard({ address, state, postalCode, mobile, name }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="start"
      justifyContent="space-between"
    >
      <Box flexGrow={1} display="flex" flexDirection="column" gap={1}>
        <Typography>{address}</Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" flexDirection="column" gap={1}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={1}
              color={theme.palette.grey[600]}
            >
              <BsSignpost2 />
              <Typography>{state}</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={1}
              color={theme.palette.grey[600]}
            >
              <BsEnvelope />
              <Typography>{postalCode}</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={1}
              color={theme.palette.grey[600]}
            >
              <BsTelephone />
              <Typography>{mobile}</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={1}
              color={theme.palette.grey[600]}
            >
              <FiUser />
              <Typography>{name}</Typography>
            </Box>
          </Box>
          {/* <Box>map</Box> */}
        </Box>
        <Divider />
      </Box>
      <Box>
        <BsThreeDotsVertical size={22} />
      </Box>
    </Box>
  );
}

export default AddressCard;
