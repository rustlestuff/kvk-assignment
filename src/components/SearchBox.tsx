import { Dispatch, FC, SetStateAction } from "react";
import { Box, Button, TextField } from "@mui/material";

interface SearchBoxProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  search: () => Promise<void>;
}

export const SearchBox: FC<SearchBoxProps> = ({ value, onChange, search }) => {
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
        name="query"
        id="search-input"
        size="small"
        fullWidth
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <Button type="submit" variant="contained" onClick={search}>
        Zoeken
      </Button>
    </Box>
  );
};
