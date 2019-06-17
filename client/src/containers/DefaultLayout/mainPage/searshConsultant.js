import React, { Fragment, Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  FormFeedback,
  Row,

} from "reactstrap";

import {
  FormGroup,
  FormControl,
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup,
  Form,
} from "react-bootstrap";

var bgColors = {
  Default: "#81b71a",
  Blue: "#00B1E1",
  Cyan: "#37BC9B",
  Green: "#8CC152",
  Red: "#E9573F",
  Yellow: "#F6BB42"
};
class searshConsultant extends Component {
  OnSubmit() {
    console.log("onSubmit");
  }

  render() {
    return (
      <main className="main">
        {" "}
        <Row>
          <Col xs={12} md={8}>
            xs=12 md=8
          </Col>
          <Col xs={6} md={4} style={{ backgroundColor: bgColors.Yellow }}>
        <form>
            
            <FormControl placeholder="skills" type="text" name="skills" />
            <Form.Group
            as={Col}
            controlId="formGridState"
            onChange={e =>
              this.setState({
                seniorite: e.target.value
              })
            }
          >
            <Form.Label>Seniorite</Form.Label>
            <Form.Control as="select">
              <option>Choose your seniority</option>
              <option>Expert [+10 years]</option>
              <option>Senior [5 to 10 years]</option>
              <option>intermediate [3 to 5 years]</option>
              <option>beginner 0 to 5 years]</option>
            </Form.Control>
            <Form.Label>availability</Form.Label>
            <Form.Control as="select">
              <option>Choose your availability</option>
              <option>immediate</option>
              <option>In 2 weeks</option>
              <option>1 month</option>
              <option>+ 1 month</option>
            </Form.Control>
          </Form.Group>
           
        </form>

          </Col>
        </Row>
      </main>
    );
  }
  //  return
}

export default searshConsultant;
