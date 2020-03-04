import React from "react";
import DataTable from "../../common/DataTable";
import { Grid } from "@material-ui/core";

const AssetSummary = ({ data }) => {
  const display = { display: "grid" };

  const renderTable = (data, scoreBoard = null) => (
    <Grid item style={display} sm={12} md={12} lg={6}>
      <DataTable data={data} scoreBoard={scoreBoard} />
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      {renderTable(data.assetDetails)}
      {renderTable(data.statusSinceNew)}
      {renderTable(data.averageOperation)}
      {renderTable(data.riskrating, data.riskrating.scoreBoard)}
      {renderTable(data.appraisalSummary)}
      {renderTable(data.fleetdistribution, data.fleetdistribution.scoreBoard)}
    </Grid>
  );
};

export default AssetSummary;
