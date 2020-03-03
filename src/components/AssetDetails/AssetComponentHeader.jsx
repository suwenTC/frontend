import React from "react";
import { Grid, Typography } from "@material-ui/core";

import "./styles.css";

const AssetComponentHeader = ({ headerInfo }) => {
  console.log(headerInfo);

  return (
    <Grid container spacing={1} justify="flex-end">
      {headerInfo.map((item, index) =>
        index === 0 ? (
          <Grid key={index} item sm={item.span[0]} lg={item.span[1]}>
            <Typography variant="subtitle1" className="header-subtitle1">
              {item.label}
            </Typography>
          </Grid>
        ) : (
          <Grid key={index} item sm={item.span[0]} lg={item.span[1]}>
            <Typography variant="subtitle2" className="header-subtitle2">
              {item.label !== null && item.label ? item.label : "N/A"}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className="header-caption"
            >
              {item.caption}
            </Typography>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default AssetComponentHeader;
