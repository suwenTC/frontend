import React from "react";
import AssetComponent from "../AssetDetails/AssetComponentView";
import { Box, Typography } from "@material-ui/core";

import { mapToViewModelHeader } from "../AssetDetails/viewModels/viewModels";
import { getAssetDetails } from "../AssetDetails/viewModels/fakeAssetDetailsService";

const AssetDetails = () => {
  const assetDetails = getAssetDetails();
  const assetSummary = [
    {
      id: assetDetails.aircraftID,
      componentType: "AssetSummary",
      series: assetDetails.aCseries,
      operator: assetDetails.operator,
      buildYear: assetDetails.buildYear,
      flightHours: assetDetails.totalFlightHours,
      flightCycles: assetDetails.totalFlightCycles
    }
  ];

  const airframeChecks = assetDetails.airframeChecks;
  const engines = assetDetails.engines;
  const landingGears = assetDetails.landingGear;
  const apus = assetDetails.apUs;
  const leases = assetDetails.leases;

  const classes = {
    sectionHeader: {
      textAlign: "left",
      marginLeft: 5,
      marginBottom: 15,
      height: 26,
      fontSize: 20,
      letter: "0.25px"
    }
  };

  const renderAssetComponents = (label, icon, data) => {
    return (
      <Box>
        <Typography variant="subtitle1" style={classes.sectionHeader}>
          {icon} &nbsp;{label}
        </Typography>

        {data.map((item, idx) => (
          <Box key={item.id} m={2}>
            <AssetComponent
              name={`${item.name}_${idx}`}
              snapShot={mapToViewModelHeader(item, item.componentType)}
              componentType={item.componentType ? item.componentType : "Lease"}
            />
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box>
      {renderAssetComponents(
        "Asset Summary",
        <i className="fa fa-heart-o" aria-hidden="true" />,
        assetSummary
      )}
      <br />

      {renderAssetComponents(
        "Airframe Checks",
        <i className="fa fa-heart-o" aria-hidden="true" />,
        airframeChecks
      )}
      <br />

      {renderAssetComponents(
        "Engines",
        <i className="fa fa-heart-o" aria-hidden="true" />,
        engines
      )}
      <br />

      {renderAssetComponents(
        "Landing Gears",
        <i className="fa fa-heart-o" aria-hidden="true" />,
        landingGears
      )}
      <br />

      {renderAssetComponents(
        "APUs",
        <i className="fa fa-heart-o" aria-hidden="true" />,
        apus
      )}
      <br />

      {renderAssetComponents(
        "Leases",
        <i className="fa fa-heart-o" aria-hidden="true" />,
        leases
      )}
    </Box>
  );
};

export default AssetDetails;
