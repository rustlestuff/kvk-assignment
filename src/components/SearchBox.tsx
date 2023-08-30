import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";

export const SearchBox: FC = () => {
  return (
    <Box component="section" display="flex" gap={1}>
      <TextField type="search" name="search" id="search-input" size="small" />
      <Button type="submit" variant="contained">
        Zoeken
      </Button>
    </Box>
  );
};
