import { Box, Divider, Menu, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  BsThreeDotsVertical,
  BsSignpost2,
  BsEnvelope,
  BsTelephone,
} from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { theme } from "../../../../Theme";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import usePostData from "../../../../hooks/usePostData";
import { useDispatch, useSelector } from "react-redux";
import { getAddressId, removeAddress } from "../../../../store/addressReducer";

function AddressCard({
  address,
  state,
  postalCode,
  mobile,
  name,
  id,
  handleOpenMap,
  setLocation,
  lat,
  long,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { result, error, isLoading, postData, statusRequset } = usePostData();
  // useEffect(() => {
  //   if (result?.data?.id === id) {
  //     window.location.reload(false);
  //   }
  // }, [result != null]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    postData(`/addresses/${id}`, null, "DELETE");
    dispatch(removeAddress(id));
    handleClose();
  };
  const handleEdit = () => {
    dispatch(getAddressId(id));
    let latLong = {
      lat: lat,
      lng: long,
    };
    setLocation(latLong);
    handleOpenMap();
    handleClose();
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
        <MenuItem onClick={handleEdit}>
          <Box display="flex" alignItems="center" gap={1}>
            <FaEdit color="green" />
            <Typography>ویرایش</Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
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
