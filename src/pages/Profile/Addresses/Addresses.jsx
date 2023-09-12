import {
  Box,
  Button,
  Dialog,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiLocationPlus } from "react-icons/bi";
import AddressModal from "./components/AddressModal";
import useGeolocation from "../../../hooks/useGeolocation";
import { theme } from "../../../Theme";
import AddressDialog from "./components/AddressDialog";
import BackButton from "../components/BackButton";
import AddressCard from "./components/AddressCard";
import jwt_decode from "jwt-decode";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../../store/addressReducer";

function Addresses() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const [openMap, setOpenMap] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { latitude, longitude } = useGeolocation();
  const [location, setLocation] = useState(null);
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.address.addresses);

  const jwt = localStorage.getItem("jwt");
  let jwtErrorMessage = null;
  let userId = null;
  try {
    const decoded = jwt_decode(jwt);
    userId = decoded.id;
  } catch (error) {
    jwtErrorMessage = error.message;
    console.log("error", error);
  }
  const { res, loading, error } = useFetch(
    `/users/${userId}?fields[0]=firstName&fields[1]=lastName&fields[2]=username&fields[3]=email&fields[4]=selectedAddress&populate[0]=addresses`
  );

  if (loading) return <Loading />;
  if ((!loading && res?.error?.status > 400) || jwtErrorMessage) {
    localStorage.removeItem("jwt");
    window.location.reload(false);
  }
  const userName = `${res?.firstName} ${res?.lastName}`;

  // const addresses = res?.addresses.reverse();
  const mobile = res?.username;
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
          <AddressDialog
            handleCloseMap={handleCloseMap}
            latitude={latitude}
            longitude={longitude}
            location={location}
            setLocation={setLocation}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        </Dialog>
      )}
      <Box display="flex" flexDirection="column" mt={4} gap={1}>
        {addresses.map((address, index) => (
          <AddressCard
            key={index}
            id={address.id}
            state={address.city.label}
            address={address.address}
            postalCode={address.postalCode}
            mobile={mobile}
            name={userName}
            handleOpenMap={handleOpenMap}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Addresses;
