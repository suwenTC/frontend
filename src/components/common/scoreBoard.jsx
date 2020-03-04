import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

const ScoreBoard = ({ scores, title }) => {
  const renderCell = (item, span) => {
    return (
      <Grid sm={span} item>
        <Typography style={{ textAlign: "center" }} variant="subtitle1">
          {item || "N/A"}
        </Typography>
      </Grid>
    );
  };

  return (
    <Paper style={{ backgroundColor: "#eaeaea" }}>
      <Grid container direction="column" spacing={2}>
        <Grid sm={12} item>
          {title && renderCell(title)}
        </Grid>

        {scores.map((item, index) => (
          <Grid key={index} sm={12} item>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {renderCell(item.label, 2)}
              {renderCell(item.content(item.value), 8)}
              {renderCell(item.value && Math.round(item.value / 10, 2), 2)}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <br />
    </Paper>
  );
};

export default ScoreBoard;
