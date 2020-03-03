import React from "react";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";

import Assets from "./Assets";
import DealSummary from "./DealSummary";

import { dealExpansionPanelStyles } from "../styles/dealExpansionPanelStyles";

const Deal = ({ dealId, deal }) => {
  const classes = dealExpansionPanelStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Paper className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.panelSummary}
        >
          <DealSummary deal={deal} />
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.panelDetails}>
          <Assets dealId={dealId} assets={deal.assets} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
};

export default Deal;
