import React from "react";

import { Chip, Grid, Typography } from "@material-ui/core";
import { dealSummaryStyles } from "../styles/dealSummaryStyles";

const DealSummary = ({ deal }) => {
  const classes = dealSummaryStyles();
  const { dealName, sponsor, operator, assets, stage, icon } = deal;
  return (
    <Grid container>
      <Grid item xs={12} sm={5} container spacing={1}>
        <Grid item>
          <Typography variant="overline" className={classes.sponsor}>
            {sponsor}
          </Typography>
          <Typography variant="subtitle1" className={classes.dealName}>
            {dealName}
          </Typography>
        </Grid>
      </Grid>
      <Grid xs={12} sm={5} item>
        <Grid container alignItems="center" spacing={1}>
          <Grid item sm={2}>
            <Typography variant="subtitle1">{icon}</Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography variant="subtitle1" className={classes.assetSeries}>
              737-800
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={classes.assetSeries}
            >
              {operator}
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <div className={classes.oval}>
              <Typography variant="subtitle1" className={classes.assetCount}>
                +{assets.length}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sm={2} item>
        <Typography variant="subtitle1">
          <Chip className={classes.chip} label={stage} />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DealSummary;
