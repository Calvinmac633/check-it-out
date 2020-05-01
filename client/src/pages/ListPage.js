import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import AppBar from "../components/AppBar"
// import codename from ZOEYTHING
const codename = "Turtle-Apple";

export function ListPage() {
    const [list, setList] = useState([]);
    const [formObject, setFormObject] = useState([]);

    // NEWEST THING ADDED
    // const {codename} = useParams()
    // useEffect(() => {
    //     API.getList(codename)
    //       .then(res => setBook(res.data))
    //       .catch(err => console.log(err));
    //   }, [])

    useEffect(() => {
        loadList()
    }, [])

    function loadList() {
        console.log(codename)
        API.getList(codename)
            .then(res =>
                setList(res.data),
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
        // event.preventDefault();
        if (formObject.name) {
            API.saveList({
                name: formObject.name,
            })
                .then(res => loadList())
                .catch(err => console.log(err));
        }
    };

    var count = 1

    // const listResult = list.find( ({ listname }) => listname === "Target List");


    return (
        <div>
            <AppBar link1="/signup" text1="Sign up" link2="/signin" text2="Sign in" />
            <main role="main">

                <section class="jumbotron text-left">
                    <div class="container">
                        <Form>
                            <Form.Group controlId="formSearch">
                                <Form.Control onChange={() => handleInputChange()} name="name" type="text" placeholder="Add item" />
                                <Form.Text className="text-muted">
                                    Enter the item name.
                  </Form.Text>
                            </Form.Group>
                            <Button onClick={() => handleFormSubmit()} variant="primary" type="button">Add to list</Button>
                        </Form>
                        <div>

                        </div>
                        {console.log("---------------This is List Object-----------")}
                        {console.log(list)}
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item</th>
                                    <th>Quantitiy</th>
                                    <th>Purchased?</th>
                                </tr>
                                {console.log(list)}
                            </thead>

                            {list.length > 0 ? (



                                // list.map(user => {
                                //     console.log("---------This is User----------------")
                                //     console.log(user)
                                //     return (
                                //         <div>

                                list.lists.map(list => {
                                    console.log("---------This is List----------------")
                                    console.log(list)
                                    return (
                                        <tbody>

                                            {
                                                list.items.map(item => {
                                                    console.log("---------This is Item----------------")
                                                    console.log(item)
                                                    return (
                                                        <tr key={item._id}>
                                                            <td>{count++}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.quantity}</td>
                                                            <td>
                                                                <Button>
                                                                    <FontAwesomeIcon icon={faCheck}>
                                                                        {item.purchased}</FontAwesomeIcon>
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    )


                                })


                                //         </div>)
                                // })

                            ) : (<p>No results to display</p>)}

                        </Table>

                    </div>
                </section>
            </main>

        </div>
    );

}
