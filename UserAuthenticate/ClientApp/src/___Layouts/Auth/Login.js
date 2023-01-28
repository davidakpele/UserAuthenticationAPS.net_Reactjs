import React, {Component} from 'react';
import { Container, Card, CardHeader, CardBody, Form, Label, FormGroup, Input, CardText, CardFooter, Button } from 'reactstrap';
import StyleLoginModule from './Login.module.css'
import { Link } from "react-router-dom";
export class Login extends Component {
    static displayName = Login.name;

    render() {
        return (
            <div>
            <Container className={StyleLoginModule.container}>
                <Card className="my-2">
                <CardHeader className='text-center'>
                Login Account
                </CardHeader>
                <CardBody>
              {/* <CardTitle tag="h5">
                Special Title Treatment
              </CardTitle> */}
              {/* <CardText>
                With supporting text below as a natural lead-in to additional content.
              </CardText> */}
              <Form method='POST'>
                <FormGroup>
                    <Label for="exampleEmail" hidden>Email </Label>
                    <Input id="exampleEmail" name="email" placeholder="Email" type="email"/>
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="examplePassword" hidden>Password</Label>
                    <Input id="examplePassword" name="password" placeholder="Password" type="password"/>
                </FormGroup>
                {' '}
                <Button type='submit' className='btn btn-primary'> Submit</Button>
                </Form>
            </CardBody>
                <CardFooter>
                    <CardText>
                        <span className={ StyleLoginModule.span }>Don't have account? <Link tag={Link} to="/Registration">Create new account</Link></span>    
                    </CardText>
                </CardFooter>
          </Card>
        </Container>
            </div>
        );
    }
}