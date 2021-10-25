import { useState } from "react";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import myAvatar from '../assets/me.png'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  
  input: {
    color: "white",
    marginLeft: theme.spacing(2),
  },
  cancel: {
      [theme.breakpoints.up("sm")]: {
          display:"none",
      },
  },
  
  icons: {
      alignItems:"center",      
      display:(props) => (props.open ? "none" : "flex"),
            
  },
  badge:{
      marginRight: theme.spacing(2),
  }
}));

function Navbar() {
   
  const classes = useStyles();

  
  return (
    <AppBar position="fixed" >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          ACR-DEVELOPING
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          ACR-DEV
        </Typography>
        
        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
