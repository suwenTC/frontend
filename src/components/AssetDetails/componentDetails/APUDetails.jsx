import React from "react";
import DataTable from "../../common/DataTable";
import EditableTable from "../../common/EditableTable";
import { Grid } from "@material-ui/core";

const APUDetails = ({ data }) => {
  return (
    <Grid container spacing={2} alignItems="flex-start">
      <Grid item sm={12} md={12} lg={6}>
        <DataTable table={data.status} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <DataTable table={data.shopVisitHistory} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <DataTable table={data.shopVisitAssumpytions} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <EditableTable table={data.scheduledShopVisit} />
      </Grid>
    </Grid>
  );
};

export default APUDetails;
