import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TableName from "./tableName";
import DataTableBody from "./dataTableBody";

import { dataTableStyles as styles } from "../../styles/dataTableStyles";

class DataTable extends Component {
  render() {
    return (
      <Paper style={styles.rectangle13}>
        <Grid container direction="column" spacing={1}>
          <Grid xs={12} item>
            <TableName />
          </Grid>

          <Grid xs={12} item>
            <DataTableBody />
          </Grid>
          <br />
        </Grid>
      </Paper>
    );
  }
}

export default DataTable;
