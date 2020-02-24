import React from "react";

import Deal from "./deal";

const deals = [
  {
    dealName: "Marathon/737/JTG",
    sponsor: "Marathon",
    stage: "Pipeline",
    operator: "JetTime",
    assets: [
      {
        serialNumber: "27992",
        subseries: "737-800",
        operator: "Alba Star",
        assetType: "Aircraft"
      },
      {
        serialNumber: "30643",
        subseries: "737-800",
        operator: "Jet Time",
        assetType: "Aircraft"
      },
      {
        serialNumber: "V15527",
        subseries: "V2533-A5",
        operator: null,
        assetType: "Engine"
      }
    ]
  }
];

const Deals = () => {
  return deals.map(deal => <Deal deal={deal} />);
};

export default Deals;
