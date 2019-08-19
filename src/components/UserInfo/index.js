import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import HealingIcon from "@material-ui/icons/Healing";
import { makeStyles } from "@material-ui/core/styles";
import "../../index.css";

const useStyles = makeStyles(theme => ({
  cardStyles: {
    maxWidth: "450px",
    maxHeight: "410px",
    overflow: "initial",
    width: "100%",
    borderRadius: "10px"
  },
  title: {
    textAlign: "center",
    marginBottom: "50px"
  },
  avatar: {
    height: "140px",
    width: "140px",
    bottom: "60px",
    left: "33%"
  },
  medicalIcon: {
    borderRadius: "10px",
    marginRight: "10px",
    background: theme.palette.lightblue,
    display: "flex",
    flexDirection: "column",
    padding: "15px"
  },
  chip: {
    background: "#98D0DF",
    color: theme.palette.white,
    marginBottom: "5px",
    height: "27px"
  },
  chipContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline"
  },
  sectionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center"
  },
  button: {
    background: theme.palette.lightblue,
    color: theme.palette.white,
    marginBottom: "20px",
    width: "335px"
  }
}));
export function UserInfo() {
  const classes = useStyles();
  return (
    <Card className={`${classes.cardStyles} card`}>
      <CardContent>
        <div>
          <Avatar
            className={classes.avatar}
            alt="Avatar"
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3889&q=80"
          />
        </div>
        <Typography
          variant="h4"
          color="textSecondary"
          className={classes.title}
        >
          James Connors
        </Typography>
        <section className={classes.sectionContainer}>
          <div>
            <Avatar className={classes.medicalIcon}>
              <HealingIcon />
              <Typography variant="subtitle1">Nursing</Typography>
            </Avatar>
          </div>
          <div className={classes.chipContainer}>
            <Chip label="Registered Nurse" className={classes.chip} />
            <Chip label="Emergency Room Nurse" className={classes.chip} />
          </div>
        </section>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <Button variant="contained" className={classes.button}>
          Message
        </Button>
      </CardActions>
    </Card>
  );
}
