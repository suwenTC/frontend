import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

import BorderLinearProgress from "./BroderLinearProgressBar";

const ScoreBoard = () => {
  const title = "Concentration Score";

  const fleetScores = [
    {
      label: "Lessor",
      value: 40,
      content: value => <BorderLinearProgress value={value} />
    },
    {
      label: "Operator",
      value: 55,
      content: value => <BorderLinearProgress value={value} />
    },
    {
      label: "Region",
      value: 82,
      content: value => <BorderLinearProgress value={value} />
    }
  ];
  const renderCell = (item, span) => {
    return (
      <Grid sm={span} item>
        <Typography style={{ textAlign: "center" }} variant="subtitle1">
          {item}
        </Typography>
      </Grid>
    );
  };

  return (
    <Paper style={{ backgroundColor: "#eaeaea" }}>
      <Grid container direction="column" spacing={2}>
        <Grid sm={12} item>
          {renderCell(title)}
        </Grid>

        {fleetScores.map((item, index) => (
          <Grid key={index} sm={12} item>
            <Grid container justify="center" alignItems="center" spacing={2}>
              {renderCell(item.label, 2)}
              {renderCell(item.content(item.value), 8)}
              {renderCell(item.value / 10, 2)}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <br />
    </Paper>
  );
};

export default ScoreBoard;
