import { useEffect, useState } from "react";
import { Container, List, ListItem, ListItemText } from "@mui/material";

import logo from "./logo.svg";
import { Company } from "./interfaces/Company";
import { instance } from "./api/CompanyAPI";
import { SearchBox } from "./components/SearchBox";

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);

  async function getCompanies() {
    const { data: companies } = await instance.get("companies");
    setCompanies(companies.data);
  }

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <Container maxWidth="lg">
      <header>
        <img src={logo} alt="logo" style={{ height: "50px" }} />
      </header>
      <SearchBox />
      <main>
        <List>
          {companies.map((company) => (
            <ListItem key={company.id} disablePadding>
              <ListItemText primary={company.name} />
            </ListItem>
          ))}
        </List>
      </main>
    </Container>
  );
}

export default App;
