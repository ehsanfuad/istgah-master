import { Breadcrumbs, Link, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import useFetch from "../../hooks/useFetch";

function Breadcrumb({ categoryId }) {
  const { res, loading, error } = useFetch(
    `/category/getParents/${categoryId}`
  );
  let parentCategories = [];
  parentCategories = res;
  if (loading) return "...";
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <Link
        underline="none"
        color="text.secondary"
        component={RouterLink}
        to="/"
      >
        <Typography display="inline" variant="subtitle2" color="text.secondary">
          کافه ایستگاه
        </Typography>
      </Link>
      {parentCategories.length === 0 ? null : (
        <Typography color="text.secondary" marginX={1} display="inline">
          /
        </Typography>
      )}
      {parentCategories.map((cat, index) => (
        <React.Fragment key={index}>
          <Link
            underline="none"
            color="text.secondary"
            component={RouterLink}
            to={`/search/${cat.slug}/${cat.id}`}
          >
            <Typography
              display="inline"
              variant="subtitle2"
              color="text.secondary"
            >
              {cat.name}
            </Typography>
          </Link>
          {index === parentCategories.length - 1 ? null : (
            <Typography color="text.secondary" marginX={1} display="inline">
              /
            </Typography>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
}

export default Breadcrumb;
