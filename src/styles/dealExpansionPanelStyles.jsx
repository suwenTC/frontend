import { makeStyles } from "@material-ui/core/styles";

export const dealExpansionPanelStyles = makeStyles(theme => ({
  root: {
    maxWidth: 960,
    margin: "auto",
    textAlign: "left"
  },
  panelSummary: {
    backgroundColor: "#fbfbfb"
  },
  panelDetails: {
    paddingTop: 20,
    border: "1px solid rgba(0, 0, 0, 0.125)",
    backgroundColor: "#f6f6f6"
  }
}));
