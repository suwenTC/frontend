import React from "react";
import { Grid } from "@material-ui/core";

import DataTable from "../../common/DataTable";
import EditableTable from "../../common/EditableTable";

const EnginePRDetails = ({ data }) => {
  return (
    <Grid container spacing={2} alignItems="flex-start">
      <Grid item sm={12} md={12} lg={6}>
        <DataTable table={data.assetDetails} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <DataTable table={data.engineStatus} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <DataTable table={data.shopVisitAssumpytions} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <EditableTable table={data.scheduledShopVisit} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <EditableTable table={data.shopVisitHistory} />
      </Grid>
    </Grid>
  );
};

export default EnginePRDetails;
