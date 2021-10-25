import { makeStyles } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop:theme.spacing(10), 
    marginTop:theme.spacing(10),
    

  }
}))

function Rightbar() {
  const classes = useStyles()
  return (
    <Container className={classes.container} >
      <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="grey"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Web Developer</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>React Developer</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Udemy Instructor</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color="grey" />
        </TimelineSeparator>
        <TimelineContent>Data Analyst</TimelineContent>
      </TimelineItem>
    </Timeline>
      
    </Container>
  );
}

export default Rightbar;
