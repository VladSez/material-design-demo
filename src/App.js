import React, { useState } from "react";
import classNames from "classnames";
import { BreadcrumbsNavigation } from "./components/Breadcrumbs";
import { MenuIconComponent } from "./components/MenuIcon";
import { Search } from "./components/Search";
import { DrawerComponent } from "./components/Drawer";
import { MenuList } from "./components/MenuList";
import { MainSection } from "./components/MainSection";
import { NotificationIcon } from "./components/NotificationIcon";
import { DRAWER_WIDTH, AVATAR_URL } from "./constants";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontWeightMedium: 500,
    fontFamily: `"Nunito", sans-serif`,
    body1: {
      fontSize: 14
    },
    subtitle1: {
      fontSize: 13
    }
  },
  palette: {
    gray: "hsl(0, 0%, 50%)",
    lightGray: "hsl(0, 0%, 85%)",
    lightblue: "hsl(189, 80%, 52%)",
    orange: "hsl(19, 100%, 65%)",
    lightBlueWhite: "hsl(189, 100%, 88%)",
    white: "hsl(0, 0%, 100%)"
  }
});

const useStyles = makeStyles(theme => {
  return {
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: 0
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: DRAWER_WIDTH
    },
    menu: {
      display: "flex",
      cursor: "pointer"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      background: "white",
      boxShadow: "none"
    },
    appBarShift: {
      width: `calc(100% - ${DRAWER_WIDTH - 10}px)`,
      marginLeft: DRAWER_WIDTH - 10,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    avatar: {
      width: "35px",
      height: "35px",
      marginRight: "10px"
    },
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    grow: {
      flexGrow: 1
    }
  };
});

export function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawer = () => setOpen(open => !open);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar
          position="static"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <MenuIconComponent handleDrawer={handleDrawer} />
            <BreadcrumbsNavigation />
            <div className={classes.grow} />
            <Search />
            <NotificationIcon />
            <Avatar alt="Avatar" src={AVATAR_URL} className={classes.avatar} />
            <MenuList className={classes.menu} />
          </Toolbar>
        </AppBar>
        <DrawerComponent open={open} />
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <MainSection />
        </main>
      </div>
    </ThemeProvider>
  );
}
