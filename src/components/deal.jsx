import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Assets from "./assets";
import DealSummary from "./dealSummary";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 960,
    maxHeight: 59,
    textAlign: "left"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

const Deal = ({ deal }) => {
  const { dealName, sponsor, stage, operator, assets } = deal;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <DealSummary dealName={dealName} sponsor={sponsor} />
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Assets assets={assets} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Deal;
