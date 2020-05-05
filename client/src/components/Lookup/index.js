import React from 'react';
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

  // the below is temporary code to demonstrate that the endpoint is working
  API.createList('mackerel').then(res => console.log(res.data));

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
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="listname"
                label="Enter List Name"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <Button
                // type="submit"
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
            </form>
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
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="codename"
                label="Enter Code Name"
                name="email"
                autoComplete="email"
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
