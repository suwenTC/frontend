import React from "react";

import { Grid, Divider } from "@material-ui/core";

import DataTableCell from "./dataTableCell";

const DataTableBody = ({ data }) => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Grid container spacing={2}>
          {data.length !== 0
            ? data.map((e, index) => (
                <Grid key={index} xs={e.span[0]} sm={e.span[1]} item>
                  <Divider />
                  <DataTableCell
                    overline={e.label}
                    data={e.value}
                    captions={e.caption}
                  />
                </Grid>
              ))
            : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DataTableBody;
