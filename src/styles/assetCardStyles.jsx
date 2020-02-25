import { makeStyles } from "@material-ui/core/styles";

export const assetCardStyles = makeStyles(theme => ({
  root: {
    maxWidth: 220,
    maxHeight: 67,
    backgroundColor: "#FAFAFA",
    borderRadius: 1
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
    display: "inline-block",
    width: 105
  },
  captionRight: {
    textAlign: "right",
    display: "inline-block",
    width: 105
  }
}));
