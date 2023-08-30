import { Container, List } from "@mui/material";

import logo from "./logo.svg";
import { SearchBox } from "./components/SearchBox";

function App() {
  return (
    <Container maxWidth="lg">
      <header>
        <img src={logo} alt="logo" style={{ height: "50px" }} />
      </header>
      <SearchBox />
      <main>
        <List>Resultaten</List>
      </main>
    </Container>
  );
}

export default App;
