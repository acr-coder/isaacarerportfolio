import { Card, Button, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Link } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import reactImg from '../assets/reactImg.jpg'
import softImg from '../assets/soft.jpg'

const useStyles = makeStyles((theme) => ({
    card:{
        marginBottom:theme.spacing(5)
    },
  media: {
    height:250,
    [theme.breakpoints.down("sm")]:{
        height: 150
    },
  },
}))

function Post() {
  const classes = useStyles()
  return (
    <>
    <Card className={classes.card}>
        
        <CardActionArea>
        <CardMedia 
        className={classes.media}
        image={reactImg}
        title="My Post" />
        <CardContent>
            <Typography gutterBottom variant="h5">React, Next Js, Express Js, Strapi</Typography>
            <Typography variant="body2">
            In this training set, React.js training is given accompanied by Modern Javascript topics. Modern Javascript topics, React start topics, React Context, React Hooks and Redux topics will be covered respectively.
            Topics covered individually at first will then be reinforced with MERN and NextJs projects. 
            </Typography>
        </CardContent>
        </CardActionArea>
       <CardActions>
         <Typography>
       <Link underline="none" color="secondary"
       rel="noopener" target="_blank" href="https://www.udemy.com/course/reactjs-temelleri-egitimi/?referralCode=655141A3FF8AA81737EC" >
        ENROLL THIS COURSE
      </Link>
       </Typography>    
       </CardActions>

    </Card>
    <Card className={classes.card}>
        
        <CardActionArea>
        <CardMedia 
        className={classes.media}
        image={softImg}
        title="My Post" />
        <CardContent>
            <Typography gutterBottom variant="h5">Fundementals Of Software</Typography>
            <Typography variant="body2">
            This training set, which is prepared as a basic starter package for everyone who 
            is considering entering the software world, improving their algorithm skills and trying to find a place for themselves in this big world, will provide you with solid and satisfying information on the topics mentioned in the course title. If you complete this training set, you will have a considerable amount of knowledge. If you have not decided in which area of ​​the software world you want to improve yourself, or if you want to gain knowledge in different branches, this training set is for you. This Training set gives you the opportunity to gain knowledge in more than one area in an easy and understandable way without 
            getting bogged down in the details of a single programming language. 
            </Typography>
        </CardContent>
        </CardActionArea>
       <CardActions>
         <Typography>
       <Link underline="none" color="secondary"
       rel="noopener" target="_blank" href="https://www.udemy.com/course/yazilim-temel-baslangic-egitimi/?referralCode=E204C3C2C629F18D4F31" >
        ENROLL THIS COURSE
      </Link>
       </Typography>    
       </CardActions>

    </Card>
    </>
  );
}

export default Post;
