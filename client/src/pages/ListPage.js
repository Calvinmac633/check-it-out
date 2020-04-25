import React, { useState, useEffect } from "react";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../../utils/API"
import Additem from "../components/Additem"
import List from "../components/List"


export function ListPage() {





    return (
        <div>
            <Additem />
            <List />
        </div>


    );
}
