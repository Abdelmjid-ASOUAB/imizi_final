import React, { Component } from 'react';
import './Headeridex.css';

import  {Nav,Form,FormControl,Button,NavDropdown} from 'react-bootstrap'
import { goToAnchor } from 'react-scrollable-anchor'




import { Navbar } from 'react-bootstrap'

class HeaderIndex extends Component {

    render() {
        return (
            <div className="App">
                <Navbar fixed="top" bg="primary" variant="dark">
                    <Navbar.Brand href="#home">IMZII</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link onClick={e=>goToAnchor('section1', true)} >Contact us</Nav.Link>
                        <NavDropdown title="Sign in/ up" id="basic-nav-dropdown">
        <NavDropdown.Item href="/#/admin">Admin</NavDropdown.Item>
        <NavDropdown.Item href="/#/login">Client / Consultant</NavDropdown.Item>
       
      </NavDropdown>
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
