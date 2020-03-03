import React from "react";
import {
  ClickAwayListener,
  Grid,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  IconButton,
  Tooltip,
  Typography
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

import { ADD_ROW, EDIT_MODE, VIEW_MODE } from "../../constants";
import { dropDownListStyles } from "../../styles/dropDownListStyles";

const DropDownList = ({ options, onModeChange, onRowAdd }) => {
  const classes = dropDownListStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleItemClick = (event, index, onModeChange, onRowAdd) => {
    switch (options[index].label) {
      case ADD_ROW:
        onRowAdd();
        break;
      case EDIT_MODE:
        onModeChange(false);
        break;
      case VIEW_MODE:
        onModeChange(true);
        break;
      default:
        break;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const renderDropDownButton = button => {
    return (
      <Tooltip title="Open">
        <IconButton
          ref={anchorRef}
          aria-label="more"
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {button}
        </IconButton>
      </Tooltip>
    );
  };

  const renderMenuList = (options, onModeChange, onRowAdd) => {
    return (
      <MenuList autoFocusItem={open} id="menu-list-grow">
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={event =>
              handleItemClick(event, index, onModeChange, onRowAdd)
            }
          >
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="body2">
                  {<option.icon color="action" />}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">{option.label}</Typography>
              </Grid>
            </Grid>
          </MenuItem>
        ))}
      </MenuList>
    );
  };

  return (
    <div className={classes.root}>
      <div>
        {renderDropDownButton(<MoreVert />)}

        <Popper
          className={classes.popper}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps} className={classes.grow}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  {renderMenuList(options, onModeChange, onRowAdd)}
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default DropDownList;
