import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_LIST_ITEM, UPDATE_LISTS, LOADING, SET_CURRENT_LIST, ADD_LIST } from "../utils/actions"
import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AppBar from "../components/AppBar"
import CreateListForm from "../components/CreateListForm"
// import codename from ZOEYTHING
// import Modal from "../components/Modal";
export function ListPage() {
    const { codename } = useParams();
    const { id } = useParams();

    // const [formObject, setFormObject] = useState([]);

    const [state, dispatch] = useStoreContext();

    const removeListItem = (id) => {
        console.log(id)
        API.deleteList(codename, id)
            .then((result) => {
                console.log("THIS IS THE DELETE API CLICK RESULT", result)
                dispatch({
                    type: REMOVE_LIST_ITEM,
                    codename: "dog-peach",
                    _id: id, //the second id is not defined
                });
            })
            .catch(err => console.log(err));
    };


    const getList = (codename) => {
        dispatch({ type: LOADING });
        API.getList(codename)
            .then(results => {
                console.log(results)
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

        state.currentList.codename !== 0 ? (<div>
            <AppBar link1="/" text1="Gotta Blast">
      <Modal/>
      </AppBar>
            <main role="main">
                <section class="jumbotron text-left">
                    <div class="container">
                        <CreateListForm />
                        <div>
                        </div>
                        {console.log("This is state -->",state)}
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Purchased?</th>
                                    <th>ID</th>
                                </tr>
                                {console.log(state.currentList)}
                            </thead>

                            {/* This checks to see if there are any items, if not -> does nothing, if it does -> return table body */}
                            {state.currentList.items ? <tbody>
                                {console.log("this is state.currentList.items ----> ", state.currentList.items)}
                                {console.log("this is state ----> ", state)}
                                {state.currentList.items.map(item =>
                                    <tr>
                                        <td>{count++}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.quantity}</td>
                                        <td><Button onClick={() => {
                                            removeListItem(item._id)
                                        }}>
                                            <FontAwesomeIcon icon={faCheck}>
                                                {item.purchased}</FontAwesomeIcon>
                                        </Button>
                                        </td>
                                        <td>{item._id}</td>
                                    </tr>
                                )}

                            </tbody> : null


                            }

                            {state.currentList.length > 0 ? <tbody>
                                {console.log("this is state.currentList ----> ", state.currentList)}
                                {console.log("this is state ----> ", state)}
                                {state.currentList.map(item =>
                                    <tr>
                                        <td>{count++}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.quantity}</td>
                                        <td><Button onClick={() => {
                                            removeListItem(item._id)
                                        }}>
                                            <FontAwesomeIcon icon={faCheck}>
                                                {item.purchased}</FontAwesomeIcon>
                                        </Button>
                                        </td>
                                        <td>{item._id}</td>
                                    </tr>
                                )}

                            </tbody> : null


                            }



                        </Table>
                    </div>
                </section>
            </main>
        </div>) : <p>-----STATE AINT WERKIN------</p>



    );

}
