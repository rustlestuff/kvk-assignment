import { Box, Button, Container, List, TextField } from "@mui/material";

import logo from "./logo.svg";

function App() {
  return (
    <Container maxWidth="lg">
      <header>
        <img src={logo} alt="logo" style={{ height: "50px" }} />
      </header>
      <Box component="section" display="flex" gap={1}>
        <TextField type="search" name="search" id="search-input" size="small" />
        <Button type="submit" variant="contained">
          Zoeken
        </Button>
      </Box>
      <main>
        <List>Resultaten</List>
      </main>
    </Container>
  );
}

export default App;
