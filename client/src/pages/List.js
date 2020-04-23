import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

function Lists() {
    // Setting our component's initial state
    const [list, setList] = useState([])

    // Load all books and store them with setBooks
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
    };

    return (
        <div>
            {list.map(list => {
                return (
                    <strong>
                        {list.name}
                    </strong>
                );
            })}
        </div>
    );
}


export default Lists;
