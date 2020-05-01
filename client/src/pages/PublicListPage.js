import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import AppBar from "../components/AppBar"
// import codename from ZOEYTHING
const codename = "Turtle-Apple";

export function PublicListPage() {
    const [list, setList] = useState([]);
    // const [formObject, setFormObject] = useState([]);

    // const {codename} = useParams()
    useEffect(() => {
        API.getList(codename)
          .then(res => console.log(res))
        //   .then(res => setList(res.data))
          .catch(err => console.log(err));
      }, [])


    return (
        <div>
            <h1>
                {console.log(list)}
            </h1>
        </div>
    );

}
