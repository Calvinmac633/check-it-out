import React, { useState, useEffect } from "react";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import AppBar from "../components/AppBar"
// import codename from ZOEYTHING
// import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

const listcodename = "Turtle-Apple"

export function ListPage() {
    const [lists, setLists] = useState([]);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadList()
    }, [])

    function loadList() {
        // console.log(codename)
        API.getLists()
            .then(res =>
                console.log(res.data)

      .then(res => setLists(res.data))
                // console.log(list)
                // console.log(list)
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteItem(id) {
        API.deleteItem(id)
            .then(res => loadList())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    // Handles Submit -------------------------------------
    function handleFormSubmit(event) {
        // event.preventDefault();
        if (formObject.name && formObject.quantity && formObject.purchased) {
            API.saveList({
                name: formObject.name,
                quantity: formObject.quantity,
                purchased: formObject.purchased
            })
                .then(res => loadList())
                .catch(err => console.log(err));
        }
    };

    // const listResult = list.find( ({ listname }) => listname === "Target List");
//     return (
//         <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 onChange={handleInputChange}
//                 name="Item"
//                 placeholder="Item (required)"
//               />
//               <Input
//                 onChange={handleInputChange}
//                 name="quantity"
//                 placeholder="Quantity (required)"
//               />
//               <TextArea
//                 onChange={handleInputChange}
//                 name="purchased"
//                 placeholder="Purchased (Optional)"
//               />
//               <FormBtn
//                 disabled={!(formObject.quantity && formObject.name)}
//                 onClick={handleFormSubmit}
//               >
//                 Submit Item
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Item's In My List</h1>
//             </Jumbotron>
//             {lists.length > 0 ? (
//               <List>
//                 {lists.map(list => (
//                   <ListItem key={listcodename}>
//                       <strong>
//                         {list.item.name} by {list.item.quantity}
//                       </strong>
//                     <DeleteBtn onClick={() => deleteItem(list.item._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
// }

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
                    {console.log(lists)}
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Quantitiy</th>
                                <th>Purchased?</th>
                            </tr>
                            {/* {console.log(list)} */}
                        </thead>
                        {lists.length > 0 ? (
                            <tbody>
                                {list.items.map(item => (
                                        <tr key={item.codename}>
                                        <td>{list.name}</td>
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