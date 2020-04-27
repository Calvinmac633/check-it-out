import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Form, Button, Table } from 'react-bootstrap';

function AddItem() {
  // Setting our component's initial state
  const [item, setItem] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Items and store them with setitem
  useEffect(() => {
    loadItem()
  }, [])

  // Loads all item and sets them to item
  function loadItem() {
    API.getList()
      .then(res => 
        setItem(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads item from the db
  function deleteItem(id) {
    API.deleteItem(id)
      .then(res => loadItem())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload item from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name) {
        API.saveList({
            name: formObject.name,
            // quantity: formObject.quantity,
            // purchased: formObject.purchased
        })
        .then(res => loadItem())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
        <Row>
    
          <Form>
            <Form.Group controlId="formSearch">
              <Form.Control type="text" placeholder="Add item" />
              <Form.Text className="text-muted">
                Enter the item name.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Add to list</Button>
          </Form>
          <Col size="md-6">
          <form>
            <Input
              onChange={handleInputChange}
              name="name"
              placeholder="Item (required)"
            />
            {/* <Input
              onChange={handleInputChange}
              name="author"
              placeholder="Author (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="synopsis"
              placeholder="Synopsis (Optional)"
            /> */}
            <FormBtn
              disabled={!(formObject.name)}
              onClick={handleFormSubmit}
            >
              Submit Item
            </FormBtn>
          </form>
          </Col>
        <Col size="md-6 sm-12">
          {item.length ? (
            <List>
               <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Quantitiy</th>
                    <th>Purchased?</th>
                </tr>
            </thead>
            {item.map(list => {
                return (
                    <tbody>
                        {item.List[0].itemSchema.map(item => {
                            return (
                                <tr>
                                    <td>auto</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <Button>
                                        <td>{item.purchased}</td>
                                    </Button>
                                    {console.log(list)}
                                </tr>
                            )
                        })}
                    </tbody>
                )
            })}
        </Table>
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
          </Col>
        </Row>
      </Container>
  );
}


export default AddItem;