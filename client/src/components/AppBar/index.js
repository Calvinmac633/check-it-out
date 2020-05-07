import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: '65px',
    fontFamily: 'Londrina Shadow',
    marginLeft: "100px"
  },
  appBar: {
    height: "75px",
    backgroundColor: "#f3c623",
    [theme.breakpoints.down('sm')]: {
      backgroundColor: "#f3c623",
    },

  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "3rem", 
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: "2rem", 
      display: "flex",
      justifyContent: "center",
    }

  }


}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <a className={classes.logo} style={{ color: 'white' }} href="/">Check it Out</a>
          </Typography>
          {props.children}
          <Button className="NavButton" color="inherit"><a style={{ color: '#18b0b0', fontSize: '30px', fontFamily: "londrina Shadow" }} href={props.link1}>{props.text1}</a></Button>
          
          <Button className="NavButton" color="inherit"><a style={{ color: 'white', fontSize: '30px', fontFamily: "londrina Shadow" }} href={props.link2}>{props.text2}</a></Button>
       
        </Toolbar>
      </AppBar>
    </div>

  );
}