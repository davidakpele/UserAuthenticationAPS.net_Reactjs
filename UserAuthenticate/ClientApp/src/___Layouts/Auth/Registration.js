import React, {Component} from 'react';
import { Container, Card, CardHeader, CardBody, Form, Label, FormGroup, Input, CardText, CardFooter, Button } from 'reactstrap';
import StylerRegisterionModule from './Registration.module.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import '../../___assets/css/Style.css'
import $ from 'jquery'

export class Registration extends Component {
    static displayName = Registration.name;
    handleSubmit = (e) => {
        e.preventDefault();
        //hide messages
        $("#errorMessage").hide();
        let name = $("input#exampleName").val();
        let email = $("input#exampleEmail").val();
        let password = $("input#examplePassword").val();
        let confirmpassword = $("input#exampleConfimPassword").val();
        let Validemailfilter = (/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (name === "") {
            $("#errorMessage").fadeIn().text("Please enter your full name.!");
            $("input#exampleName").focus();
            return false;
        }
        if (email === "") {
            $("#errorMessage").fadeIn().text("Please enter your email address.!");
            $("input#exampleEmail").focus();
            return false;
        } else if (!Validemailfilter.test(email)) {
            $("#errorMessage").fadeIn().text("Please provide a valid email address");
            $("input#exampleEmail").focus();
             return false;
        }
        if (password === "") {
            $("#errorMessage").fadeIn().text("Please enter your password.!");
            $("input#examplePassword").focus();
            return false;
        } else if (password.length < 8) {
            $("#errorMessage").fadeIn().text("Password length must be atleast 8 characters");
            $("input#examplePassword").focus();
            return false;
        }
        if (confirmpassword === "") {
            $("#errorMessage").fadeIn().text("Please enter same password.!");
            $("input#exampleConfimPassword").focus();
            return false;
        } else if (password !== confirmpassword) {
            $("#errorMessage").fadeIn().html("<b class='bol'>Sorry..! </b>Mismatch Password.");
            $("input#exampleConfimPassword").focus();
            return false;
        }
        const url = '';
        const data = '';
        axios.post(url, data)
            .then((result) => {
                
            }).fail((error) => {
            console.log(error);
        })
    }
    render() {        
        return (
            <div>
            <Container className={StylerRegisterionModule.container}>
                <Card className="my-2">
                    <CardHeader className='text-center'>Registration Account</CardHeader>
                        <CardBody>
                            <div id="errorMessage" className="error error-ico" style={{ display: 'none' }}></div>
                            <Form method='POST' onSubmit={this.handleSubmit} autoComplete="off">
                                <FormGroup>
                                    <Label for="exampleName" hidden>FullName </Label>
                                    <Input id="exampleName" name="name" placeholder="FullName" type="text" />
                                </FormGroup>
                                {' '}
                                <FormGroup>
                                    <Label for="exampleEmail" hidden>Email</Label>
                                    <Input id="exampleEmail" name="email" placeholder="Email" type="email"/>
                                </FormGroup>
                                {' '}
                                <FormGroup>
                                    <Label for="examplePassword" hidden>Password</Label>
                                    <Input id="examplePassword" name="password" placeholder="Password" type="password"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleConfimPassword" hidden>Password</Label>
                                    <Input id="exampleConfimPassword" name="confirmpassword" placeholder="Confirm Password" type="password"/>
                                </FormGroup>
                                {' '}
                                <Button type='submit' className='btn btn-primary'> Submit</Button>
                            </Form>
                            </CardBody>
                            <CardFooter>
                                <CardText>
                                    <span className={ StylerRegisterionModule.span }>Already have account? <Link tag={Link} to="/Login">Login</Link></span>    
                                </CardText>
                            </CardFooter>
                        </Card>
                </Container>
            </div>
        );
    }
}