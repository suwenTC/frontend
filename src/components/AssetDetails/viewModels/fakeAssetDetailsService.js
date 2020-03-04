import moment from "moment";

const assetDetails = {
  scenarios: [
    {
      id: 19,
      name: "Base",
      date: "2019-06-01T00:00:00+00:00",
      author: "Excel"
    }
  ],
  aircraftID: 17,
  aCseries: "737-900ER",
  operator: "Lion Air",
  buildYear: 2001,
  totalFlightHours: 28792,
  totalFlightCycles: 20068,
  airframeChecks: [
    {
      id: 50,
      componentType: "AirframeCheck",
      name: "8 Year (8/10/12)",
      serialNumber: null,
      status_FlightHours: null,
      status_FlightCycles: null,
      status_ActiveHours: null,
      status_Days: 511,
      status_AsOfDate: "2019-01-31T23:59:59.999+00:00"
    },
    {
      id: 51,
      componentType: "AirframeCheck",
      name: "12 Year (8/10/12)",
      serialNumber: null,
      status_FlightHours: null,
      status_FlightCycles: null,
      status_ActiveHours: null,
      status_Days: 3439,
      status_AsOfDate: "2019-01-31T23:59:59.999+00:00"
    },
    {
      id: 52,
      componentType: "AirframeCheck",
      name: "10 Year (8/10/12)",
      serialNumber: null,
      status_FlightHours: null,
      status_FlightCycles: null,
      status_ActiveHours: null,
      status_Days: 240,
      status_AsOfDate: "2019-01-31T23:59:59.999+00:00"
    }
  ],
  engines: [
    {
      id: 35,
      componentType: "Engine",
      name: "CFM56-7B26/3",
      serialNumber: "802499",
      status_FlightHours: 0,
      status_FlightCycles: 0,
      status_ActiveHours: null,
      status_Days: null,
      status_AsOfDate: "2019-01-31T23:59:59.999+00:00"
    },
    {
      id: 36,
      componentType: "Engine",
      name: "CFM56-7B26/3",
      serialNumber: "802498",
      status_FlightHours: 3208,
      status_FlightCycles: 2536,
      status_ActiveHours: null,
      status_Days: 545,
      status_AsOfDate: "2019-01-31T23:59:59.999+00:00"
    }
  ],
  landingGear: [
    {
      id: 49,
      componentType: "LandingGear",
      name: "Nose",
      serialNumber: null,
      status_FlightHours: null,
      status_FlightCycles: null,
      status_ActiveHours: null,
      status_Days: 0,
      status_AsOfDate: "2019-01-31T23:59:59.999+00:00"
    },
    {
      id: 50,
      componentType: "LandingGear",
      name: "Left Main",
      serialNumber: null,
      status_FlightHours: null,
      status_FlightCycles: null,
      status_ActiveHours: null,
      status_Days: 3439,
      status_AsOfDate: "2019-01-31T23:59:59.999+00:00"
    },
    {
      id: 51,
      componentType: "LandingGear",
      name: "Right Main",
      serialNumber: null,
      status_FlightHours: null,
      status_FlightCycles: null,
      status_ActiveHours: null,
      status_Days: 3439,
      status_AsOfDate: "2019-01-31T23:59:59.999+00:00"
    }
  ],
  apUs: [
    {
      id: 17,
      componentType: "APU",
      name: "GTCP 131-9B",
      serialNumber: "P-8299",
      status_FlightHours: null,
      status_FlightCycles: null,
      status_ActiveHours: 10091,
      status_Days: 293,
      status_AsOfDate: "2019-01-31T23:59:59.999+00:00"
    }
  ],
  leases: [
    {
      id: 19,
      lessee: "Jet Time",
      startDate: "2019-06-30T23:59:59.999+00:00",
      endDate: "2021-10-31T23:59:59.999+00:00",
      rent: 349700,
      leaseType: "NewLease"
    },
    {
      id: 20,
      lessee: "Jet Time",
      startDate: "2022-01-31T23:59:59.999+00:00",
      endDate: "2027-01-31T23:59:59.999+00:00",
      rent: 160000,
      leaseType: "NewLease"
    }
  ]
};

export function getAssetDetails() {
  return assetDetails;
}
