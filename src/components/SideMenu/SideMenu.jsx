import React from "react";
import { Box } from "@mui/system";
import { Divider, SwipeableDrawer, Typography } from "@mui/material";
import FirstLevel from "./FirstLevel";

function SideMenu({ drawerOpen, setDrawerOpen, categories }) {
  return (
    <SwipeableDrawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      onOpen={() => setDrawerOpen(true)}
    >
      <Box pr={2} pl={3} pt={3}>
        <Typography
          color="primary.light"
          sx={{ marginBottom: "10px" }}
          variant="h5"
          component="div"
          // fontWeight="fontWeightMedium"
        >
          کافه ایستگاه
        </Typography>
        <Divider variant="fullWidth" />
      </Box>
      <Box pr={2} pt={2}>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="subtitle1"
          component="div"
        >
          دسته بندی کالاها
        </Typography>
      </Box>
      <Box sx={{ width: 300 }}>
        {categories.map((category, index) => (
          <FirstLevel
            category={category}
            key={index}
            setDrawerOpen={setDrawerOpen}
          />
        ))}
      </Box>
    </SwipeableDrawer>
  );
}

export default SideMenu;
