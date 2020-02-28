import React from "react";

import { ExpandMore } from "@material-ui/icons";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Paper
} from "@material-ui/core";
import moment from "moment";

import { sectionCardStyles } from "../styles/assetComponentStyles";
import EditableTable from "./common/editableTable";
import DataTable from "./common/dataTable";

import AssetComponentHeader from "./assetComponentHeader";
import { DATA_TABLE, EDITABLE_TABLE } from "./constants";

const mapToViewModel = data => {
  const maintenanceStatus = data.maintenanceStatus[0];

  return {
    checkStatus: {
      label: "Check Status",
      caption: moment(maintenanceStatus.statusAsOf).format("MMM-DD-YYYY"),
      tableType: DATA_TABLE,
      data: [
        {
          label: "FLIGHT HOURS",
          value: maintenanceStatus.sinceEvent.flightHour,
          caption: ["Since last check"],
          span: [6, 4]
        },
        {
          label: "FLIGHT CYCLES",
          value: maintenanceStatus.sinceEvent.flightCycle,
          caption: ["Since last check"],
          span: [6, 4]
        },
        {
          label: "FLIGHT DAYS",
          value: maintenanceStatus.sinceEvent.day,
          caption: ["Since last check"],
          span: [6, 4]
        }
      ]
    },
    checkHistory: {
      label: "Check History",
      caption: moment(maintenanceStatus.statusAsOf).format("MMM-DD-YYYY"),
      tableType: DATA_TABLE,
      data: [
        {
          label: "TOTAL FLIGHT HOURS",
          value: maintenanceStatus.sinceNew.flightHour,
          caption: ["Total since new"],
          span: [6, 6]
        },
        {
          label: "TOTAL FLIGHT CYCLES",
          value: maintenanceStatus.sinceNew.flightCycle,
          caption: ["Total since new"],
          span: [6, 6]
        }
      ]
    },
    scheduledShopVisit: {
      label: "Scheduled Shop Visit",
      caption: null,
      tableType: DATA_TABLE,
      data: [
        {
          label: "DOWN DAYS",
          value: null,
          caption: [null],
          span: [6, 3]
        },
        {
          label: "COST",
          value: null,
          caption: [null],
          span: [6, 3]
        },
        {
          label: "IS OVERHAUL",
          value: null,
          caption: [null],
          span: [6, 3]
        },
        {
          label: "RUN NUMBER",
          value: null,
          caption: [null],
          span: [6, 3]
        }
      ]
    },
    shopVisitAssumptions: {
      label: "Shop Visit Assumptions",
      caption: moment(maintenanceStatus.statusAsOf).format("MMM-DD-YYYY"),
      tableType: EDITABLE_TABLE,
      data: []
    }
  };
};

const AssetComponent = ({ data }) => {
  const tables = mapToViewModel(data);

  const classes = sectionCardStyles();

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
          style={{ border: "1px solid rgba(0, 0, 0, .125)" }}
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <AssetComponentHeader data={data} />
        </ExpansionPanelSummary>

        <ExpansionPanelDetails
          style={{
            border: "1px solid rgba(0, 0, 0, .125)",
            backgroundColor: "#f6f6f6"
          }}
        >
          <Grid container spacing={2} alignItems="flex-start">
            {Object.keys(tables).map((key, index) =>
              tables[key].tableType === DATA_TABLE ? (
                <Grid key={index} item sm={12} md={12} lg={6}>
                  <DataTable data={tables[key]} />
                </Grid>
              ) : (
                <Grid key={index} item sm={12} md={12} lg={6}>
                  <EditableTable />
                </Grid>
              )
            )}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
};

export default AssetComponent;

{
  /* <Grid item sm={12} md={12} lg={6}>
              <DataTable
                subtitle="Check Status"
                caption="As of Mar-31-2019"
                scores={"test"}
              />
            </Grid>
            <Grid item sm={12} md={12} lg={6}>
              <DataTable subtitle="Check History" caption="As of Mar-31-2019" />
            </Grid>
            <Grid item sm={12} md={12} lg={6}>
              <EditableTable />
            </Grid> */
}
