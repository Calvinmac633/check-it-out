import React, { useState, useEffect } from "react";
import { Form, Button, Table } from 'react-bootstrap';
import API from "../utils/API"
import SignInForm from "../components/SignInForm";
import AppBar from "../components/AppBar"


export function Signin() {
    return (
        <div>
            <AppBar link1="/signup" text1="Sign up" link2="/signin" text2="Sign in" />
            <SignInForm />
        </div>

    );
}
