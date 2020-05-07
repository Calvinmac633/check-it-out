import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_LIST, UPDATE_LISTS, LOADING, SET_CURRENT_LIST, ADD_LIST } from "../../utils/actions"
import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import AppBar from "../AppBar"
import "./CreateListForm.css"
import { Form, Button, Table, ThemeProvider } from 'react-bootstrap';
// import codename from ZOEYTHING
// const codename = "Turtle-Apple";

function CreateListForm() {
  const { codename } = useParams();
  const nameRef = useRef();
  const quantityRef = useRef();

  // const { nameRef, quantityRef} = useRef();
  // const bodyRef = useRef();
  // const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    console.log(nameRef.current.value)
    console.log(quantityRef.current.value)
    API.addItem(codename, {
      itemName: nameRef.current.value,
      quantity: quantityRef.current.value,
    })
      .then(result => {
        console.log("THIS IS THE API CLICK RESULT", result)
        dispatch({
          type: UPDATE_LISTS,
          // quantity: result.data,
          list: result.data
        });
      })
      .catch(err => console.log(err));

    nameRef.current.value = "";
    quantityRef.current.value = "";
  };

  return (
    <Form>
      <style type="text/css">
    {`
    .my-btn {
      width: 200;
    margin: auto;
    color: #856c8b; 
    font-size:40px;
    font-Family: londrina Shadow;
    background-color: #dee3e2; 
    border: 3px solid #856c8b;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-Bottom: 30px;
    }

    
    `}
  </style>
      <Form.Group controlId="formSearch">
        <Form.Control ref={nameRef} type="text" placeholder="Add item" />
        <Form.Text className="text-muted">
          Enter the item name.
          </Form.Text>
      </Form.Group>
      <Form.Group controlId="formQuantity">

        <Form.Control ref={quantityRef} type="text" placeholder="Enter Quantity" />
        <Form.Text className="text-muted">
          Enter the item quantity
              </Form.Text>
      </Form.Group>
      <ThemeProvider prefixes={{ btn: 'my-btn' }}>
      <Button onClick={handleSubmit} variant="flat" type="button">Add to list</Button>
      </ThemeProvider>{' '}
    </Form>
  )
}
export default CreateListForm;