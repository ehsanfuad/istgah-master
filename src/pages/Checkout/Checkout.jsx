import {
  Box,
  Container,
  Dialog,
  Divider,
  Grid,
  InputBase,
  Link,
  Modal,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../Theme";
import BrandTitle from "./components/BrandTitle";
import CheckoutStepper from "./components/CheckoutStepper";
import CheckoutPrice from "./components/CheckoutPrice";
import CheckoutPriceMobile from "./components/CheckoutPriceMobile";
import AddressCard from "./components/AddressCard";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import useDraggableContainer from "../../hooks/useDraggableContainer ";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import {
  formatMoney,
  formatNumber,
  getCartPrice,
  getCartQuantity,
  getDiscountedCart,
  getRawCartPrice,
  sumDiscountCart,
} from "../../hooks/numberUtils";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import GetUserIfo from "./components/GetUserIfo";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import useGeolocation from "../../hooks/useGeolocation";
import AddressModal from "../Profile/Addresses/components/AddressModal";
import AddressDialog from "../Profile/Addresses/components/AddressDialog";
import { useDispatch } from "react-redux";
import { getAddressId } from "../../store/addressReducer";
import { setBackUrl } from "../../store/urlReducer";
import LazyImage from "../../components/LazyImage/LazyImage";
function Checkout() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const products = useSelector((state) => state.cart.products);
  const addreses = useSelector((state) => state.address.addresses);
  const dispatch = useDispatch();
  const [showCode, setShowCode] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  // jensaye address
  const [openMap, setOpenMap] = useState(false);
  const [showForm, setShowForm] = useState(false);
  let { latitude, longitude } = useGeolocation();
  const [location, setLocation] = useState(null);
  const [userHasAddress, setUserHasAddress] = useState(
    addreses.length > 0 ? true : false
  );
  // jensaye address

  const [personalInfo, setPersonalInfo] = useState(false);
  const { containerRef, handleMouseDown, handleTouchStart } =
    useDraggableContainer();
  const handleOnClickCode = () => {
    setShowCode(true);
  };

  useEffect(() => {
    if (addreses.length <= 0) {
      setUserHasAddress(false);
    } else {
      setUserHasAddress(true);
    }
  }, [addreses]);

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
    `/users/${userId}?fields[0]=firstName&fields[1]=lastName&fields[2]=username&fields[3]=selectedAddress&populate[0]=addresses`
  );

  if (loading) return <Loading />;
  if ((!loading && res?.error?.status > 400) || jwtErrorMessage) {
    localStorage.removeItem("jwt");
    window.location.reload(false);
  }
  if (res.data === null) return "";
  const user = res;

  const handleOpenMap = () => {
    setOpenMap(true);
    setShowForm(false);
    dispatch(getAddressId(null));
  };
  const handleCloseMap = () => {
    setOpenMap(false);
  };
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{ paddingBottom: "100px" }}
          display="flex"
          flexDirection="column"
          py={biggerThanMd ? 3 : 0}
        >
          {/* header */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            pt={2}
            border={biggerThanMd ? 1 : 0}
            borderColor={theme.palette.grey[300]}
            borderRadius={2}
          >
            <BrandTitle />
            <Box width="100%" py={4}>
              <CheckoutStepper />
            </Box>
          </Box>
          <Box
            pt={2}
            display="flex"
            gap={2}
            flexDirection={biggerThanMd ? "row" : "column"}
          >
            <Box flex={3} display="flex" flexDirection="column" gap={2}>
              {/* address */}
              <Box
                display="flex"
                flexDirection="column"
                border={biggerThanMd ? 1 : 0}
                p={biggerThanMd ? 2 : 0}
                py={3}
                borderRadius={2}
                borderColor={theme.palette.grey[300]}
                height="fit-content"
              >
                <AddressCard user={user} />
              </Box>
              <Divider sx={{ display: biggerThanMd ? "none" : "block" }} />
              {/* code takhfif */}
              <Box
                display="flex"
                flexDirection={showCode ? "column" : "row"}
                justifyContent="space-between"
                border={biggerThanMd ? 1 : 0}
                p={biggerThanMd ? 2 : 0}
                pb={showCode ? 2 : 0}
                py={3}
                borderRadius={2}
                borderColor={theme.palette.grey[300]}
                height="fit-content"
              >
                <Typography fontSize="0.9rem">کد تخفیف</Typography>
                <Box
                  mt={showCode ? 2 : 0}
                  sx={{ cursor: "pointer" }}
                  onClick={handleOnClickCode}
                >
                  <Typography
                    fontSize="0.9rem"
                    color={theme.palette.primary.light}
                    display={showCode ? "none" : "block"}
                  >
                    افزودن کد تخفیف +
                  </Typography>
                  <Box display={showCode ? "block" : "none"}>
                    <Box
                      component="form"
                      sx={{
                        p: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        width: biggerThanMd ? "300px" : "100%",
                        border: 1,
                        borderRadius: 2,
                        borderColor: theme.palette.grey[300],
                      }}
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1, fontSize: "0.8rem" }}
                        placeholder="افزودن کد تخفیف"
                      />
                      <Typography
                        fontSize="0.9rem"
                        px={2}
                        color={theme.palette.primary.light}
                      >
                        ثبت
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ display: biggerThanMd ? "none" : "block" }} />
              {/* order details */}
              <Box
                display="flex"
                flexDirection="column"
                border={biggerThanMd ? 1 : 0}
                p={biggerThanMd ? 2 : 0}
                py={3}
                borderRadius={2}
                borderColor={theme.palette.grey[300]}
                height="fit-content"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  onClick={() => setShowDetails(!showDetails)}
                  width="fit-content"
                  sx={{ cursor: "pointer" }}
                >
                  <Typography>خلاصه سفارش</Typography>
                  <BiChevronDown
                    style={{ display: showDetails ? "none" : "block" }}
                    size={22}
                    color={theme.palette.grey[700]}
                  />
                  <BiChevronUp
                    style={{ display: showDetails ? "block" : "none" }}
                    size={22}
                    color={theme.palette.grey[700]}
                  />
                  <Box
                    p={0.5}
                    bgcolor={theme.palette.grey[200]}
                    borderRadius={3}
                  >
                    <Typography fontSize="0.7rem">
                      {formatNumber(getCartQuantity(products))} کالا
                    </Typography>
                  </Box>
                </Box>
                <Typography fontSize="0.7rem" variant="subtitle1">
                  ارسال با پست - هزینه ارسال : ۱۹,۰۰۰
                </Typography>
                <Box display={showDetails ? "flex" : "none"} mt={2}>
                  <div
                    className="scroll-container"
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    style={{ paddingBottom: "1rem" }}
                  >
                    <div className="scroll-wrapper">
                      {products.map((product, index) => (
                        <Box
                          maxWidth="116px"
                          flex={1}
                          display="flex"
                          flexDirection="column"
                          position="relative"
                          key={index}
                        >
                          <LazyImage
                            imageUrl={product?.image}
                            width={100}
                            height={100}
                          />
                          <Box
                            bottom="0"
                            left="0"
                            position="absolute"
                            borderRadius={1}
                            width="20px"
                            height="20px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ backgroundColor: "rgb(211,211,211,0.5)" }}
                          >
                            <Typography variant="body2">
                              {formatNumber(product.quantity)}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </div>
                  </div>
                </Box>
              </Box>
              <Divider sx={{ display: biggerThanMd ? "none" : "block" }} />
            </Box>
            <Box
              flex={1}
              border={biggerThanMd ? 1 : 0}
              borderRadius={2}
              pt={biggerThanMd ? 2 : 0}
              borderColor={theme.palette.grey[300]}
              position="sticky"
              top={10}
              height="fit-content"
            >
              <CheckoutPrice
                itemNumber={formatNumber(getCartQuantity(products))}
                rawPrice={getRawCartPrice(products)}
                cartPrice={formatMoney(getCartPrice(products))}
                discountedPrice={getDiscountedCart(products)}
                sumDiscountCart={sumDiscountCart(products)}
                products={products}
                userId={userId}
              />
            </Box>
          </Box>
        </Box>
      </Container>
      {/* button pardakht mobile */}
      <Box
        position="fixed"
        bgcolor="#fafafa"
        sx={{
          width: "100%",
          height: "82px",
          zIndex: 1000,
          bottom: 0,
          boxShadow: "0 1px 5px rgb(0 0 0 / 20%)",
          borderTop: "1px solid #D3D3D3",
        }}
        display={biggerThanMd ? "none" : "block"}
      >
        <CheckoutPriceMobile
          products={products}
          userId={userId}
          cartPrice={formatMoney(getCartPrice(products))}
        />
      </Box>
      <Dialog
        open={
          !userHasAddress || user.firstName === null || user.lastName === null
            ? true
            : false
        }
        maxWidth="xs"
        fullWidth={true}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          pt={2}
          pl={3}
          pb={3}
          pr={1}
        >
          {!userHasAddress && (
            <Box
              display="flex"
              alignItems="center"
              gap={0.5}
              onClick={handleOpenMap}
              sx={{ cursor: "pointer" }}
              color={theme.palette.primary.main}
            >
              <AiOutlinePlusCircle />
              <Typography>ثبت آدرس</Typography>
            </Box>
          )}
          {user.firstName === null || user.lastName === null ? (
            <Link
              component={RouterLink}
              to="/profile/personal-info"
              underline="none"
              onClick={() => dispatch(setBackUrl("/checkout"))}
            >
              <Box
                display="flex"
                alignItems="center"
                gap={0.5}
                sx={{ cursor: "pointer" }}
                color={theme.palette.primary.main}
              >
                <AiOutlinePlusCircle />
                <Typography>ثبت اطلاعات کاربری</Typography>
              </Box>
            </Link>
          ) : null}
        </Box>
      </Dialog>
      {/*  baraye baz kardan address */}
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
    </>
  );
}

export default Checkout;
