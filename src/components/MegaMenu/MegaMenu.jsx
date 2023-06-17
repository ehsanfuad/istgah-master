import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Popover,
  Stack,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import useClasses from "../../hooks/useClasses";
import { Link as RouterLink } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const styles = (theme) => ({
  popover: {
    pointerEvents: "none",
  },
  popoverContent: {
    pointerEvents: "auto",
  },
});
function MegaMenu({ subCats, anchorEl, setAnchorEl, event }) {
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setAnchorEl(event);
  };

  const classes = useClasses(styles);
  if (subCats.length === 0) return "";
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      className={classes.popover}
      classes={{
        paper: classes.popoverContent,
      }}
      // PaperProps={{
      //   style: { width: "100%" },
      // }}
      PaperProps={{ onMouseEnter: handleClick, onMouseLeave: handleClose }}
      disdisablerestorefocus="true"
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "auto auto auto",
          alignItems: "start",
          gridAutoFlow: "column",
        }}
      >
        {subCats.map((cat, index) => (
          <Box px={1} key={index}>
            <List>
              <ListItem
                key={index}
                sx={{
                  paddingRight: "0",
                  paddingBottom: "0",
                  paddingTop: "0",
                }}
              >
                <Link
                  to={`/search/${cat.slug}/${cat.id}`}
                  sx={{ textUnderlineOffset: "7px" }}
                  component={RouterLink}
                  underline="hover"
                >
                  <ListItemText
                    sx={{
                      margin: "0",
                      textAlign: "right",
                    }}
                    primary={
                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{ pr: 1, borderRight: "2px solid" }}
                        color={(theme) => theme.palette.primary.main}
                      >
                        <Typography
                          color={(theme) => theme.palette.grey[800]}
                          sx={{
                            fontSize: "0.9rem",
                            "&:hover": {
                              color: (theme) => theme.palette.primary.main,
                            },
                          }}
                        >
                          {cat.name}
                        </Typography>
                        <ChevronLeftIcon />
                      </Box>
                    }
                    onClick={handleClose}
                  />
                </Link>
              </ListItem>
              {cat.children.map((child, index) => (
                <ListItem disablePadding key={index}>
                  <Link
                    to={`/search/${child.slug}/${child.id}`}
                    underline="hover"
                    sx={{
                      textUnderlineOffset: "5px",
                    }}
                    component={RouterLink}
                  >
                    <ListItemText
                      sx={{
                        textAlign: "right",
                        margin: "0",
                        paddingLeft: "10px",
                        paddingBottom: "5px",
                        color: "#81858b",
                        whiteSpace: "nowrap",
                      }}
                      primary={
                        <Typography
                          color={(theme) => theme.palette.grey[700]}
                          sx={{
                            fontSize: "0.9rem",
                            "&:hover": {
                              color: (theme) => theme.palette.primary.main,
                            },
                          }}
                          variant="subtitle1"
                        >
                          {child.name}
                        </Typography>
                      }
                      onClick={handleClose}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
            {index === subCats.length - 1 ? "" : null}
          </Box>
        ))}
      </Box>
    </Popover>
  );
}

export default MegaMenu;
