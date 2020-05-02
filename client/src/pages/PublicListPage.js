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
            //   .then(res => console.log(res.data))
            .then(res => {
                console.log("this is list BEFORE set list is called ", list) 
                setList(res.data)
                console.log("this is list AFTER set list is called ", list)
            })
            .catch(err => console.log(err));
    }, [])


    
    return (
        
        (list.length !== 0 ? (
        <p>{console.log(list.items[0])}{list.items[0].name}</p>

        // !list ? (
        //     <div>
        //     <h1>
        //         {console.log(list)}
        //     </h1>
        // </div>
        // ) : <h1>nothing to displayyy</h1>


        ): null)
    );
    

}
