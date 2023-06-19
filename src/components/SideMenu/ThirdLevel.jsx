import { Link, List, ListItemButton, ListItemText } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function ThirdLevel({ category, setDrawerOpen }) {
  return (
    <ListItemButton onClick={() => {}}>
      <Link
        to={`/search/${category.slug}/${category.id}`}
        component={RouterLink}
        color="inherit"
        underline="none"
        onClick={() => setDrawerOpen(false)}
      >
        <ListItemText sx={{ textAlign: "right" }} primary={category.name} />
      </Link>
    </ListItemButton>
  );
}

export default ThirdLevel;
