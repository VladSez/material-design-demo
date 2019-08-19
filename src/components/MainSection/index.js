import React from "react";
import { UserSummary } from "../UserSummary";
import { UserContacts } from "../UserContacts";
import { UserSkills } from "../UserSkills";
import { UserInfo } from "../UserInfo";

import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  section: {
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "row wrap",
    maxWidth: "1400px"
  },
  tab: {
    color: theme.palette.lightblue,
    textTransform: "none",
    fontSize: "18px"
  }
}));
export function MainSection() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (_, newValue) => setValue(newValue);
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        centered
        indicatorColor="primary"
      >
        <Tab label="Profile" className={classes.tab} />
        <Tab label="Credentials" className={classes.tab} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <section className={classes.section}>
          <UserInfo />
          <div>
            <UserSummary />
            <UserContacts />
            <UserSkills title="Languages" />
          </div>
        </section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Credentials
      </TabPanel>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}
