import { makeStyles } from "@material-ui/core/styles";

export const sectionCardStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    textAlign: "left",
    maxWidth: 1200,
    color: "rgba(0, 0, 0, 0.87)"
  },
  subtitle1: {
    lineHeight: "34px",
    letter: "0.15px",
    fontSize: 16
  },
  subtitle2: {
    fontSize: 14,
    lineHeight: "24px",
    letter: "0.1px"
  },
  caption: {
    fontSize: 10,
    lineHeight: "10px",
    letter: "normal",
    color: "rgba(0, 0, 0, 0.38)"
  }
}));
