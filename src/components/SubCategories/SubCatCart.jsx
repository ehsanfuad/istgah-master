import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { display } from "@mui/system";
import React from "react";

function SubCatCart({ subCat }) {
  return (
    <Link
      underline="none"
      color="text.secondary"
      component={RouterLink}
      to={`/search/${subCat.slug}/${subCat.id}`}
    >
      <Box
        sx={{
          borderRadius: "10px",
          backgroundColor: "#f0f0f1",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // maxWidth: "90px",
          margin: "7px",
          marginRight: "0",
        }}
      >
        <Box
          sx={{
            width: "100px",
          }}
        >
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              subCat.image.formats.thumbnail.url
            }
            alt={subCat.name}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Box>

        <Typography
          sx={{
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "center",
          }}
          variant="caption"
        >
          {subCat.name}
        </Typography>
      </Box>
    </Link>
  );
}

export default SubCatCart;
