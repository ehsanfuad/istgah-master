import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { MdClose } from "react-icons/md";
import { theme } from "../../../../Theme";
import { BiChevronLeft } from "react-icons/bi";
import MyMap from "../../../../components/MyMap/MyMap";
import AddressForm from "./AddressForm";
import AddressHeader from "./AddressHeader";
import AddressFooter from "./AddressFooter";

function AddressModal({
  handleCloseMap,
  latitude,
  longitude,
  location,
  setLocation,
  showForm,
  setShowForm,
}) {
  const style = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60vw",
    height: "80vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 4,
    overflow: "hidden",
    // paddingX: 2.5,
    // paddingY: 2,
    gap: 2,
  };
  return (
    <Box sx={style}>
      <Box height="8%" px={2} pt={1} pb={0.5}>
        <AddressHeader handleCloseMap={handleCloseMap} />
      </Box>
      <Divider variant="fullWidth" />
      <Box height="80%" width="100%">
        {showForm ? (
          <AddressForm
            setShowForm={setShowForm}
            location={location}
            handleCloseMap={handleCloseMap}
          />
        ) : (
          <MyMap
            location={location}
            setLocation={setLocation}
            latitude={latitude}
            longitude={longitude}
          />
        )}
      </Box>
      <Box height="60px">
        <AddressFooter
          setShowForm={setShowForm}
          location={location}
          showForm={showForm}
        />
      </Box>
    </Box>
  );
}

export default AddressModal;
