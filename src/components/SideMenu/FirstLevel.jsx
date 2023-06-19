import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MdChevronLeft, MdExpandLess, MdExpandMore } from "react-icons/md";
import SecondLevel from "./SecondLevel";
import { Link as RouterLink } from "react-router-dom";

function FirstLevel({ category, setDrawerOpen }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText
          sx={{ textAlign: "right" }}
          primary={
            open ? (
              <Typography variant="body1" style={{ color: "tomato" }}>
                {category.name}
              </Typography>
            ) : (
              <Typography variant="body1" style={{ color: "black" }}>
                {category.name}
              </Typography>
            )
          }
        />
        {open ? <MdExpandLess color="tomato" /> : <MdExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ backgroundColor: "#f0f0f1" }}
          subheader={
            <ListSubheader
              sx={{
                display: "flex",
                alignItems: "center",
                paddingRight: "3rem",
                backgroundColor: "#f0f0f1",
                textDecoration: "none",
              }}
              component={RouterLink}
              to={`/search/${category.slug}/${category.id}`}
              id="nested-list-subheader"
              onClick={() => setDrawerOpen(false)}
            >
              همه موارد این دسته
              <MdChevronLeft />
            </ListSubheader>
          }
        >
          {category.children.map((child, index) => (
            <SecondLevel
              category={child}
              key={index}
              setDrawerOpen={setDrawerOpen}
            />
          ))}
        </List>
      </Collapse>
    </List>
  );
}

export default FirstLevel;
