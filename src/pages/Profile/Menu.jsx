import React, { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSignpost2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { BiChevronLeft, BiHomeSmile } from "react-icons/bi";
import { Box, Typography, Link, Divider, useMediaQuery } from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { theme } from "../../Theme";

const items = [
  {
    icon: <BiHomeSmile size={22} />,
    title: "خلاصه فعالیت ها",
    path: "/profile",
  },
  {
    icon: <HiOutlineShoppingBag size={22} />,
    title: "سفارش ها",
    path: "/profile/orders",
  },
  {
    icon: <FiUser size={22} />,
    title: "اطلاعات حساب کاربری",
    path: "/profile/personal-info",
  },
  // {
  //   icon: <AiOutlineHeart size={22} />,
  //   title: "لیست علاقه مندی",
  //   path: "/profile/wish-list",
  // },
  {
    icon: <BsSignpost2 size={22} />,
    title: "آدرس ها",
    path: "/profile/addresses",
  },
  {
    icon: <IoLogOutOutline size={22} />,
    title: "خروج",
    path: "/login",
  },
];
function checkExistOrnot(active, itemPath) {
  if (itemPath === "/profile/orders") {
    if (active.indexOf(itemPath) >= 0) return true;
  } else {
    return active === itemPath ? true : false;
  }
}
function Menu() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const [active, setActive] = useState(items[0].path);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  const handleLogout = (index) => {
    const lastItemIndex = items.length - 1;
    if (lastItemIndex === index) {
      navigate("/");
      localStorage.removeItem("jwt");
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      {items.map((item, index) => (
        <Box
          onClick={() => handleLogout(index)}
          key={index}
          display={index === 0 && !biggerThanMd ? "none" : "block"}
        >
          <Divider
            sx={{
              marginX: 0,
              display: index === 0 && biggerThanMd ? "none" : "block",
            }}
          />
          <Link
            to={item.path}
            component={RouterLink}
            underline="none"
            key={index}
            color="inherit"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              py={1}
              px={2}
              marginY={1}
              borderRight={
                biggerThanMd && checkExistOrnot(active, item.path) ? 5 : 0
              }
              borderColor={theme.palette.primary.main}
              onClick={() => {
                setActive(item.path);
              }}
            >
              <Box display="flex" gap={2} alignItems="center">
                <Box>{item.icon}</Box>
                <Typography
                  fontSize="0.8rem"
                  variant={
                    checkExistOrnot(active, item.path) ? "body2" : "subtitle1"
                  }
                  color={theme.palette.grey[800]}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box
                color={theme.palette.grey[500]}
                display={biggerThanMd ? "none" : "block"}
              >
                <BiChevronLeft size={22} />
              </Box>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default Menu;
