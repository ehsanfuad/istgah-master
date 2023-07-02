import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../Theme";

function ProductColor({ attributes, type }) {
  const [value, setValue] = useState(null);
  const handleChangeValue = (e, newValue) => {
    setValue(newValue);
  };
  const checkValue = () => {
    if (value != null) {
      return value;
    } else {
      return attributes[0];
    }
  };
  const mobileVersion = useMediaQuery(theme.breakpoints.down("md"));
  const ForDesktop = () => {
    return (
      <Box display="flex" flexDirection="column" mt={1}>
        <Box>
          <Typography fontSize="18px" variant="body1" component="p">
            {`${type} : ${value ? value.name : attributes[0].name}`}
          </Typography>
        </Box>
        <Box mb={2}>
          <ToggleButtonGroup
            color="primary"
            value={value ? value : attributes[0]}
            exclusive
            onChange={handleChangeValue}
            sx={{ maxWidth: "300px", display: "block" }}
          >
            {attributes.map((color, index) => (
              <ToggleButton
                sx={{
                  border: 0,
                  "&.MuiToggleButton-root": {
                    borderRadius: "30px !important",
                  },
                  "&.Mui-disabled": {
                    border: "1px solid #D3D3D3 !important",
                  },
                }}
                key={index}
                value={color}
                disabled={color === value ? true : false}
              >
                <Box
                  sx={{ width: "25px", height: "25px" }}
                  bgcolor={color.value}
                  borderRadius={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={1}
                  borderColor="GrayText"
                >
                  {color === checkValue() ? (
                    <FiCheck
                      fontSize="20px"
                      color={checkValue().name === "مشکی" ? "white" : "black"}
                    />
                  ) : null}
                </Box>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </Box>
    );
  };
  const ForMobile = () => {
    return (
      <Box display="flex" flexDirection="column" mb={2}>
        <Divider sx={{ marginTop: 1 }} />
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
          mb={0}
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
                  mb: 2,
                  marginLeft: "10px !important",
                }}
                value={attribute}
                disabled={attribute === value ? true : false}
              >
                <Box
                  sx={{ width: "15px", height: "15px" }}
                  bgcolor={attribute.value}
                  borderRadius={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={1}
                  borderColor="GrayText"
                  ml={1}
                >
                  {attribute === checkValue() ? (
                    <FiCheck
                      fontSize="20px"
                      color={checkValue().name === "مشکی" ? "white" : "black"}
                    />
                  ) : null}
                </Box>
                <Typography component="span" fontSize="13px">
                  {attribute.name}
                </Typography>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
        <Divider />
      </Box>
    );
  };

  return mobileVersion ? <ForMobile /> : <ForDesktop />;
}

export default ProductColor;
