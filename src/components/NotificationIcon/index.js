import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.gray
  },
  iconButton: {
    marginRight: "10px"
  }
}));

export function NotificationIcon() {
  const classes = useStyles();
  return (
    <IconButton
      edge="start"
      aria-label="open notification"
      className={classes.iconButton}
    >
      <NotificationsIcon className={classes.icon} />
    </IconButton>
  );
}
