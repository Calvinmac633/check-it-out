import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_LIST, UPDATE_LISTS, LOADING, SET_CURRENT_LIST, ADD_LIST } from "../utils/actions"
import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import AppBar from "../components/AppBar"
import Modal from "../components/Modal";

import CreateListForm from "../components/CreateListForm"
// import codename from ZOEYTHING
// import Modal from "../components/Modal";


export function ListPage() {
const {codename} = useParams();

    // const [formObject, setFormObject] = useState([]);

    const [state, dispatch] = useStoreContext();


    const getList = (codename) => {
       dispatch({ type: LOADING });
       API.getList(codename)
       .then(results => {
           dispatch({
               type: SET_CURRENT_LIST,
               list: results.data
           });
       })
       .catch(err => console.log(err));
    }


    // const {codename} = useParams()
    useEffect(() => {
        getList(codename);
    }, [])

    

        

    var count = 1

    // const listResult = list.find( ({ listname }) => listname === "Target List");

    return (

        <div>
            <AppBar link1="/" text1="Gotta Blast">
                 <Modal />
            </AppBar>

        state.currentList.codename !==0 ? (<div>
            <AppBar link1="/signup" text1="Sign up" link2="/signin" text2="Sign in" />

            <main role="main">

                <section class="jumbotron text-left">
                    <div class="container">

                        <div className="items" block style={{
                                        width: 400, margin: 'auto', color: '#856c8b', fontSize: '30px', fontFamily: "londrina Shadow", backgroundColor: "white", borderBottomLeftRadius: "5px",
                                        borderBottomRightRadius: "5px",
                                        borderTopLeftRadius: "5px",
                                        borderTopRightRadius: "5px", border: "3px solid #856c8b"
                                    }} />
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label block style={{ fontSize: '40px', fontFamily: "londrina Shadow" }}>Item Name</Form.Label>
                                    <Form.Control type="" placeholder="" block style={{
                                        width: 400, margin: 'auto', color: '#856c8b', fontSize: '30px', fontFamily: "londrina Shadow", backgroundColor: "white", borderBottomLeftRadius: "5px",
                                        borderBottomRightRadius: "5px",
                                        borderTopLeftRadius: "5px",
                                        borderTopRightRadius: "5px", border: "3px solid #856c8b"
                                    }} />
                                    <Form.Text className="text-muted" block style={{ fontSize: '20px', fontFamily: "londrina Shadow", text:"center"}}>
                                        Enter item name.
    </Form.Text>
                                </Form.Group>

                              <Form.Group controlId="formBasicPassword">
                                    <Form.Label block style={{ fontSize: '40px', fontFamily: "londrina Shadow" }}>Quantitiy</Form.Label>
                                    <Form.Control type="" placeholder="" block style={{
                                        width: 400, margin: 'auto', color: '#856c8b', fontSize: '30px', fontFamily: "londrina Shadow", backgroundColor: "white", borderBottomLeftRadius: "5px",
                                        borderBottomRightRadius: "5px",
                                        borderTopLeftRadius: "5px",
                                        borderTopRightRadius: "5px", border: "3px solid #856c8b"
                                    }} />
                                    <Form.Text className="text-muted" block style={{ fontSize: '20px', fontFamily: "londrina Shadow"}}>
                                        Enter item quantity.
                                </Form.Text>
                                </Form.Group>
                             
                                <Button variant="primary" type="submit" block style={{
                                    width: 200, margin: 'auto', color: '#856c8b', fontSize: '30px', fontFamily: "londrina Shadow", backgroundColor: "#dee3e2", borderBottomLeftRadius: "5px",
                                    borderBottomRightRadius: "5px",
                                    borderTopLeftRadius: "5px",
                                    borderTopRightRadius: "5px", border: "3px solid #856c8b"
                                }}>
                                    Add item
                            </Button>
                            </Form>
                      
                        <Table striped bordered hover>
                            <thead>
                                <tr style={{
                                    color: '#18b0b0', fontSize: '30px', fontFamily: "londrina Shadow", borderBottomRightRadius: "5px", borderBottomLeftRadius: "5px",
                                    borderTopLeftRadius: "5px",
                                    borderTopRightRadius: "5px", border: "5px solid #f3c623"
                                }}>
                                    <th style={{ borderTopRightRadius: "3px", border: "3px solid #f3c623", backgroundColor: "white" }}>#</th>
                                    <th style={{ borderTopRightRadius: "3px", border: "3px solid #f3c623", backgroundColor: "white" }}>Item</th>
                                    <th style={{ borderTopRightRadius: "3px", border: "3px solid #f3c623", backgroundColor: "white" }}>Quantitiy</th>
                                    <th style={{ backgroundColor: "white" }}>Purchased</th>
                                </tr>
                            </thead>
                            {list.map(list => {
                                return (
                                    <tbody>
                                        {list.List[0].itemSchema.map(item => {
                                            return (
                                                <tr>
                                                    <td style={{ color: '#856c8b', fontFamily: "londrina Shadow", borderTopRightRadius: "3px", border: "3px solid #f3c623", backgroundColor: "#fcf8f3" }}>{count++}</td>
                                                    <td style={{ color: '#856c8b', fontFamily: "londrina Shadow", borderTopRightRadius: "3px", border: "3px solid #f3c623", backgroundColor: "#fcf8f3" }}>{item.name}</td>
                                                    <td style={{ color: '#856c8b', fontFamily: "londrina Shadow", borderTopRightRadius: "3px", border: "3px solid #f3c623", backgroundColor: "#fcf8f3" }}>{item.quantity}</td>
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

        </div>

              
        


    );

}