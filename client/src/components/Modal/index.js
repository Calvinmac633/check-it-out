import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TextField from '@material-ui/core/TextField';
// import { Input } from '@material-ui/core';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
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
    backgroundColor:"#f3c623",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border: "5px solid white",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px"
  },
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
      <h2 id="simple-modal-title"style={{ color:"white",fontSize: '60px', fontFamily: "londrina Shadow"}}>Invite or Add</h2>
      <p id="simple-modal-description"stylnpm run start
      e={{ color:"white",fontSize: '20px', fontFamily: "londrina Shadow"}}>
        Enter email address of the person you want to share this list with
      </p>
      <TextField id="outlined-basic" label="email address" variant="outlined" />
      <Form>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
          type="text"
          name="name"
          onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
          type="email"
          name="email"
          onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="message">Message:</Label>
          <Input
          type="textarea"
          name="message"
          onChange={this.handleChange}/>
        </FormGroup>
      </Form>
      <button type="button" onClick={handleClose}style={{ color:"white",fontSize: '20px', fontFamily: "londrina Shadow"}}>
        Add Person
      </button>


    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add Person
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
