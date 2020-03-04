import React from "react";
import { Grid } from "@material-ui/core";

import DataTable from "../../common/DataTable";
import EditableTable from "../../common/EditableTable";

const LandingGearDetails = ({ data }) => {
  return (
    <Grid container spacing={2} alignItems="flex-start">
      <Grid item sm={12} md={12} lg={6}>
        <DataTable data={data.status} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <DataTable data={data.overhaulHistory} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <DataTable data={data.shopVisitAssumpytions} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <EditableTable data={data.scheduledShopVisit} />
      </Grid>
    </Grid>
  );
};

export default LandingGearDetails;
