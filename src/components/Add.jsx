import React, { useState, useRef  } from "react";
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import EmailIcon from '@material-ui/icons/Email';
import {
  Button,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Alert } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 350,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vh",
      height: "100vh",
    },
  },
  form:{
    padding:theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      
    },
  },
  item:{
    marginBottom:theme.spacing(3)
  }
}));

function Add({open, setOpen}) {
  //const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  
  const classes = useStyles();
  const form = useRef();

  const handleClose = (event,reason) => {
    if (reason === 'clickaway'){
      return
    }
    setOpenAlert(false)
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vvcsnnb', 'template_btcnlmh', e.target, 'user_TG0au1f1FzeYrUPiq7ul8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <Tooltip title="Send Me e-mail" aria-label="add">
        <Fab color="secondary" className={classes.fab}>
          <EmailIcon onClick={() => setOpen(true)} />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
        
          <form className={classes.form} autoComplete="off" ref={form} onSubmit={sendEmail}>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                required
                label="Name"
                variant="outlined"
                size="small"
                name="name"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                type="email"
                required   
                name="email"       
                variant="outlined"
                label="E-mail"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                required
                variant="outlined"
                label="Message"
                name="message"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            
            
            <div className={classes.item}>
              <Button 
              variant="outlined" 
              color="primary" 
              type="submit"
              style={{marginRight:20}} >
                Send
              </Button>
              <Button variant="outlined" 
              color="secondary"
              onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;
