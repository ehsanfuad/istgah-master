import {
  Box,
  Button,
  Dialog,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { BiLocationPlus } from "react-icons/bi";
import AddressModal from "./components/AddressModal";
import useGeolocation from "../../../hooks/useGeolocation";
import { theme } from "../../../Theme";
import AddressDialog from "./components/AddressDialog";
import BackButton from "../components/BackButton";
import AddressCard from "./components/AddressCard";

function Addresses() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const [openMap, setOpenMap] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { latitude, longitude } = useGeolocation();
  const [location, setLocation] = useState(null);

  const handleOpenMap = () => {
    setOpenMap(true);
    setShowForm(false);
  };
  const handleCloseMap = () => {
    setOpenMap(false);
  };
  return (
    <Box display="flex" flexDirection="column" p={2} mb={10}>
      <Box
        position="fixed"
        display={biggerThanMd ? "none" : "block"}
        bottom={"1rem"}
        left={"1rem"}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => handleOpenMap()}
          sx={{ paddingY: "0.9rem", borderRadius: "2rem" }}
        >
          ثبت آدرس جدید
        </Button>
      </Box>
      <Box display={biggerThanMd ? "none" : "block"}>
        <BackButton title="آدرس ها" backUrl="/profile" />
      </Box>
      <Box
        display={biggerThanMd ? "flex" : "none"}
        justifyContent="space-between"
      >
        <Box>
          <Typography
            borderBottom={3}
            pb={1}
            borderColor={theme.palette.primary.main}
          >
            آدرس ها
          </Typography>
        </Box>

        <Button
          variant="outlined"
          startIcon={
            <BiLocationPlus
              style={{ paddingLeft: "10px", marginBottom: "5px" }}
            />
          }
          size="large"
          onClick={() => handleOpenMap()}
        >
          ثبت آدرس جدید
        </Button>
      </Box>
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
      <Box display="flex" flexDirection="column" mt={4}>
        <AddressCard
          state="تهران"
          address="ظفر، خ. ولیعصر، بعد از بل میرداماد، خ. قبادیان غربی، برج های مسکونی اسکان"
          postalCode="۸۷۶۵۴۵۶۷۸۷"
          mobile="۰۹۱۹۹۱۴۶۱۱۹"
          name="امیر حسین خیام باشی"
        />
      </Box>
    </Box>
  );
}

export default Addresses;
