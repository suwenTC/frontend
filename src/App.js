import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";

import Deals from "./components/pages/deals";

import "./App.css";
import "./index.css";
import "font-awesome/css/font-awesome.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/seravekFontTheme";
import AssetDetails from "./components/pages/AssetDetails";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth={"xl"} style={{ padding: 0 }}>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <Switch>
                <Route path="/deals" component={Deals} />
                <Route
                  path="/asset/:dealNumber/:serialNumber"
                  component={AssetDetails}
                />
                <Route path="/not-fount" />
                <Redirect from="/" exact to="/deals" />
                <Redirect to="/not-found" />
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
