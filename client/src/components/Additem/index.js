import React, { useState, useEffect } from "react";
import { Form, Button, Table} from 'react-bootstrap';
import API from "../../utils/API"
import { List } from "../List"



function Additem() {
  const [formObject, setFormObject] = useState([]);



// Handles Input -> creating object to send to state -------------------------------------

function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({ ...formObject, [name]: value })
};

// Handles Submit -------------------------------------

function handleFormSubmit(event) {
  event.preventDefault();
  if (formObject.name) {
      API.saveList({
          name: formObject.name,
          // quantity: formObject.quantity,
          // purchased: formObject.purchased
      })
          // .then(res => loadList())
          .catch(err => console.log(err));
  }
};

  return (
    <main role="main">

      <section class="jumbotron text-left">
        <div class="container">
          <Form>
            <Form.Group controlId="formSearch">
              <Form.Control onChange={handleInputChange} type="text" placeholder="Add item" />
              <Form.Text className="text-muted">
                Enter the item name.
              </Form.Text>
            </Form.Group>
            <Button onClick={handleFormSubmit} variant="primary" type="submit">Add to list</Button>
          </Form>
          <br />
          <List />
          
        </div>
      </section>
      </main>
      );
}

export default Additem;