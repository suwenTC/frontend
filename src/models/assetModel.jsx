const mapToViewModle = asset => {
  const iconType = asset.Type === "Aircraft" ? "plane" : "trash";
  return {
    icon: () => <i className={`fa fa-${iconType} fa-lg`} aria-hidden="true" />,
    serialNumber: asset.serialNumber,
    subseries: asset.subseries,
    operator: asset.operator,
    assetType: asset.assetType
  };
};
