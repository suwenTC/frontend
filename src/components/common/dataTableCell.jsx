import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { dataTableCellStyles } from "../../styles/dataTableCellStyles";

const DataTableCell = ({ overline, data, captions, content }) => {
  const classes = dataTableCellStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography
        variant="overline"
        display="block"
        className={classes.overline}
      >
        {overline}
      </Typography>

      {content ? (
        content(data)
      ) : (
        <Typography variant="subtitle1" className={classes.subtitle1}>
          {data ? data : "N/A"}
        </Typography>
      )}

      {captions.map((caption, index) => (
        <Typography
          key={index}
          variant="caption"
          display="block"
          className={classes.caption}
        >
          {caption}
        </Typography>
      ))}
    </Paper>
  );
};

export default DataTableCell;
