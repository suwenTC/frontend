import React from "react";

import Grid from "@material-ui/core/Grid";

import DataTableCell from "./dataTableCell";

const DataTableBody = () => {
  const test = [1, 2, 3, 4, 5, 6];
  return (
    <Grid container spacing={2}>
      {test.map(e => (
        <Grid key={e} sm={4} xs={6} item>
          <DataTableCell
            overline={"TOTAL FH"}
            data={41234}
            captions={["Total hours since new"]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default DataTableBody;
