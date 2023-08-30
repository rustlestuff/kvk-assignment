import { Fragment, useCallback, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import { Company } from "./interfaces/Company";
import { instance } from "./api/CompanyAPI";
import { SearchBox } from "./components/SearchBox";
import { AppBar } from "./components/AppBar";

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [query, setQuery] = useState("");

  async function getCompanies() {
    const { data: companies } = await instance.get("companies");
    setCompanies(companies.data);
  }

  const filterCompanies = useCallback(async () => {
    const { data: companies } = await instance.get("companies", {
      params: {
        search: query,
      },
    });
    setCompanies(companies.data);
  }, [query]);

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <Fragment>
      <AppBar />
      <Container maxWidth="lg" disableGutters>
        <SearchBox value={query} onChange={setQuery} search={filterCompanies} />
        <main>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <List>
              {companies.map((company) => (
                <ListItem key={company.id}>
                  <ListItemAvatar>
                    <Avatar alt={`${company.name} logo`} src={company.logo} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={company.name}
                    secondary={company.city}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </main>
      </Container>
    </Fragment>
  );
}

export default App;
