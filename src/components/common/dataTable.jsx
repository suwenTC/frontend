import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TableNamePanel from "./TableNamePanel";
import DataTableBody from "./DataTableBody";

import { dataTableStyles as styles } from "../../styles/dataTableStyles";
import ScoreBoard from "./ScoreBoard";

class DataTable extends Component {
  render() {
    const { table, scores, button } = this.props;

    return (
      <Paper style={styles.rectangle13}>
        <Grid container direction="column" spacing={1}>
          <Grid xs={12} item>
            <TableNamePanel
              label={table.label}
              caption={table.caption}
              button={button}
            />
          </Grid>

          <Grid xs={12} item>
            {<DataTableBody data={table.data} />}
          </Grid>

          {scores ? (
            <Grid xs={12} item>
              {<ScoreBoard />}
            </Grid>
          ) : null}
        </Grid>
      </Paper>
    );
  }
}

export default DataTable;
