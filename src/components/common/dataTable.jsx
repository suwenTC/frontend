import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TableNamePanel from "./tableNamePanel";
import DataTableBody from "./dataTableBody";

import { dataTableStyles as styles } from "../../styles/dataTableStyles";
import ScoreBoard from "./scoreBoard";

class DataTable extends Component {
  render() {
    const { data, scores, button } = this.props;

    return (
      <Paper style={styles.rectangle13}>
        <Grid container direction="column" spacing={1}>
          <Grid xs={12} item>
            <TableNamePanel
              label={data.label}
              caption={data.caption}
              button={button}
            />
          </Grid>

          <Grid xs={12} item>
            {<DataTableBody data={data.data} />}
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
