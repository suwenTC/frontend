import React from "react";

import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Asset from "./asset";

const Assets = ({ dealId, assets }) => {
  return (
    <Grid container spacing={2} alignItems="center" justify="center">
      {assets.map((asset, index) => (
        <Grid key={index} item sm={3}>
          <Link key={index} to={`/asset/${dealId}/${asset.serialNumber}`}>
            <Asset asset={asset} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Assets;
