import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";

export const SearchBox: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        gap: 1,
        p: 2,
      }}
    >
      <TextField
        type="search"
        name="search"
        id="search-input"
        size="small"
        fullWidth
      />
      <Button type="submit" variant="contained">
        Zoeken
      </Button>
    </Box>
  );
};
