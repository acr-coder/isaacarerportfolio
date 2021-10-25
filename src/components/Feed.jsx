import { makeStyles } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import About from "./About";
import Post from "./Post";
import Projects from "./Projects";
import Skills from "./Skills";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop:theme.spacing(10),
  }
}))

function Feed({myFeed,setMyFeed}) {
  const classes = useStyles()
  if(myFeed === 1){
    return(
      <Container className={classes.container} >
        <About />
      </Container>
    ) 
  }else if(myFeed === 2){
    return(
      <Container className={classes.container} >
        <Post />
      </Container>
    ) 
  }else if(myFeed === 3){
    return (
      <Container className={classes.container} >
        <Skills />
      </Container>
    )
  }else if(myFeed === 4){
    return (
      <Container className={classes.container} >
        <Projects />
      </Container>
    )
  }
    else{
    return(
      <Container className={classes.container} >
        About Me
      </Container>
    )
  }
  
}

export default Feed;
