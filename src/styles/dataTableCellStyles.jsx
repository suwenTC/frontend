import { makeStyles } from "@material-ui/core/styles";

export const dataTableCellStyles = makeStyles(theme => ({
  root: {
    maxWidth: 156,
    textAlign: "left",
    fontFamily: "Roboto",
    backgroundColor: "#F6F6F6",
    paddingBottom: 3
  },
  overline: {
    color: "#959698",
    fontSize: 12,
    letterSpacing: "2px",
    lineHeight: "16px",
    paddingTop: 8
  },
  subtitle1: {
    color: "rgba(0,0,0,0.87)",
    fontSize: 16,
    letterSpacing: "0.15px",
    lineHeight: "24px"
  },
  caption: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 12,
    letterSpacing: "0.4px",
    lineHeight: "16px"
  }
}));
