import {
  Box,
  Dialog,
  Divider,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { MdOutlineAddLocation } from "react-icons/md";
import useGeolocation from "../../../../hooks/useGeolocation";
import { theme } from "../../../../Theme";
import AddressModal from "./AddressModal";
import AddressDialog from "./AddressDialog";
import AddressCard from "./AddressCard";

function ChangeAddress({ handleClose }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const [openMap, setOpenMap] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { latitude, longitude } = useGeolocation();
  const [location, setLocation] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const handleOpenMap = () => {
    setOpenMap(true);
    setShowForm(false);
  };
  const handleCloseMap = () => {
    setOpenMap(false);
  };
  const handleChangeAddresses = (event) => {
    setSelectedAddress(event.target.value);
  };
  return (
    <>
      <Box display="flex" flexDirection="column">
        {/* dokme afzudan address jadid */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={biggerThanMd ? 2 : 0}
          sx={{ cursor: "pointer" }}
          onClick={() => handleOpenMap()}
        >
          <Box display="flex" alignItems="center" py={3}>
            <Box>
              <MdOutlineAddLocation size={22} />
            </Box>
            <Typography>افزودن آدرس جدید</Typography>
          </Box>
          <Box>
            <BiChevronLeft size={22} />
          </Box>
        </Box>
        <Divider />
        <Box px={biggerThanMd ? 2 : 0}>
          {/* namaieshe address ha va entekhab */}
          <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              name="radio-addresses"
              value={selectedAddress}
              onChange={handleChangeAddresses}
            >
              <Box
                display="flex"
                alignItems="start"
                justifyContent="space-between"
              >
                <Box>
                  <FormControlLabel
                    sx={{ m: 0 }}
                    value={1}
                    control={<Radio />}
                    label=""
                  />
                </Box>
                <Box flexGrow={1} mt={1}>
                  <AddressCard
                    state="تهران"
                    address="ظفر، خ. ولیعصر، بعد از بل میرداماد، خ. قبادیان غربی، برج های مسکونی اسکان"
                    postalCode="۸۷۶۵۴۵۶۷۸۷"
                    mobile="۰۹۱۹۹۱۴۶۱۱۹"
                    name="امیر حسین خیام باشی"
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="start"
                justifyContent="space-between"
              >
                <Box>
                  <FormControlLabel
                    sx={{ m: 0 }}
                    value={2}
                    control={<Radio />}
                    label=""
                  />
                </Box>
                <Box flexGrow={1} mt={1}>
                  <AddressCard
                    state="تهران"
                    address="خ. ولیعصر، بعد از م. ونک، خ. شریفی"
                    postalCode="۳۴۲۳۴۵۶۷۵۹"
                    mobile="۰۹۱۹۹۱۴۶۱۱۹"
                    name="امیر حسین خیام باشی"
                  />
                </Box>
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      {/* vared kardane address jadid modal*/}
      {biggerThanMd ? (
        <Modal open={openMap} onClose={handleCloseMap}>
          <>
            <AddressModal
              handleCloseMap={handleCloseMap}
              latitude={latitude}
              longitude={longitude}
              location={location}
              setLocation={setLocation}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          </>
        </Modal>
      ) : (
        <Dialog fullScreen open={openMap} onClose={handleCloseMap}>
          <>
            <AddressDialog
              handleCloseMap={handleCloseMap}
              latitude={latitude}
              longitude={longitude}
              location={location}
              setLocation={setLocation}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          </>
        </Dialog>
      )}
    </>
  );
}

export default ChangeAddress;
