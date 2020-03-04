import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";

import { DATA_TABLE, EDITABLE_TABLE } from "../../../constants/index";
import BorderLinearProgress from "./../../common/BroderLinearProgressBar";

function mapToViewModelHeader_Lease(snapShot) {
  return [
    { label: snapShot.lessee, caption: null, span: [2, 8] },

    {
      label: moment(snapShot.startDate).format("MMM-DD-YYYY"),
      caption: "Start Date",
      span: [3, 1]
    },
    {
      label: moment(snapShot.startDate).format("MMM-DD-YYYY"),
      caption: "End Date",
      span: [3, 1]
    },
    {
      label: `$${snapShot.rent}/m`,
      caption: "Lease Rent",
      span: [2, 1]
    },
    {
      label: snapShot.leaseType,
      caption: null,
      span: [2, 1]
    }
  ];
}

function mapToViewModelHeader_assetSummary(snapShot) {
  return [
    { label: snapShot.series, caption: snapShot.operator, span: [3, 9] },
    {
      label: snapShot.buildYear,
      caption: "Year of Build",
      span: [2, 1]
    },
    {
      label: snapShot.flightHours,
      caption: "Total Flight Hours",
      span: [2, 1]
    },
    {
      label: snapShot.flightCycles,
      caption: "Total Flight Cycles",
      span: [2, 1]
    }
  ];
}

function mapToViewModelHeader_aircraftComponent(snapShot) {
  return [
    { label: snapShot.name, caption: null, span: [2, 7] },
    {
      label: snapShot.status_FlightHours,
      caption: "Hours Since",
      span: [2, 1]
    },
    {
      label: snapShot.status_FlightCycle,
      caption: "Cycles Since",
      span: [2, 1]
    },
    {
      label: snapShot.status_Days,
      caption: "Days Since",
      span: [2, 1]
    },
    {
      label: snapShot.status_ActiveHours,
      caption: "Hours Since",
      span: [2, 1]
    },
    {
      label: moment(snapShot.status_AsOfDate).format("MMM-DD-YYYY"),
      caption: "As of Date",
      span: [2, 1]
    }
  ];
}

export function mapToViewModelHeader(snapShot, componentType) {
  return !componentType
    ? mapToViewModelHeader_Lease(snapShot)
    : componentType === "AssetSummary"
    ? mapToViewModelHeader_assetSummary(snapShot)
    : mapToViewModelHeader_aircraftComponent(snapShot);
}

export function mapToViewModel_Summary(data, APUModel) {
  return {
    assetDetails: {
      label: "Asset Details",
      caption: null,
      tableType: DATA_TABLE,
      data: [
        {
          label: "ENGINE MODEL",
          value: data.valuation.EngineSubSeries,
          captions: [],
          span: [4, 4]
        },
        {
          label: "APU MODEL",
          value: "APUModel",
          captions: [],
          span: [4, 4]
        },
        {
          label: "MTOW (LBS)",
          value: data.fleetdata.MTOW,
          captions: [],
          span: [4, 4]
        },
        {
          label: "SPECS",
          value: data.valuation.AircraftDetails.SpecAdjusters,
          captions: [],
          span: [12, 12]
        },
        {
          label: "ENGINE SERIAL NUMBER",
          value: null,
          captions: [],
          span: [12, 12]
        }
      ]
    },
    statusSinceNew: {
      label: "Status Since New",
      caption: moment(data.valuation.asOfDate).format("MMM-DD-YYYY"),
      tableType: DATA_TABLE,
      data: [
        {
          label: "TOTAL FLIGHT HOURS",
          value: data.fleetdata.totalhours,
          captions: ["Total Hours Since New"],
          span: [6, 6]
        },
        {
          label: "TOTAL FLIGHT CYCLES",
          value: data.fleetdata.totalcycles,
          captions: ["Total Cycles Since New"],
          span: [6, 6]
        }
      ]
    },
    averageOperation: {
      label: "Average Operation",
      caption: "Historical utilization - Last 12 months",
      tableType: DATA_TABLE,
      data: [
        {
          label: "FLIGHT HOURS",
          value: Math.round(data.fleetdata.last12monthhours / 12),
          captions: [],
          span: [6, 3]
        },
        {
          label: "FLIGHT CYCLES",
          value: Math.round(data.fleetdata.last12monthcycles / 12),
          captions: [],
          span: [6, 3]
        },
        {
          label: null,
          value: "Track Live",
          captions: [],
          span: [12, 12],
          content: value => (
            <Button variant="outlined" color="primary" href="#outlined-buttons">
              <AirplanemodeActiveIcon style={{ top: 1 }} />
              {value}
            </Button>
          )
        }
      ]
    },
    appraisalSummary: {
      label: "Appraisal Summary",
      caption: null,
      data: [
        {
          label: "APPRAISAL DATE",
          value: moment(data.valuation.AsOfDate).format("MMM-DD-YYYY"),
          captions: [],
          span: [4, 4]
        },
        {
          label: "CBV - HALF-LIFE",
          value: data.valuation.HalfLife.Base,
          captions: [],
          span: [4, 4]
        },

        {
          label: "CMV - HALF-LIFE",
          value: data.valuation.HalfLife.Market,
          captions: [],
          span: [4, 4]
        },
        { label: "APPRAISER", value: "Ascend", captions: [], span: [4, 4] },
        {
          label: "CBV - FULL-LIFE",
          value: data.valuation.FullLife.Base,
          captions: [],
          span: [4, 4]
        },
        {
          label: "CMV - FULL-LIFE",
          value: data.valuation.FullLife.Market,
          captions: [],
          span: [4, 4]
        },
        {
          label: "MLR",
          value: data.valuation.MonthlyLeaseRate.Market,
          captions: [],
          span: [4, 4]
        },
        {
          label: "BLR",
          value: data.valuation.MonthlyLeaseRate.Market,
          captions: [],
          span: [4, 4]
        },
        {
          label: "APPRAISAL REPORT",
          value: "Download",
          captions: [],
          span: [4, 4],
          content: value => (
            <Link to="href" style={{ color: "#64B5F6" }}>
              {value}
            </Link>
          )
        }
      ]
    },
    riskrating: {
      label: "Forward Looking Depriciation",
      caption: ["Fill it in later"],
      tableType: DATA_TABLE,
      data: [],
      scoreBoard: {
        title: null,
        scores: [
          {
            label: "1 Year",
            value: data.riskrating.VfScore1Y,
            content: value => <BorderLinearProgress value={value} />
          },
          {
            label: "3 Year",
            value: data.riskrating.VfScore3Y,
            content: value => <BorderLinearProgress value={value} />
          },
          {
            label: "5 Year",
            value: data.riskrating.VfScore5Y,
            content: value => <BorderLinearProgress value={value} />
          }
        ]
      }
    },
    fleetdistribution: {
      label: "Fleet",
      caption: ["Fill it in later"],
      tableType: DATA_TABLE,
      data: [
        {
          label: "IN SERVICE",
          value: data.fleetdistribution.IN_SERVICE,
          captions: [null],
          span: [6, 3]
        },
        {
          label: "STORAGE",
          value: data.fleetdistribution.Storage,
          captions: [null],
          span: [6, 3]
        },
        {
          label: "RETIRED",
          value: data.fleetdistribution.Retired,
          captions: [null],
          span: [6, 3]
        },
        {
          label: "ON ORDER",
          value: data.fleetdistribution.On_Order,
          captions: [null],
          span: [6, 3]
        }
      ],
      scoreBoard: {
        title: "Concentration Scores",
        scores: [
          {
            label: "Lessor",
            value: data.fleetdistribution.HHI_Lessor,
            content: value => <BorderLinearProgress value={value} />
          },
          {
            label: "Operator",
            value: data.fleetdistribution.HHI_Operator,
            content: value => <BorderLinearProgress value={value} />
          },
          {
            label: "Region",
            value: data.fleetdistribution.HHI_Region,
            content: value => <BorderLinearProgress value={value} />
          }
        ]
      }
    }
  };
}

export function mapToViewModel_AirframeChecks(data) {
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
          captions: ["Since last check"],
          span: [6, 4]
        },
        {
          label: "FLIGHT CYCLES",
          value: maintenanceStatus.sinceEvent.flightCycle,
          captions: ["Since last check"],
          span: [6, 4]
        },
        {
          label: "FLIGHT DAYS",
          value: maintenanceStatus.sinceEvent.day,
          captions: ["Since last check"],
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
          captions: ["Total since new"],
          span: [6, 6]
        },
        {
          label: "TOTAL FLIGHT CYCLES",
          value: maintenanceStatus.sinceNew.flightCycle,
          captions: ["Total since new"],
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
          captions: [null],
          span: [6, 3]
        },
        {
          label: "COST",
          value: null,
          captions: [null],
          span: [6, 3]
        },
        {
          label: "IS OVERHAUL",
          value: null,
          captions: [null],
          span: [6, 3]
        },
        {
          label: "RUN NUMBER",
          value: null,
          captions: [null],
          span: [6, 3]
        }
      ]
    },
    shopVisitAssumptions: {
      label: "Shop Visit Assumptions",
      captions: [moment(maintenanceStatus.statusAsOf).format("MMM-DD-YYYY")],
      tableType: EDITABLE_TABLE,
      data: []
    }
  };
}

export function mapToViewModel_Engine(data) {}
