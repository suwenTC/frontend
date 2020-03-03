import React from "react";
import { Grid, Box, CircularProgress } from "@material-ui/core";

import "../styles.css";

const LoadingPanel = () => {
  return (
    <Box flexGrow={1} className="loadingPanel">
      <Grid container>
        <Grid item sm={12}>
          <CircularProgress />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoadingPanel;
