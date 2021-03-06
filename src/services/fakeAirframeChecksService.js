import moment from "moment";

import { DATA_TABLE, EDITABLE_TABLE } from "../constants";

export function getAirframeChecks() {
  return [
    {
      checkName: "8Y Check",
      genericMxInfo: [
        {
          interval: {
            flightHour: null,
            flightCycle: null,
            activeHour: null,
            day: 2880
          },
          downtime: 60,
          cost: {
            cost: 780000,
            costDate: "2019-09-01T00:00:00+00:00",
            costEscalation: 0.03
          },
          isOverHaul: true,
          isFirstRun: false,
          asOfDate: "2020-01-09T17:02:33+00:00"
        }
      ],
      downtimeOverride: [],
      intervalOverride: [],
      costOverride: [],
      overrides: null,
      shopVisitHistory: [
        {
          id: 0,
          sinceNew: {
            flightHour: 29173,
            flightCycle: 10801,
            activeHour: null,
            day: 2813
          },
          startDate: "2007-12-14T05:00:00+00:00",
          endDate: "0001-01-01T00:00:00+00:00",
          isOverhaul: true,
          shopCost: null
        }
      ],
      maintenanceStatus: [
        {
          statusAsOf: "2018-05-31T23:59:59.999+00:00",
          sinceNew: {
            flightHour: 63359.85,
            flightCycle: 21637,
            activeHour: null,
            day: 6634
          },
          sinceEvent: {
            flightHour: 4487,
            flightCycle: 1784,
            activeHour: null,
            day: 905
          },
          isFirstRun: false
        }
      ]
    },
    {
      checkName: "10Y Check",
      genericMxInfo: [
        {
          interval: {
            flightHour: null,
            flightCycle: null,
            activeHour: null,
            day: 3650
          },
          downtime: 60,
          cost: {
            cost: 390000,
            costDate: "2019-01-01T00:00:00+00:00",
            costEscalation: 0.03
          },
          isOverHaul: true,
          isFirstRun: false,
          asOfDate: "2020-01-09T17:02:33+00:00"
        }
      ],
      downtimeOverride: [],
      intervalOverride: [],
      costOverride: [],
      overrides: null,
      shopVisitHistory: [],

      maintenanceStatus: [
        {
          statusAsOf: "2018-05-31T23:59:59.999+00:00",
          sinceNew: {
            flightHour: 63359.85,
            flightCycle: 21637,
            activeHour: null,
            day: 6634
          },
          sinceEvent: {
            flightHour: 25368,
            flightCycle: 7641,
            activeHour: null,
            day: 2958
          },
          isFirstRun: false
        }
      ]
    },
    {
      checkName: "12Y Check",
      genericMxInfo: [
        {
          interval: {
            flightHour: null,
            flightCycle: null,
            activeHour: null,
            day: 4380
          },
          downtime: 60,
          cost: {
            cost: 468000,
            costDate: "2019-01-01T00:00:00+00:00",
            costEscalation: 0.03
          },
          isOverHaul: true,
          isFirstRun: false,
          asOfDate: "2020-01-09T17:02:33+00:00"
        }
      ],
      downtimeOverride: [],
      intervalOverride: [],
      costOverride: [],
      overrides: null,
      shopVisitHistory: [],

      maintenanceStatus: [
        {
          statusAsOf: "2018-05-31T23:59:59.999+00:00",
          sinceNew: {
            flightHour: 123.85,
            flightCycle: 21637,
            activeHour: null,
            day: 6634
          },
          sinceEvent: {
            flightHour: 22732,
            flightCycle: 6668,
            activeHour: null,
            day: 2733
          },
          isFirstRun: false
        }
      ]
    },
    {
      checkName: "C Check",
      genericMxInfo: [
        {
          interval: {
            flightHour: null,
            flightCycle: 7500,
            activeHour: null,
            day: 720
          },
          downtime: 15,
          cost: {
            cost: 275000,
            costDate: "2019-09-01T00:00:00+00:00",
            costEscalation: 0.03
          },
          isOverHaul: true,
          isFirstRun: false,
          asOfDate: "2020-01-09T17:02:33+00:00"
        }
      ],
      downtimeOverride: [],
      intervalOverride: [],
      costOverride: [],
      overrides: null,
      shopVisitHistory: [],

      maintenanceStatus: [
        {
          statusAsOf: "2018-05-31T23:59:59.999+00:00",
          sinceNew: {
            flightHour: 321.85,
            flightCycle: 21637,
            activeHour: null,
            day: 6634
          },
          sinceEvent: {
            flightHour: 0,
            flightCycle: 0,
            activeHour: null,
            day: 0
          },
          isFirstRun: false
        }
      ]
    }
  ];
}

function mapToViewModelHeader(checkName, maintenanceStatus) {
  return [
    { label: checkName, caption: null, span: 6 },
    {
      label: maintenanceStatus.sinceEvent.flightHour,
      caption: "Hours Since",
      span: 1
    },
    {
      label: maintenanceStatus.sinceEvent.flightCycle,
      caption: "Cycles Since",
      span: 1
    },
    {
      label: maintenanceStatus.sinceEvent.day,
      caption: "Days Since",
      span: 1
    },
    {
      label: maintenanceStatus.sinceEvent.activeHour,
      caption: "Hours Since",
      span: 1
    },
    {
      label: moment(maintenanceStatus.statusAsOf).format("MMM-DD-YYYY"),
      caption: "As of Date",
      span: 2
    }
  ];
}

function mapToViewModelTables(maintenanceStatus) {
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

export function mapToViewModel(airframeCheck) {
  let viewModel = {
    label: "Airframe Checks"
  };
  const maintenanceStatus = airframeCheck.maintenanceStatus[0];
  const header = mapToViewModelHeader(
    airframeCheck.checkName,
    maintenanceStatus
  );

  const details = mapToViewModelTables(maintenanceStatus);
  viewModel.header = header;
  viewModel.details = details;

  return viewModel;
}
