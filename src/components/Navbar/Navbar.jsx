import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  Link,
  styled,
  Toolbar,
  Typography,
  Badge,
  useMediaQuery,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import logo from "../../images/cafeistgah-logo-2.png";
//----------ICONS----------//
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import WineBarIcon from "@mui/icons-material/WineBar";
import { theme } from "../../Theme";
import { TbBrandCoinbase } from "react-icons/tb";
//----------ICONS----------//
import MegaMenu from "../MegaMenu/MegaMenu";
import SideMenu from "../SideMenu/SideMenu";
import Cart from "../Cart/Cart";
import { FiShoppingCart } from "react-icons/fi";
import Search from "../Search/Search";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
});
const StyledBox = styled(Box)(({ theme }) => ({
  display: "none",
  marginTop: "15px",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));
const StyledButtonNav = styled(Button)(({ theme }) => ({
  border: 0,
  alignItems: "center",
  fontSize: "16px",
  padding: "0",
  // marginRight: "1rem",
  // color: theme.palette.secondary.main,
  "& .MuiButton-startIcon": {},
}));
const getIcon = (index) => {
  switch (index) {
    case 0:
      return <CoffeeMakerIcon sx={{ fontSize: "2rem" }} />;
    case 1:
      return <WineBarIcon />;
    case 2:
      return <TbBrandCoinbase style={{ fontSize: "15px" }} />;
    default:
      break;
  }
};

function Navbar() {
  const [subCats, setSubCats] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [event, setEvent] = useState(null);
  const [cartAnchorEl, setCartAnchorEl] = useState(null);
  const [eventCart, setEventCart] = useState(null);
  const [isShowCart, setIsShowCart] = useState(true);

  const { res, loading, error } = useFetch(`/category/getAll`);

  const location = useLocation();
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    if (location.pathname === "/cart") {
      setIsShowCart(false);
    } else {
      setIsShowCart(true);
    }
  }, [location.pathname]);

  if (loading) return "Loading";
  const categories = res.data;
  const handleClick = (event, children) => {
    setAnchorEl(event.currentTarget);
    setSubCats(children);
    setEvent(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCartClick = (e) => {
    setCartAnchorEl(e.currentTarget);
    setEventCart(e.currentTarget);
  };
  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  return (
    <>
      <Box
        position={biggerThanMd ? "sticky" : "static"}
        top={0}
        display="flex"
        zIndex={1}
        sx={{ flexGrow: 1 }}
      >
        <AppBar
          position={biggerThanMd ? "sticky" : "static"}
          sx={{ backgroundColor: (theme) => theme.palette.background.paper }}
        >
          <Container maxWidth="xl">
            <StyledToolbar disableGutters={true}>
              <Box
                justifyContent="space-between"
                alignItems="center"
                sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}
              >
                <IconButton
                  size="inherit"
                  sx={{
                    color: (theme) => theme.palette.common.black,
                    paddingRight: "0",
                  }}
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="body1"
                  fontSize="1.3rem"
                  component="div"
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                  }}
                >
                  کافه ایستگاه
                </Typography>
                <IconButton
                  size="inherit"
                  sx={{
                    color: (theme) => theme.palette.grey[800],
                  }}
                >
                  <PhoneIcon />
                </IconButton>
              </Box>
              <Box
                display="flex"
                width="100%"
                mt={1}
                justifyContent="space-between"
              >
                <Box
                  gap={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: { xs: "100%" },
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      color: (theme) => theme.palette.common.black,
                    }}
                    alignItems="center"
                    gap={1}
                  >
                    <Box width="40px" mr={-0.3}>
                      <img width="100%" src={logo} alt="لوگوی کافه ایستگاه" />
                    </Box>
                    <Typography
                      variant="body2"
                      fontSize="1.5rem"
                      component="div"
                    >
                      کافه ایستگاه
                    </Typography>
                  </Box>
                  <Search placeholder="جستجو" />
                </Box>
                <Box display="flex" gap={1}>
                  <IconButton
                    size="inherit"
                    sx={{
                      color: (theme) => theme.palette.grey[800],
                    }}
                    disableRipple
                  >
                    <PersonIcon />
                    <ExpandMoreIcon style={{ width: "12px" }} />
                  </IconButton>
                  <Divider orientation="vertical" />
                  <Link
                    to="/cart"
                    component={RouterLink}
                    color="inherit"
                    underline="none"
                  >
                    <IconButton
                      size="inherit"
                      sx={{
                        color: (theme) => theme.palette.grey[800],
                      }}
                      onMouseOver={(e) => handleCartClick(e)}
                      onMouseLeave={handleCartClose}
                    >
                      <Badge
                        badgeContent={1}
                        color="primary"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                      >
                        <FiShoppingCart />
                      </Badge>
                    </IconButton>
                  </Link>
                </Box>
              </Box>
              <StyledBox>
                {categories.map((category, index) => {
                  if (category.parentId === 0) {
                    return (
                      <Link
                        key={index}
                        to={`/search/${category.slug}/${category.id}`}
                        component={RouterLink}
                        underline="hover"
                        sx={{
                          color: (theme) => theme.palette.primary.main,
                          textUnderlineOffset: "7px",
                        }}
                        onClick={handleClose}
                      >
                        <StyledButtonNav
                          key={index}
                          color="inherit"
                          // variant="outlined"
                          // startIcon={getIcon(index)}
                          endIcon={getIcon(index)}
                          onMouseOver={(e) => handleClick(e, category.children)}
                          onMouseLeave={handleClose}
                          sx={{
                            color: (theme) => theme.palette.grey[700],
                            marginRight: index === 0 ? "0" : "5px",
                          }}
                        >
                          <Typography
                            sx={{
                              color: (theme) => theme.palette.grey[900],
                              width: "100%",
                            }}
                            ml={0.2}
                          >
                            {category.name}
                          </Typography>
                        </StyledButtonNav>
                      </Link>
                    );
                  }
                })}
              </StyledBox>
            </StyledToolbar>
          </Container>
        </AppBar>
        <MegaMenu
          subCats={subCats}
          setAnchorEl={setAnchorEl}
          anchorEl={anchorEl}
          event={event}
        />
      </Box>
      <Box>
        <Cart
          setCartAnchorEl={setCartAnchorEl}
          cartAnchorEl={cartAnchorEl}
          eventCart={eventCart}
          isShowCart={isShowCart}
        />
      </Box>
      <SideMenu
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        categories={categories}
      />
    </>
  );
}

export default Navbar;
