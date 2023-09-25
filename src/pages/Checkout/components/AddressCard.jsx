import { Box, Divider, Modal, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { theme } from "../../../Theme";
import { MdClose } from "react-icons/md";
import { BiChevronLeft } from "react-icons/bi";
import ModalMobile from "../../../components/ModalMobile/ModalMobile";
import ModalContainer from "../../../components/ModalContainer/ModalContainer";
import ChangeAddress from "../../Profile/Addresses/components/ChangeAddress";
import { useSelector } from "react-redux";
function Title({ handleClose }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
    >
      <Typography component="span">انتخاب آدرس</Typography>
      <Box
        display={biggerThanMd ? "block" : "none"}
        sx={{ cursor: "pointer" }}
        onClick={() => handleClose()}
      >
        <MdClose size={22} />
      </Box>
    </Box>
  );
}
function AddressCard({ user }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  //open select address
  const [open, setOpen] = useState(false);
  const handleOnclick = () => {
    setOpen(true);
  };
  //close select address
  const handleClose = () => {
    setOpen(false);
  };

  const userName = `${user.firstName} ${user.lastName}`;
  const selectedAddressId = useSelector((state) => state.address.id);
  const addresses = useSelector((state) => state.address.addresses);
  const userSelectedAddress = addresses.find(
    (address, index) => address.id === selectedAddressId
  );

  useEffect(() => {
    handleClose();
  }, [selectedAddressId]);

  return (
    <>
      <Box display="flex" flexDirection="column">
        <Box display="flex" gap={1}>
          <Box display="flex" alignItems="center">
            <IoLocationOutline size={25} />
          </Box>
          <Box display="flex" flexDirection="column" gap={0}>
            <Typography
              fontSize="0.7rem"
              variant="subtitle1"
              color={theme.palette.grey[700]}
            >
              آدرس تحویل سفارش
            </Typography>
            <Typography
              fontSize="0.8rem"
              color={theme.palette.grey[900]}
              lineHeight={2}
            >
              {userSelectedAddress?.address}
            </Typography>
            <Typography
              fontSize="0.8rem"
              variant="subtitle1"
              color={theme.palette.grey[700]}
            >
              {userName}
            </Typography>
          </Box>
        </Box>
        <Box width="100%" display="flex" justifyContent="end">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            color={theme.palette.primary.light}
            sx={{ cursor: "pointer" }}
            width="fit-content"
            onClick={() => handleOnclick()}
          >
            <Typography fontSize="0.9rem">تغییر یا ویرایش آدرس</Typography>
            <BiChevronLeft />
          </Box>
        </Box>
      </Box>
      {biggerThanMd ? (
        <Modal open={open} onClose={handleClose}>
          <>
            <ModalContainer
              title={<Title handleClose={handleClose} />}
              content={
                <ChangeAddress
                  handleClose={handleClose}
                  addresses={addresses}
                  selectedAddressId={selectedAddressId}
                  user={user}
                />
              }
            />
          </>
        </Modal>
      ) : (
        <ModalMobile
          open={open}
          setOpen={setOpen}
          titleComponent={<Title />}
          contentComponent={
            <ChangeAddress
              handleClose={handleClose}
              addresses={addresses}
              selectedAddressId={selectedAddressId}
              user={user}
            />
          }
        />
      )}
    </>
  );
}

export default AddressCard;
