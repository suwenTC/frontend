import React from "react";
import { Grid } from "@material-ui/core";

import DataTable from "../../common/DataTable";
import EditableTable from "../../common/EditableTable";

const AirframeCheckDetails = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={12} lg={6}>
        <DataTable table={data.checkStatus} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <DataTable table={data.checkHistory} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <EditableTable table={data.scheduledShopVisit} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <DataTable table={data.shopVisitAssumptions} />
      </Grid>
    </Grid>
  );
};

export default AirframeCheckDetails;
