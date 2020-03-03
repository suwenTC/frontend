import moment from "moment";
import { DATA_TABLE, EDITABLE_TABLE } from "../../../constants/index";

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

export function mapToViewModelHeader(snapShot, componentType) {
  console.log(snapShot, componentType);
  return !componentType
    ? mapToViewModelHeader_Lease(snapShot)
    : [
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

export function mapToViewModelTables(data) {
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
