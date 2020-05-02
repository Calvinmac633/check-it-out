import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_LIST, UPDATE_LISTS, LOADING, SET_CURRENT_LIST, ADD_LIST } from "../utils/actions"
import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import AppBar from "../components/AppBar"

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

        state.currentList.codename !==0 ? (<div>
            <AppBar link1="/signup" text1="Sign up" link2="/signin" text2="Sign in" />
            <main role="main">

                <section class="jumbotron text-left">
                    <div class="container">
                        <CreateListForm />
                        <div>

                        </div>
                        {console.log("---------------This is List Object-----------")}
                        {console.log(state)}
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Purchased?</th>
                                </tr>
                                {console.log(state)}
                            </thead>
                            <tbody>
                                {state.currentList.items.map(item =>
                                    <tr>
                                        <td>{count++}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item._id}</td>
                                    </tr>
                                )}

                            </tbody>
                        </Table>
                    </div>
                </section>
            </main>
        </div>) : <p>-----STATE AINT WERKIN------</p>
        

    );

}
