import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TableNamePanel from "./TableNamePanel";
import DataTableBody from "./DataTableBody";

import { dataTableStyles as styles } from "../../styles/dataTableStyles";
import ScoreBoard from "./ScoreBoard";

class DataTable extends Component {
  render() {
    const { data, scoreBoard, button } = this.props;

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

          {scoreBoard && (
            <Grid xs={12} item>
              {
                <ScoreBoard
                  scores={scoreBoard.scores}
                  title={scoreBoard.title}
                />
              }
            </Grid>
          )}
        </Grid>
      </Paper>
    );
  }
}

export default DataTable;
