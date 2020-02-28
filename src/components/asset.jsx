import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { assetStyles } from "../styles/assetStyles";

const Asset = ({ asset }) => {
  const classes = assetStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="subtitle1" className={classes.subtitle1}>
          <i className="fa fa-plane fa-lg" aria-hidden="true" />
          &nbsp;{asset.subseries}
        </Typography>
        <Typography variant="body2" className={classes.body2}>
          {asset.operator}
        </Typography>

        <Typography variant="caption" className={classes.caption}>
          <span className={classes.captionLeft}>{asset.serialNumber}</span>
        </Typography>

        <Typography variant="caption" className={classes.caption}>
          <span className={classes.captionRight}>OY-JZI</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Asset;
