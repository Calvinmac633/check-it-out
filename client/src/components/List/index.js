import React, { useState, useEffect } from "react";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../../utils/API"



export function List() {
    const [list, setList] = useState([]);
    const [formObject, setFormObject] = useState([]);


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
    );
}
