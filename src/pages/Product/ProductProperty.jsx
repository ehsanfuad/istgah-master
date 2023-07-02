import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Divider,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../Theme";

function ProductProperty({ attributes, type }) {
  const mobileVersion = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(null);
  const handleChangeValue = (event, newValue) => {
    if (mobileVersion) {
      setValue(newValue);
    } else {
      setValue(event.target.value);
    }
  };

  const ForDesktop = () => {
    return (
      <Box display="flex" flexDirection="column" mt={1}>
        <Box mb={1}>
          <Typography fontSize="18px" variant="body1" component="p">
            {`${type} : ${value ? value.name : attributes[0].name}`}
          </Typography>
        </Box>
        <Box mb={2}>
          <Select
            id="demo-simple-select"
            value={value ? value : attributes[0]}
            onChange={handleChangeValue}
            sx={{ minWidth: "250px" }}
          >
            {attributes.map((attribute, index) => (
              <MenuItem key={index} value={attribute}>
                {attribute.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
    );
  };

  const ForMobile = () => {
    return (
      <Box display="flex" flexDirection="column">
        <Divider />
        <Box mb={1} mt={1.5}>
          <Typography fontSize="0.9rem" variant="body1" component="p">
            {`${type} : ${value ? value.name : attributes[0].name}`}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            overflowX: "auto",
            overflowY: "hidden",
            display: "flex",
            whiteSpace: "nowrap",
          }}
          pb={1.2}
        >
          <ToggleButtonGroup
            color="primary"
            value={value ? value : attributes[0]}
            exclusive
            onChange={handleChangeValue}
            sx={{ maxWidth: "300px", display: "block" }}
          >
            {attributes.map((attribute, index) => (
              <ToggleButton
                key={index}
                sx={{
                  border: "1px solid #D3D3D3 !important",
                  "&.MuiToggleButton-root": {
                    borderRadius: "30px !important",
                  },
                  "&.Mui-disabled": {
                    border: "1px solid #D3D3D3 !important",
                  },
                  p: 0.5,
                  marginLeft: "10px !important",
                }}
                value={attribute}
                disabled={attribute === value ? true : false}
              >
                {attribute.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
        {/* <Divider /> */}
      </Box>
    );
  };
  return mobileVersion ? <ForMobile /> : <ForDesktop />;
}

export default ProductProperty;
