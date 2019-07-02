import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class ReadPdf extends Component {
  render() {
    const url ="http://localhost/"+localStorage.getItem("constEmail")+".pdf"

    console.log(localStorage.getItem("constEmail")  );
    
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col >
            {localStorage.getItem("constEmail")}
            <embed src= {url} width= "1100" height= "600"></embed>       

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ReadPdf;
