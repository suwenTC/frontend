import { LinearProgress, withStyles } from "@material-ui/core";
import React from "react";

const BorderLinearProgress = ({ value }) => {
  const GREEN = "#1f9f04";
  const YELLOW = "#e6cd53";
  const RED = "#ff6c5c";
  const barColor = value >= 60 ? GREEN : value <= 40 ? RED : YELLOW;

  const CustomProgressBar = withStyles({
    root: {
      height: 10,
      borderRadius: 20,
      backgroundColor: "#ffffff"
    },
    bar: {
      borderRadius: 20,
      backgroundColor: barColor
    }
  })(LinearProgress);

  return <CustomProgressBar variant="determinate" value={value} />;
};

export default BorderLinearProgress;
