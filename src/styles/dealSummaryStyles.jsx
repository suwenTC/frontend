import { makeStyles } from "@material-ui/core/styles";

export const dealSummaryStyles = makeStyles(theme => ({
  sponsor: {
    lineHeight: "16px"
  },
  dealName: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "26px",
    letterSpacing: 0.25
  },
  assetCount: {
    textAlign: "center",
    lineHeight: "44px"
  },
  assetSeries: {
    textAlign: "center"
  },
  oval: {
    boxSizeing: "border-box",
    height: 44,
    width: 44,
    border: "1px solid #979797",
    backgroundColor: "#d8d8d8",
    borderRadius: "50%"
  },
  chip: {
    width: 124,
    height: 32,
    marginTop: "8px",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 4,
    backgroundColor: "#c5c2c2"
  }
}));
