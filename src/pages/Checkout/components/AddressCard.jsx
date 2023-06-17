import { Box, Divider, Modal, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { theme } from "../../../Theme";
import { MdClose } from "react-icons/md";
import { BiChevronLeft } from "react-icons/bi";
import ModalMobile from "../../../components/ModalMobile/ModalMobile";
import ModalContainer from "../../../components/ModalContainer/ModalContainer";
import ChangeAddress from "../../Profile/Addresses/components/ChangeAddress";
function Title({ handleClose }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
    >
      <Typography>انتخاب آدرس</Typography>
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
function AddressCard() {
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
              جمالزاده، خ. کارگر شمالی، نرسیده به بل کشاورز، خ. محمد علی صدوقی
            </Typography>
            <Typography
              fontSize="0.8rem"
              variant="subtitle1"
              color={theme.palette.grey[700]}
            >
              امیر حسین خیام باشی
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
              content={<ChangeAddress handleClose={handleClose} />}
            />
          </>
        </Modal>
      ) : (
        <ModalMobile
          open={open}
          setOpen={setOpen}
          titleComponent={<Title />}
          contentComponent={<ChangeAddress />}
        />
      )}
    </>
  );
}

export default AddressCard;
