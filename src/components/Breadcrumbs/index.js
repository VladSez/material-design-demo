import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  primary: {
    color: theme.palette.gray
  },
  secondary: {
    color: theme.palette.lightGray
  }
}));

export function BreadcrumbsNavigation() {
  const classes = useStyles();
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography className={classes.secondary}>Human Resources</Typography>
      <Typography className={classes.primary}>John Vidal</Typography>
    </Breadcrumbs>
  );
}
