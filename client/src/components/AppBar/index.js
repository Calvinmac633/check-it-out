import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Modal from "../Modal";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title }>
            <a style={{ color: 'white' }} href="/">Check It Out</a>
          </Typography>
          <Modal />
  <Button color="inherit"><a style={{ color: 'white' }} href={props.link1}>{props.text1}</a></Button>
  <Button color="inherit"><a style={{ color: 'white' }} href={props.link2}>{props.text2}</a></Button>
        </Toolbar>
      </AppBar>
  
      
    </div>
  );
}