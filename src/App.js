import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

import "font-awesome/css/font-awesome.css";

import DataTable from "./components/common/dataTable";
import Deals from "./components/deals";
import EditableTable from "./components/common/editableTable";
import Test from "./components/pages/test";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Container maxWidth={"lg"} style={{ padding: 0 }}>
        {/*
        <Switch>
          <Route path="/deals" component={Deals} />
          <Route path="/asset/:serialNumber" component={Test} />
          <Redirect from="/" exact to="/deals" />
          <Redirect to="/not-found" />
        </Switch>
  */}
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <DataTable />
          </Grid>
          <Grid item xs={12} sm={6}>
            <EditableTable />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
