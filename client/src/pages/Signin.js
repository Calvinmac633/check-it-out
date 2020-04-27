import React, { useState, useEffect } from "react";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API"
import SignInForm from "../components/SignInForm";


export function Signin() {
    return (
       <SignInForm />
    );
}
