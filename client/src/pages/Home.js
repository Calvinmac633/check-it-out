import React, { useState, useEffect } from "react";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API"
import Additem from "../components/Additem"
import { List } from "../components/List"
import Carousel from "../components/Carousel";


export function Home() {

    return (
       <Carousel />
    );

}
