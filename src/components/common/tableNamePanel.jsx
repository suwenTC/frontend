import React from "react";

import { Grid, Typography } from "@material-ui/core";

import { tableNameStyles as styles } from "../../styles/tableNameStyles";
import DropDownList from "./dropDownList";

const TableNamePanel = ({ label, caption, buttons = [<DropDownList />] }) => {
  return (
    <Grid container style={styles.overlay} alignItems="center">
      <Grid xs={12} sm={8} item>
        <Typography variant="subtitle1" style={styles.subtitle1}>
          {label}
        </Typography>
      </Grid>
      <Grid xs={12} sm={buttons.length === 2 ? 2 : 3} item>
        <Typography variant="caption" display="block" style={styles.caption}>
          {caption}
        </Typography>
      </Grid>
      {buttons.map((button, index) => (
        <Grid key={index} xs={12} sm={1} item>
          {button}
        </Grid>
      ))}
    </Grid>
  );
};

export default TableNamePanel;
