import { InputBase, alpha, styled } from "@mui/material";
import React from "react";
import { MdSearch, MdCoffeeMaker } from "react-icons/md";
const SearchBox = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[500], 0.15),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.grey[600], 0.25),
  // },
  // marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: theme.spacing(3),
    width: "100%",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 0.5),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "grey",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 3, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
    fontFamily: "iransansLight",
    // [theme.breakpoints.down("md")]: {
    //   width: "100%",
    // },
  },
}));
function Search({ placeholder }) {
  return (
    <SearchBox>
      <SearchIconWrapper>
        <MdSearch />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
      />
    </SearchBox>
  );
}

export default Search;
