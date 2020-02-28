import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { sectionCardStyles } from "../styles/assetComponentStyles";

import moment from "moment";

const mapToViewModel = data => {
  const maintenanceStatus = data.maintenanceStatus[0];

  return [
    { label: data.checkName, caption: null, span: 6 },
    {
      label: maintenanceStatus.sinceEvent.flightHour,
      caption: "Hours Since",
      span: 1
    },
    {
      label: maintenanceStatus.sinceEvent.flightCycle,
      caption: "Cycles Since",
      span: 1
    },
    { label: maintenanceStatus.sinceEvent.day, caption: "Days Since", span: 1 },
    {
      label: maintenanceStatus.sinceEvent.activeHour,
      caption: "Hours Since",
      span: 1
    },
    {
      label: moment(maintenanceStatus.statusAsOf).format("MMM-DD-YYYY"),
      caption: "As of Date",
      span: 2
    }
  ];
};

const AssetComponentHeader = ({ data }) => {
  const classes = sectionCardStyles();

  const component = mapToViewModel(data);
  return (
    <Grid container spacing={2}>
      {component.map((data, index) =>
        index === 0 ? (
          <Grid key={index} item sm={data.span}>
            <Typography variant="subtitle1" className={classes.subtitle1}>
              {data.label}
            </Typography>
          </Grid>
        ) : (
          <Grid key={index} item sm={data.span}>
            <Typography variant="subtitle2" className={classes.subtitle2}>
              {data.label !== null ? data.label : "N/A"}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={classes.caption}
            >
              {data.caption}
            </Typography>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default AssetComponentHeader;
