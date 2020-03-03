import React from "react";
import DataTable from "../../common/DataTable";
import EditableTable from "../../common/EditableTable";
import { Grid } from "@material-ui/core";

const AssetSummary = ({ details }) => {
  return (
    <Grid container spacing={2} alignItems="flex-start">
      <Grid item sm={12} md={12} lg={6}>
        <DataTable data={details.assetDetails} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <DataTable data={details.scoreBoard} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <DataTable data={details.scoreBoard} />
      </Grid>

      <Grid item sm={12} md={12} lg={6}>
        <EditableTable data={details.scheduledShopVisit} />
      </Grid>
    </Grid>
  );
};

export default AssetSummary;
