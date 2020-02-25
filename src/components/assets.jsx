import React from "react";
import Asset from "./asset";

import { Link } from "react-router-dom";

const Assets = ({ assets }) => {
  return assets.map((asset, index) => (
    <Link key={index} to={`/asset/${asset.serialNumber}`}>
      <Asset asset={asset} />
    </Link>
  ));
};

export default Assets;
