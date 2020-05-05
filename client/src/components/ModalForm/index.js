import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

class ModalForm extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handelChange.bind(this);
        this.handelSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }



    render() {
        return (
            <Form onSubmit= {this.handleSubmit} >
                <FormGroup>
                    <Label style={{ color: "black", fontSize: '30px', fontFamily: "londrina Shadow" }} for="name">Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label style={{ color: "black", fontSize: '30px', fontFamily: "londrina Shadow" }} for="email">Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        onChange={this.handkeChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label style={{ color: "black", fontSize: '30px', fontFamily: "londrina Shadow" }} for="message">Message:</Label>
                    <Input
                        type="textarea"
                        name="message"
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <Button type="button" style={{ color: "black", fontSize: '30px', fontFamily: "londrina Shadow" }}>
                    Add Person </Button>
            </Form>
        );
    };
};

export default ModalForm;