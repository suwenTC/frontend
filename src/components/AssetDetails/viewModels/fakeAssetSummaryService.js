import moment from "moment";

export function getAssetSummary() {
  return {
    valuation: {
      Id: 25,
      AsOfDate: "2019-06-14T09:32:00+00:00",
      ForecastHorizon: 2045,
      InflationRate: 0.02,
      ValuationType: "Specific Aircraft",
      AssetType: "specificAircraft",
      EngineSubSeries: "CFM56-7B26",
      SpecAdjusters: "",
      DefaultAppraisal: false,
      HalfLifeValueId: 6806,
      HalfLife: {
        Id: 6806,
        Constant: null,
        Inflated: null,
        Market: 13.57,
        Base: 13.28
      },
      FullLifeValueId: 6739,
      FullLife: {
        Id: 6739,
        Constant: null,
        Inflated: null,
        Market: 22.15,
        Base: 21.86
      },
      MonthlyLeaseValueId: 6601,
      MonthlyLeaseRate: {
        Id: 6601,
        Constant: null,
        Inflated: null,
        Market: 0.165,
        Base: 0.166
      },
      ZeroTimeValueId: null,
      ZeroTime: null,
      RunOutValueId: null,
      RunOut: null,
      RatingDetailsId: 10,
      RatingDetails: {
        Id: 10,
        RatingAsOf: "Q1 2019",
        Year1Outlook: "B3",
        Year5Outlook: "B3",
        Year10Outlook: ""
      },
      TechnicalId: 25,
      TechnicalData: null,
      DetailsId: 25,
      AircraftDetails: {
        Id: 25,
        SerialNumber: "27992",
        RegistrationNumber: "EC-MTV",
        Manufacturer: "Boeing",
        Type: "737 NG",
        SubSeries: "737-800",
        ValueSubSeries: "800",
        MinorVariant: "8K5",
        YearOfBuild: 2000,
        Hours: 44773,
        Cycles: 15940,
        UtilizationDate: "2011-11-30T01:00:00+00:00",
        SpecAdjusters: "",
        Operator: "Alba Star",
        Owner: "Aergo Capital",
        Manager: "Aergo Capital",
        TotalSeats: 189
      },
      AircraftHistory: null,
      AircraftPastUtil: null,
      GenericAircraftModelId: null,
      GenericEngineModelId: null,
      AircraftModelId: 4,
      FutureValues: null
    },
    riskrating: {
      Id: 7638,
      AircraftSeries: "B737-800H",
      AircraftAge: 20,
      VfScore1Y: null,
      VfScore3Y: null,
      VfScore5Y: null,
      AircraftCapacity: "All",
      AsOfDate: "2019-12-23T15:44:54-05:00"
    },
    fleetdistribution: {
      Id: 3,
      AsOfDate: "2019-12-10T15:03:14.079106-05:00",
      AircraftSeries: "737-800",
      EngineSeries: "CFM56-7B",
      PrimaryUsage: "Passenger",
      HHI_Operator: 22.190095575861,
      HHI_Region: 80.72114140581,
      HHI_Lessor: 77.747136283543,
      Total_Lessors: 98,
      In_Service: 4802,
      Storage: 92,
      Retired: 33,
      On_Order: 9,
      Storage_Pct: 0.0187985288107887,
      PastDistributions: null
    },
    fleetdata: {
      last12monthcycles: 971,
      last12monthhours: 4145,
      totalhours: 44773,
      totalcycles: 15940,
      MTOW: 174198
    }
  };
}
