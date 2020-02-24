import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const DealSummary = ({ dealName, sponsor }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} container direction="column" spacing={1}>
        <Grid item>
          <Typography
            style={{ lineHeight: "16px" }}
            variant="overline"
            display="block"
          >
            {sponsor}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              fontSize: 20,
              fontWeight: 500,
              font: "Roboto",
              lineHeight: "26px",
              letterSpacing: 0.25
            }}
          >
            {dealName}
          </Typography>
        </Grid>
      </Grid>
      <Grid xs={12} sm={4} item>
        <Typography style={{ lineHeight: "36px" }} variant="subtitle1">
          $19.00
        </Typography>
      </Grid>
      <Grid xs={12} sm={2} item>
        <Typography style={{ lineHeight: "36px" }} variant="subtitle1">
          $19.00
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DealSummary;
