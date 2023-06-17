import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../../../Theme";
import TabTitle from "./TabTitle";
import useClasses from "../../../../hooks/useClasses";
import OrderCards from "./OrderCards";

const initialTabs = { first: false, second: false, third: false };

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" id={`simple-tabpanel-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 3, px: 2 }}>{children}</Box>}
    </div>
  );
}

export default function OrdersTab() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const styles = (theme) => ({
    customTab: {
      "& .css-1aquho2-MuiTabs-indicator": {
        height: "4px",
        borderRadius: "4px",
      },
    },
  });
  const classes = useClasses(styles);
  const [value, setValue] = useState(0);
  const [tabId, setTabId] = useState({
    first: true,
    second: false,
    third: false,
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box mt={2} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.customTab}
          variant="scrollable"
        >
          <Tab
            label={
              <TabTitle title="پرداخت شده" count={2} active={tabId["first"]} />
            }
            onClick={(e) => {
              setTabId({ ...initialTabs, ["first"]: true });
            }}
          />
          <Tab
            label={
              <TabTitle title="تحویل شده" count={0} active={tabId["second"]} />
            }
            onClick={(e) => {
              setTabId({ ...initialTabs, ["second"]: true });
            }}
          />
          <Tab
            label={
              <TabTitle title="لغو شده" count={1} active={tabId["third"]} />
            }
            onClick={(e) => {
              setTabId({ ...initialTabs, ["third"]: true });
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OrderCards tabId={0} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OrderCards tabId={1} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OrderCards tabId={2} />
      </TabPanel>
    </>
  );
}
