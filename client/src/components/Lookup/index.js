import React, { useState, useEffect, useRef } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AppBar from "../AppBar";
import "./style.css"
import API from '../../utils/API';
import { REMOVE_LIST, UPDATE_LISTS, LOADING, SET_CURRENT_LIST, ADD_LIST } from "../../utils/actions"
import { useStoreContext } from "../../utils/GlobalState";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";





const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: "5px solid #856c8b",
    backgroundColor: "#fcf8f3",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#856c8b"
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: "#856c8b"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#856c8b",
    fontFamily: "londrina Shadow",
    fontSize: '25px'
  },
  display: {
    display: "flex",
    marginBottom: "200px",
  }
}));

export default function SignInForm() {
  const classes = useStyles();
  const listNameRef = useRef();
  const {listname} = useParams();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    console.log("current listname",listNameRef.current.value)
    API.createList(listNameRef.current.value
    ).then(res => console.log(
      "THIS IS CREATELIST RES.DATA", res.data));
    }
  
  //     .then(result => {
  //       console.log("THIS IS THE API CLICK RESULT", result)
  //       dispatch({
  //         type: UPDATE_LISTS,
  //         list: result.data
  //       });
  //     })
  //     .catch(err => console.log(err));

  //   nameRef.current.value = "";
  //   //   bodyRef.current.value = "";
  // };

  // the below is temporary code to demonstrate that the endpoint is working

  return (
    <div>

      <AppBar />
      <div className={classes.display}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AssignmentIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{ fontSize: '50px', fontFamily: "londrina Shadow" }}>
              Create a New List
        </Typography>
            <Form className={classes.form} noValidate >
              <Form.Group>
              <Form.Control
              ref={listNameRef}
    
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="listname"
                label="Enter List Name"
                name="List Name"
                type="text"
                autoFocus 
              />
              </Form.Group>     
              <Button
               onClick={handleSubmit} 
                fullWidth
                variant="contained"
                color=""
                className={classes.submit}
              >
                Let's Create
          </Button>

              <Grid container>
                <Grid item xs>

                </Grid>
                <Grid item>

                </Grid>
              </Grid>
            </Form>
          </div>
        </Container>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AssignmentIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{ fontSize: '50px', fontFamily: "londrina Shadow" }}>
              Search Existing List
        </Typography>
            <form className={classes.form} noValidate>
              <TextField multiline InputProps={{ style: { fontFamily:"londrina Shadow", fontSize: '30px', backgroundcolor:"#856c8b"} }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="codename"
                label="Enter Code Name"
                name="Code Name"
                autoFocus
              />


              <Link href="/List">
                <Button
                  // type="submit"
                  fullWidth
                  variant="contained"
                  color=""
                  className={classes.submit}
                >
                  Let's Search
          </Button>
              </Link>

              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </div>


  );
}
