const landingGearChecks = [
  {
    position: "Left Main",
    partNumber: null,
    serialNumber: null,
    genericMxInfo: [
      {
        interval: {
          flightHour: null,
          flightCycle: 21000,
          activeHour: null,
          day: 3600
        },
        downtime: 30,
        cost: {
          cost: 173333.33333333334,
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
    expectedUtilizationByDate: [
      {
        utilization: {
          flightHour: 6.8988173455979,
          flightCycle: 3.44940867279895,
          activeHour: 2.95663600525624,
          day: null
        },
        startDate: "2019-12-31T00:00:00+00:00",
        endDate: "2023-03-31T23:59:59.999+00:00"
      },
      {
        utilization: {
          flightHour: 6.8988173455979,
          flightCycle: 3.44940867279895,
          activeHour: 2.95663600525624,
          day: null
        },
        startDate: "2017-11-21T00:00:00+00:00",
        endDate: "2018-12-30T23:59:59.999+00:00"
      }
    ],
    maintenanceStatus: [
      {
        statusAsOf: "2018-05-31T23:59:59.999+00:00",
        sinceNew: {
          flightHour: 62662.77,
          flightCycle: 21247,
          activeHour: null,
          day: 6634
        },
        sinceEvent: {
          flightHour: 25368,
          flightCycle: 7641,
          activeHour: null,
          day: 3009
        },
        isFirstRun: false
      }
    ]
  },
  {
    position: "Right Main",
    partNumber: null,
    serialNumber: null,
    genericMxInfo: [
      {
        interval: {
          flightHour: null,
          flightCycle: 21000,
          activeHour: null,
          day: 3600
        },
        downtime: 30,
        cost: {
          cost: 173333.33333333334,
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
    expectedUtilizationByDate: [
      {
        utilization: {
          flightHour: 6.8988173455979,
          flightCycle: 3.44940867279895,
          activeHour: 2.95663600525624,
          day: null
        },
        startDate: "2017-11-21T00:00:00+00:00",
        endDate: "2018-12-30T23:59:59.999+00:00"
      },
      {
        utilization: {
          flightHour: 6.8988173455979,
          flightCycle: 3.44940867279895,
          activeHour: 2.95663600525624,
          day: null
        },
        startDate: "2019-12-31T00:00:00+00:00",
        endDate: "2023-03-31T23:59:59.999+00:00"
      }
    ],
    maintenanceStatus: [
      {
        statusAsOf: "2018-05-31T23:59:59.999+00:00",
        sinceNew: {
          flightHour: 62662.77,
          flightCycle: 21247,
          activeHour: null,
          day: 6634
        },
        sinceEvent: {
          flightHour: 25368,
          flightCycle: 7641,
          activeHour: null,
          day: 3009
        },
        isFirstRun: false
      }
    ]
  },
  {
    position: "Nose",
    partNumber: null,
    serialNumber: null,
    genericMxInfo: [
      {
        interval: {
          flightHour: null,
          flightCycle: 21000,
          activeHour: null,
          day: 3600
        },
        downtime: 30,
        cost: {
          cost: 173333.33333333334,
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
    expectedUtilizationByDate: [
      {
        utilization: {
          flightHour: 6.8988173455979,
          flightCycle: 3.44940867279895,
          activeHour: 2.95663600525624,
          day: null
        },
        startDate: "2019-12-31T00:00:00+00:00",
        endDate: "2023-03-31T23:59:59.999+00:00"
      },
      {
        utilization: {
          flightHour: 6.8988173455979,
          flightCycle: 3.44940867279895,
          activeHour: 2.95663600525624,
          day: null
        },
        startDate: "2017-11-21T00:00:00+00:00",
        endDate: "2018-12-30T23:59:59.999+00:00"
      }
    ],
    maintenanceStatus: [
      {
        statusAsOf: "2018-05-31T23:59:59.999+00:00",
        sinceNew: {
          flightHour: 62662.77,
          flightCycle: 21247,
          activeHour: null,
          day: 6634
        },
        sinceEvent: {
          flightHour: 25368,
          flightCycle: 7641,
          activeHour: null,
          day: 3009
        },
        isFirstRun: false
      }
    ]
  }
];

function mapToViewModel() {
  return null;
}

export function getLandingGearChecks() {
  return landingGearChecks;
}
