import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.gray
  }
}));

export function MenuList() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const handleChange = event => {
    setMenuOpen(state => !state);
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <div
        onClick={handleChange}
        style={{ display: "flex", cursor: "pointer" }}
      >
        <Typography className={classes.icon}>Jennifer</Typography>
        {isMenuOpen ? (
          <ExpandLess className={classes.icon} />
        ) : (
          <ExpandMore className={classes.icon} />
        )}
      </div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={isMenuOpen}
        onClose={handleChange}
      >
        <MenuItem onClick={handleChange}>Profile</MenuItem>
        <MenuItem onClick={handleChange}>My account</MenuItem>
      </Menu>
    </>
  );
}
