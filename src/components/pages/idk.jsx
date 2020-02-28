import React from "react";
import AssetComponent from "../assetComponent";
import { getAirframeChecks } from "./../../services/fakeAirframeChecksService";
import { Grid } from "@material-ui/core";

const IDK = props => {
  const airframeChecks = getAirframeChecks();
  console.log(props);
  return (
    <Grid container direction="column" spacing={2}>
      {airframeChecks.map((airframeCheck, index) => (
        <Grid key={index} item>
          <AssetComponent data={airframeCheck} />
        </Grid>
      ))}
    </Grid>
  );
};

export default IDK;
