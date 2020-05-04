import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
}));

export default function SignInForm() {
  const classes = useStyles();

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ fontSize: '50px', fontFamily: "londrina Shadow" }}>
            Sign in
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember"/>}
              label="Remember me"
            />
            <Link href="/List">
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                color=""
                className={classes.submit}
              >
                Sign In
          </Button>
            </Link>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{ color: "#856c8b",fontSize:'15px', fontFamily: "londrina Shadow"}}>
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" style={{ color: "#856c8b" ,fontSize:'15px', fontFamily: "londrina Shadow"}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ fontSize: '50px', fontFamily: "londrina Shadow" }}>
            Sign in
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember"/>}
              label="Remember me"
            />
            <Link href="/List">
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                color=""
                className={classes.submit}
              >
                Sign In
          </Button>
            </Link>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{ color: "#856c8b",fontSize:'15px', fontFamily: "londrina Shadow"}}>
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" style={{ color: "#856c8b" ,fontSize:'15px', fontFamily: "londrina Shadow"}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
