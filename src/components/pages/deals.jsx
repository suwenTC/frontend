import React from "react";

import Deal from "./../deal";
import { Grid } from "@material-ui/core";

const deals = [
  {
    id: 0,
    dealName: "Marathon/737/JTG",
    sponsor: "Marathon",
    stage: "Pipeline",
    operator: "JetTime",
    icon: <i className="fa fa-space-shuttle fa-3x" aria-hidden="true" />,
    assets: [
      {
        serialNumber: "27992",
        subseries: "737-800",
        operator: "Alba Star",
        assetType: "Aircraft"
      },
      {
        serialNumber: "22943",
        subseries: "CFM56-5B6/P",
        operator: "DHL Aero Expreso",
        assetType: "Engine"
      },
      {
        serialNumber: "22943",
        subseries: "CFM56-7B24/3",
        operator: "ATI-Air Transport International",
        assetType: "Engine"
      },
      {
        serialNumber: "V15527",
        subseries: "V2533-A5",
        operator: "ATI-Air Transport International",
        assetType: "Engine"
      }
    ]
  },
  {
    id: 1,
    dealName: "Turbine/Engines",
    sponsor: "AIRBUS BANK",
    stage: "Pipeline",
    operator: "Turpial Airlines",
    icon: <i className="fa fa-television fa-3x" aria-hidden="true" />,
    assets: [
      {
        serialNumber: "27992",
        subseries: "737-800",
        operator: "Alba Star",
        assetType: "Aircraft"
      },
      {
        serialNumber: "22943",
        subseries: "CFM56-5B6/P",
        operator: "DHL Aero Expreso",
        assetType: "Engine"
      },
      {
        serialNumber: "22943",
        subseries: "CFM56-7B24/3",
        operator: "ATI-Air Transport International",
        assetType: "Engine"
      },
      {
        serialNumber: "V15527",
        subseries: "V2533-A5",
        operator: "ATI-Air Transport International",
        assetType: "Engine"
      }
    ]
  }
];

const Deals = () => {
  return (
    <Grid container direction="column" spacing={2}>
      {deals.map((deal, index) => (
        <Grid key={index} item>
          <Deal dealId={deal.id} deal={deal} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Deals;
