import React, { useState, useEffect, useRef } from "react";
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
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
// import { useParams } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: "5px solid #683fb5",
    backgroundColor: "#fcf8f3",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "5px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#683fb5"
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: "#683fb5"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#683fb5",
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
  const codeNameRef = useRef();
  const { listname } = useParams();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    console.log("current listname", listNameRef.current.value)
    API.createList(listNameRef.current.value
    )
      .then(res =>
        window.location.href = "list/" + res.data.codename)
  }

  const handleSubmitCodename = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    // console.log("codename", codeNameRef.current.value)
    API.getList(codeNameRef.current.value
    )
      .then(res =>
        window.location.href = "list/" + res.data.codename)
  }

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
                style={{ fontSize: '25px', fontFamily: 'Open Sans'}}
                  ref={listNameRef}
                  variant="outlined"
                  margin="normal"
                  // required
                  fullWidth
                  id="listname"
                  label="Enter List Name"
                  name="List Name"
                  type="text"
                  autoFocus
                />
              </Form.Group>
              <Link to={"/List"}>
                <Button
                  onClick={handleSubmit}
                  fullWidth
                  variant="contained"
                  color=""
                  className={classes.submit}
                  type="submit"
                  style={{ 
                    fontSize: '35px', fontFamily: "londrina Shadow",
                      background: "#683fb5",
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    color: "#FFFFFF",
                    marginLeft: '16%',}}
                >
                  Let's Create
          </Button>
              </Link>

              <div className="outer" style={{ width: '1px',
  height: '100%',
  margin: 'auto',
  position: 'relative',
  overflow: 'hidden'}}>
  <div className="inner" style={{position: 'absolute',
  width:'100%',
  height: '40%',
  background: '#683fb5',
  top: '30%',
  boxShadow: '0px 0px 30px 20px grey'}}></div>
</div>
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
            <Form className={classes.form} noValidate>
            <Form.Group>
                <Form.Control  style={{ fontSize: '25px', fontFamily: 'Open Sans'}}
                ref={codeNameRef}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="codename"
                label="Enter Code Name"
                name="Code Name"
                autoFocus
              />
                </Form.Group>
              <Link href="/List">
                <Button
                onClick={handleSubmitCodename}
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ 
                    fontSize: '35px', fontFamily: "londrina Shadow",
                      background: "#683fb5",
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    color: "#FFFFFF",
                    marginLeft: '16%',}}
                  className={classes.submit}
                  required
                >
                  Let's Search
                </Button>
              </Link>
           
            </Form>
          </div>
        </Container>
      </div>
    </div>


  );
}
