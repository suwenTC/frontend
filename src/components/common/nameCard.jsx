import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { assetCardStyles } from "../../styles/assetCardStyles";

const NameCard = () => {
  const classes = assetCardStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="subtitle1" className={classes.subtitle1}>
          <i className="fa fa-plane fa-lg" aria-hidden="true" />
          &nbsp;737-800
        </Typography>
        <Typography variant="body2" className={classes.body2}>
          Jet Time
        </Typography>
        <Typography variant="caption" className={classes.caption}>
          <span className={classes.captionLeft}>30643</span>
          <span className={classes.captionRight}>OY-JZI</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NameCard;
