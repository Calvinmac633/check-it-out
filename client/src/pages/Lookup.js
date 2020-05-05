import React, { useState, useEffect } from "react";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API"
import EnterList from "../components/EnterList";
import AppBar from "../components/AppBar"


export function Lookup() {
    return (
        <div>
            <EnterList />
        </div>

    );
}
