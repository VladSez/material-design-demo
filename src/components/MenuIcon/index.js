import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.lightblue
  }
}));

export function MenuIconComponent({ handleDrawer }) {
  const classes = useStyles();
  return (
    <IconButton edge="start" aria-label="open drawer" onClick={handleDrawer}>
      <MenuIcon className={classes.icon} />
    </IconButton>
  );
}
