import { makeStyles } from "@material-ui/core/styles";

export const dropDownListStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  popper: { zIndex: 151 },
  grow: {
    transformOrigin: "center bottom",
    backgroundColor: "#f5f2f2",
    marginRight: theme.spacing(2)
  }
}));
