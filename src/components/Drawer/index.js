import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import AccessTime from "@material-ui/icons/AccessTime";
import Send from "@material-ui/icons/Send";
import Delete from "@material-ui/icons/Delete";
import AccountBox from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "../../constants";

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: DRAWER_WIDTH,
    background: theme.palette.lightblue,
    borderTopRightRadius: "15px"
  },
  drawerList: {
    listStyleType: "none",
    padding: "0",
    marginTop: "40px"
  },
  drawerListElement: {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
    color: theme.palette.lightBlueWhite,
    cursor: "pointer"
  },
  drawerButton: {
    background: theme.palette.orange,
    color: theme.palette.white,
    width: "130px",
    marginBottom: "100px"
  },
  drawerListTitle: {
    marginLeft: "20px"
  },
  grow: {
    flexGrow: 1
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center"
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    color: theme.palette.lightBlueWhite
  }
}));

export function DrawerComponent({ open }) {
  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Container>
        <Typography variant="h4" className={classes.titleContainer}>
          Djem.health
        </Typography>
        <ul className={classes.drawerList}>
          <li>
            <div className={classes.drawerListElement}>
              <AccessTime />
              <span className={classes.drawerListTitle}>Human Resources</span>
            </div>
          </li>
          <li>
            <div className={classes.drawerListElement}>
              <AccountBox />
              <span className={classes.drawerListTitle}> Hire Clinicians</span>
            </div>
          </li>
          <li>
            <div className={classes.drawerListElement}>
              <Send />
              <span className={classes.drawerListTitle}> Messages</span>
            </div>
          </li>
          <li>
            <div className={classes.drawerListElement}>
              <Delete />
              <span className={classes.drawerListTitle}>Agency Profile</span>
            </div>
          </li>
        </ul>
      </Container>
      <div className={classes.grow} />
      <div className={classes.buttonContainer}>
        <Button variant="contained" className={classes.drawerButton}>
          Help
        </Button>
      </div>
    </Drawer>
  );
}
