import React, { useState } from 'react'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  }
}))

function App() {
  const [open, setOpen] = useState(false);
  const [myFeed, setMyFeed] = useState(0)
  const classes = useStyles()
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar 
          open={open} setOpen={setOpen} 
          myFeed={myFeed} setMyFeed={setMyFeed}
          />
        </Grid>
        <Grid item sm={5} xs={10}>
          <Feed myFeed={myFeed} setMyFeed={setMyFeed}  />
        </Grid>
        <Grid item sm={5} className={classes.right}>
          {myFeed !== 1 ? <Rightbar/> : "null"}
          
        </Grid>
        
      </Grid>
      <Add open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
