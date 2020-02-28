import { makeStyles } from "@material-ui/core/styles";

export const assetStyles = makeStyles(theme => ({
  root: {
    maxWidth: 220,
    maxHeight: 67,
    backgroundColor: "#f1f1f1",
    borderRadius: 4
  },
  content: {
    padding: 0,
    textAlign: "left",
    paddingRight: 5,
    paddingLeft: 5
  },
  subtitle1: {
    fontSize: 14
  },
  body2: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 14
  },
  caption: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 12
  },
  captionLeft: {
    textAlign: "left",
    width: "50%",
    display: "inline-block"
  },
  captionRight: {
    textAlign: "right",
    width: "50%",
    display: "inline-block"
  }
}));
