import React, { useState, useEffect } from "react";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../../utils/API"
import { List } from "../List"
  


export function Additem() {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadList()
  }, [])

  // Loads all books and sets them to books
  function loadList() {
    API.getList()
      .then(res =>
        setList(res.data)
      )
      .catch(err => console.log(err));
  }
  return (
    <main role="main">

      <section class="jumbotron text-left">
        <div class="container">
          <Form>
            <Form.Group controlId="formSearch">
              <Form.Control type="text" placeholder="Add item" />
              <Form.Text className="text-muted">
                Enter the item name.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Add to list</Button>
          </Form>
          <br />
            <div>List ID is: {list.map(list => {return (<p>{list._id}</p>)})}</div>
          <br />
          <List />
        </div>
      </section>
    </main>
  );
}