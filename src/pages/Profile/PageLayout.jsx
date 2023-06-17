import { Box, Container, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { theme } from "../../Theme";
import Menu from "./Menu";

function PageLayout() {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();
  useEffect(() => {
    if (location.pathname != "/profile" && !biggerThanMd) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(true);
    }
  }, [location.pathname, biggerThanMd]);

  return (
    <Container maxWidth="xl" sx={{ px: biggerThanMd ? 2 : 0 }}>
      <Box
        display="flex"
        flexDirection={biggerThanMd ? "row" : "column"}
        gap={2}
        mt={biggerThanMd ? 5 : 2}
      >
        <Box
          flex={1}
          border={biggerThanMd ? 1 : 0}
          borderRadius={2}
          borderColor={theme.palette.grey[300]}
          display={showMobileMenu ? "block" : "none"}
          sx={{ height: "fit-content" }}
        >
          <Menu />
        </Box>
        <Box
          flex={3}
          border={biggerThanMd ? 1 : 0}
          borderRadius={2}
          borderColor={theme.palette.grey[300]}
          order={biggerThanMd ? 0 : -1}
          sx={{ height: "fit-content" }}
        >
          {<Outlet />}
        </Box>
      </Box>
    </Container>
  );
}

export default PageLayout;
