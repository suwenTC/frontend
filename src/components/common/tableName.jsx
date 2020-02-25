import React from "react";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { tableNameStyles as styles } from "../../styles/tableNameStyles";

const TableName = ({ hideButton = false }) => {
  return (
    <Grid container style={styles.overlay} alignItems="center">
      <Grid xs={12} sm={8} item>
        <Typography variant="subtitle1" style={styles.subtitle1}>
          Landing Gear Status
        </Typography>
      </Grid>
      <Grid xs={12} sm={3} item>
        <Typography variant="caption" display="block" style={styles.caption}>
          As of Mar-31-2019
        </Typography>
      </Grid>
      <Grid xs={12} sm={1} item>
        {hideButton ? null : <MoreVertIcon color="action" />}
      </Grid>
    </Grid>
  );
};

export default TableName;
