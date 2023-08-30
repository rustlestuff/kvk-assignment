import { FC } from "react";
import { AppBar as MuiAppBar, Box, Toolbar, Typography } from "@mui/material";
import { Store } from "@mui/icons-material";

export const AppBar: FC = () => {
  return (
    <MuiAppBar position="relative">
      <Toolbar>
        <Store sx={{ display: "flex", mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: "flex",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Kompany
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};
