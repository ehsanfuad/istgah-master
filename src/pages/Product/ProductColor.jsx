import React, { useState, useEffect } from "react";
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
import { colorUpdate } from "../../store/cartReducer";
import { useDispatch, useSelector } from "react-redux";

function ProductColor({ attributes, type }) {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.cart.color);
  const handleChangeValue = (e, newValue) => {
    dispatch(colorUpdate(newValue));
  };

  const mobileVersion = useMediaQuery(theme.breakpoints.down("md"));
  const ForDesktop = () => {
    return (
      <Box display="flex" flexDirection="column" mt={1}>
        <Box>
          <Typography fontSize="18px" variant="body1" component="p">
            {`${type.name} : ${color ? color.name : attributes[0].name}`}
          </Typography>
        </Box>
        <Box mb={2}>
          <ToggleButtonGroup
            color="primary"
            value={color ? color : attributes[0]}
            exclusive
            onChange={handleChangeValue}
            sx={{ maxWidth: "300px", display: "block" }}
          >
            {attributes.map((attribute, index) => (
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
                value={attribute}
                disabled={attribute === color ? true : false}
              >
                <Box
                  sx={{ width: "25px", height: "25px" }}
                  bgcolor={attribute.value}
                  borderRadius={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border={1}
                  borderattribute="GrayText"
                >
                  {attribute === color ? (
                    <FiCheck
                      fontSize="20px"
                      color={color.name === "مشکی" ? "white" : "black"}
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
            {`${type.name} : ${color ? color.name : attributes[0].name}`}
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
            value={color ? color : attributes[0]}
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
                disabled={attribute === color ? true : false}
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
                  {attribute === color ? (
                    <FiCheck
                      fontSize="20px"
                      color={color.name === "مشکی" ? "white" : "black"}
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
