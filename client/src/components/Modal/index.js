import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TextField from '@material-ui/core/TextField';
import ModalForm from "../ModalForm";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor:"#fcf8f3",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border: "5px solid #856c8b",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    
  },
  text:{
    boxSizing:"10px",

  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title"style={{ color:"#856c8b",fontSize: '60px', fontFamily: "londrina Shadow"}}>Invite or Add</h2>
      <p id="simple-modal-description"style={{ color:"#856c8b",fontSize: '20px', fontFamily: "londrina Shadow"}}>
        Enter email address of the person you want to share this list with
      </p>
<ModalForm/>
      {/* <TextField id="outlined-basic" label="email address" variant="outlined" className={classes.text} /> */}
     
  
{/* <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label for="name">Name</label>
        <input type="text" className="form-control" id="name" />
    </div>
    <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label for="message">Message</label>
        <textarea className="form-control" rows="5" id="message"></textarea>
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleClose}style={{ color:"black",fontSize: '30px', fontFamily: "londrina Shadow"}}>
        Add Person
      </button>
      </form> */}
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}style={{ color:"white", backgroundColor:"#f3c623", fontSize: 40 }} >
      <PersonAddIcon style={{ color:"white", backgroundColor:"#f3c623", fontSize: 40 }} /> 
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
