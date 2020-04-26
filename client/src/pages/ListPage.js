import React, { useState, useEffect } from "react";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API"
import Additem from "../components/Additem"
import { List } from "../components/List"

export function ListPage() {
    const [list, setList] = useState([]);
    const [formObject, setFormObject] = useState([]);

    useEffect(() => {
        loadList()
    }, [])

    function loadList() {
        API.getList()
            .then(res =>
                setList(res.data)
            )
            .catch(err => console.log(err));
    }

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
                    <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Quantitiy</th>
                    <th>Purchased?</th>
                </tr>
            </thead>
            {list.map(list => {
                return (
                    <tbody>
                        {list.List[0].itemSchema.map(item => {
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

                </div>
            </section>
        </main>
    );

}
