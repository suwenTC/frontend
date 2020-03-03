import React, { Component } from "react";
import { ExpandMore } from "@material-ui/icons";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Box
} from "@material-ui/core";

import AssetSummary from "./componentDetails/AssetSummary";
import AirframeCheckDetails from "./componentDetails/AirframeCheckDetails";
import APUDetails from "./componentDetails/APUDetails";
import EnginePRDetails from "./componentDetails/EnginePRDetails";
import LandingGearDetails from "./componentDetails/LandingGearDetails";
import LoadingPanel from "./componentDetails/LoadingPanel";

import AssetComponentHeader from "./AssetComponentHeader";

import { mapToViewModelTables } from "./viewModels/getViewModels";
import { getAirframeChecks } from "./viewModels/fakeAirframeChecksService";

import "./styles.css";

class AssetComponent extends Component {
  state = { expanded: false, data: null };

  handleChange = panel => (event, isExpanded) => {
    this.setState({ expanded: isExpanded ? panel : false });

    setTimeout(() => {
      const data = mapToViewModelTables(getAirframeChecks()[0]);

      this.setState({ data });
    }, 1600);
  };

  renderExpansionPanelDetails = (componentType = null, data = null) => {
    switch (componentType) {
      case "AssetSummary":
        return <AssetSummary data={data} />;
      case "AirframeCheck":
        return <AirframeCheckDetails data={data} />;
      case "APU":
        return <APUDetails data={data} />;
      case "EnginePR":
        return <EnginePRDetails data={data} />;
      case "LandingGear":
        return <LandingGearDetails data={data} />;
      case "Lease":
        return null;
      default:
        return <LoadingPanel />;
    }
  };

  render() {
    const classes = {};
    const { componentType, name, snapShot } = this.props;
    const panelName = name;

    return (
      <Box flexGrow={1} className="header-root">
        <ExpansionPanel
          expanded={this.state.expanded === panelName}
          onChange={this.handleChange(panelName)}
        >
          <ExpansionPanelSummary
            className="panel-border"
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <AssetComponentHeader headerInfo={snapShot} />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="panel-border panel-background">
            {this.state.data
              ? this.renderExpansionPanelDetails(componentType, this.state.data)
              : this.renderExpansionPanelDetails()}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Box>
    );
  }
}

export default AssetComponent;
