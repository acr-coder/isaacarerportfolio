import { Container, Typography } from "@material-ui/core";
import {Bookmark,Storefront,ExitToApp, Home, List, TabletMac, SentimentVerySatisfiedRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles((theme) => ({
  container: {
    position: "sticky",
    top:0,
    height:"100vh",
    color:"white",
    paddingTop:theme.spacing(10),
    backgroundColor:theme.palette.primary.main,
    [theme.breakpoints.up("sm")]:{
      backgroundColor:"white",
      color:"#555",
      border:"1px solid #ece7e7"
    }
  },
  item:{
    display:"flex",
    opacity:0.8,
    
    alignItems:"center",
    '&:hover':{
      opacity:1,
      fontWeight:900,
    },
    marginBottom:theme.spacing(4),
    [theme.breakpoints.up("sm")]:{
      marginBottom:theme.spacing(3),
      cursor:"pointer"
    },
  },
  icon:{
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]:{
      fontSize:"18px",
    }
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]:{
      display: "none",
    },
  }
}))

function Leftbar({open, setOpen, myFeed, setMyFeed}) {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      
      <div className={classes.item} onClick={()=> {setMyFeed(1)}} >
        <Home className={classes.icon}/>
        <Typography className={classes.text}>About Me</Typography>
      </div>
      <div className={classes.item} onClick={()=> {setMyFeed(2)}} >
        <CastForEducationIcon className={classes.icon}/>
        <Typography className={classes.text}>My Udemy Courses</Typography>
      </div>
      <div className={classes.item} onClick={()=> {setMyFeed(3)}} >
        <List className={classes.icon}/>
        <Typography className={classes.text}>My Skills</Typography>
      </div>
      
      
      <div className={classes.item} onClick={()=> {setMyFeed(4)}} >
        <TabletMac className={classes.icon}/>
        <Typography className={classes.text}>My Projects</Typography>
      </div>
      <div className={classes.item} >
        <Bookmark className={classes.icon}/>
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item} >
        <Storefront className={classes.icon}/>
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item} onClick={() => setOpen(true)} >
        <ContactMailIcon className={classes.icon}/>

        <Typography className={classes.text} onClick={() => setOpen(true)} >Contact Me</Typography>
      </div>
      
    </Container>
  );
}

export default Leftbar;
