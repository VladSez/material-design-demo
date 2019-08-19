import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Phone from "@material-ui/icons/Phone";
import MailOutline from "@material-ui/icons/MailOutline";
import LocationOn from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/core/styles";
import "../../index.css";

const useStyles = makeStyles(theme => ({
  contactsContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  lightBlue: {
    color: theme.palette.lightblue,
    marginRight: "15px"
  },
  column: {
    display: "flex"
  }
}));

export function UserContacts() {
  const classes = useStyles();
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          Contacts
        </Typography>
        <div className={classes.contactsContainer}>
          <div className={classes.column}>
            <Phone className={classes.lightBlue} />
            <div>
              <Typography variant="body1">(650) 5555-1234</Typography>
              <Typography color="textSecondary" variant="subtitle1">
                Home phone
              </Typography>
              <Typography variant="body1">(650) 5555-1234</Typography>
              <Typography color="textSecondary" variant="subtitle1">
                Business phone
              </Typography>
            </div>
          </div>
          <div className={classes.contactsContainer}>
            <MailOutline className={classes.lightBlue} />
            <div>
              <Typography variant="body1">aliconnors@example.com</Typography>
              <Typography color="textSecondary" variant="subtitle1">
                E-mail
              </Typography>
            </div>
          </div>
          <div className={classes.contactsContainer}>
            <LocationOn className={classes.lightBlue} />
            <div>
              <Typography variant="body1">
                650 SW 1st Ave San Francisco, CA
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                Address
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
      <Divider />
      <CardActions className="editButtonContainer">
        <Typography className="editButton">Edit</Typography>
      </CardActions>
    </Card>
  );
}
