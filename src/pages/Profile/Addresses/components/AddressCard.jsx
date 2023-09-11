import { Box, Divider, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  BsThreeDotsVertical,
  BsSignpost2,
  BsEnvelope,
  BsTelephone,
} from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { theme } from "../../../../Theme";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function AddressCard({ address, state, postalCode, mobile, name, id }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    console.log("delete");
  };

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
        </Box>
        <Divider />
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <BsThreeDotsVertical size={22} onClick={handleClick} />
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Box display="flex" alignItems="center" gap={1}>
            <FaEdit color="green" />
            <Typography>ویرایش</Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Box display="flex" alignItems="center" gap={1}>
            <FaTrashAlt color="red" />
            <Typography>حذف</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default AddressCard;
