import React, { Component } from 'react';
import './Headeridex.css';

import  {Nav,Form,FormControl,Button} from 'react-bootstrap'




import { Navbar } from 'react-bootstrap'

class HeaderIndex extends Component {

    render() {
        return (
            <div className="App">
                <Navbar fixed="top" bg="primary" variant="dark">
                    <Navbar.Brand href="#home">IMZII</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/#/pdf">Contact us</Nav.Link>
                        <Nav.Link href="/#/login"> Sign in/ up</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    };
}

export default HeaderIndex;
