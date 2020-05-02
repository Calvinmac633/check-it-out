import React, { useState, useEffect } from "react";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API"
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Carousel from "../components/Carousel";
import Gif from "../components/Gif";


export function Home() {

    return (
        <div>
            <Gif />
        </div>
    );

}
