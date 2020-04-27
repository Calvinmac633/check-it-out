import React, { useState, useEffect } from "react";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

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
                .then(res => loadList())
                .catch(err => console.log(err));
        }
    };

    var count = 1

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
                        <Button onClick={console.log("been clicked")} variant="primary" type="button">Add to list</Button>
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
                                                <td>{count++}</td>
                                                <td>{item.name}</td>
                                                <td>{item.quantity}</td>
                                                <td>
                                                    <Button>
                                                        <FontAwesomeIcon icon={faCheck}>
                                                            {item.purchased}</FontAwesomeIcon>
                                                    </Button>
                                                </td>
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
