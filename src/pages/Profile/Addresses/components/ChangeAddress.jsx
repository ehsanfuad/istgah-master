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
import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { MdOutlineAddLocation } from "react-icons/md";
import useGeolocation from "../../../../hooks/useGeolocation";
import { theme } from "../../../../Theme";
import AddressModal from "./AddressModal";
import AddressDialog from "./AddressDialog";
import AddressCard from "./AddressCard";
import usePostData from "../../../../hooks/usePostData";
import { useDispatch } from "react-redux";
import { getAddressId } from "../../../../store/addressReducer";

function ChangeAddress({ handleClose, addresses, selectedAddressId, user }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const dispatch = useDispatch();
  const [openMap, setOpenMap] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { latitude, longitude } = useGeolocation();
  const [location, setLocation] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(selectedAddressId);
  const { postData, isLoading, error, result, statusRequset } = usePostData();

  useEffect(() => {
    const selectedAddressForUpdate = {
      selectedAddress,
    };
    postData(`/users/${user.id}`, selectedAddressForUpdate, "PUT");
  }, [selectedAddress]);

  const handleOpenMap = () => {
    setOpenMap(true);
    setShowForm(false);
  };
  const handleCloseMap = () => {
    setOpenMap(false);
  };

  const handleChangeAddresses = (event) => {
    const id = parseInt(event.target.value);
    setSelectedAddress(id);
    dispatch(getAddressId(id));
  };
  const userName = `${user.firstName} ${user.lastName}`;
  const mobile = user.username;
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
              {addresses.map((address, index) => (
                <Box
                  display="flex"
                  alignItems="start"
                  justifyContent="space-between"
                  key={index}
                >
                  <Box>
                    <FormControlLabel
                      sx={{ m: 0 }}
                      value={address.id}
                      control={<Radio />}
                      label=""
                    />
                  </Box>
                  <Box flexGrow={1} mt={1}>
                    <AddressCard
                      key={index}
                      id={address.id}
                      setLocation={setLocation}
                      lat={parseFloat(address.latitude)}
                      long={parseFloat(address.longitude)}
                      state={address.city.label}
                      address={address.address}
                      postalCode={address.postalCode}
                      mobile={mobile}
                      name={userName}
                      handleOpenMap={handleOpenMap}
                    />
                  </Box>
                </Box>
              ))}
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
