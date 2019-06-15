import React, { Fragment, Component } from "react";
import { Container, Row, Col, FormFeedback } from "reactstrap";
import { Form, Button, Card, FormControl, FormGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";

import ClientMission from "./ClientMission";

class AddMisison extends Component {
  state = {
    mission: [],
    search: "",
    ClientMission: false
  };
  constructor(props) {
    super(props);

    this.getMissionByEmail();
  }

  getMissionByEmail = v => {
    fetch(
      "http://localhost:4000/missionemail?email=" +
        localStorage.getItem("email")
    )
      .then(response => response.json())
      .then(response =>
        this.setState({
          mission: response.data
        })
      )
      .catch(err => console.error(err));
  };

  renderMission = ({ id, Titel, description, date }) => (
    <div key={id}>
      <Card style={{ marginLeft: 5, marginRight: 5 }}>
        <Card.Header as="h5">{Titel}</Card.Header>
        <Card.Body>
          <Card.Title>{moment(date).format("MMMM D, YYYY")}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <Container>
            <Row className="justify-content-center">
              <Col>
                <Button variant="primary">Read </Button>
              </Col>
              <Col>
                <Button variant="info">Modife </Button>
              </Col>
              <Col>
                <Button variant="danger">Remove </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
  render() {
    const { mission } = this.state;

    if (this.state.ClientMission === false) {
      return (
        <main className="main">
          <Container >
          <Row className="justify-content-center">
              <Col >
          
              <Card className="text-center" >
        <Card.Header as="h5">Add New Mission </Card.Header>
        </Card>

              </Col >
              <Col>
              <Card  className="text-center">
        <Card.Header as="h5">My Mission </Card.Header>
        </Card>

              </Col >
              </Row>

            <Row className="justify-content-center">
              <Col >
              

                <Formik
                  initialValues={{
                    title: "",
                    description: "",
                   
                  }}
                  onSubmit={e => {}}
                  validationSchema={Yup.object().shape({
                    title: Yup.string().required(),
                    description: Yup.string().required()
                    
                  })}
                  render={({
                    handleSubmit,
                   
                    errors,
                    touched
                  }) => (
                    <div>
                      <FormGroup>
                        <FormControl
                          
                          placeholder="Title"
                          type="text"
                          name="title"
                        />
                        <br />

                        <Form.Control
                          as="textarea"
                          rows="10"
                          name="description"
                          placeholder="Description"
                        />
                      </FormGroup>

                      <Container>
                        <Row
                          className="justify-content-center"
                          style={{ marginBottom: 10 }}
                        >
                          <Button
                            variant="success"
                            onClick={handleSubmit}
                            type="submit"
                            color="primary"
                          >
                            Add Mission
                          </Button>
                        </Row>
                      </Container>
                      <Container>
                        <Row className="justify-content-center" />
                      </Container>
                    </div>
                  )}
                />
              </Col>
              
              <Col style={{ overflowY: "auto", height: 400 }}>
              
                {mission.map(this.renderMission)}
              </Col>
            </Row>
          </Container>

          <Container>
            <Row
              className="justify-content-center"
              style={{ marginBottom: 10 }}
            >
              <Button
                variant="info"
                onClick={e => this.setState({ ClientMission: true })}
              >
                BACK
              </Button>
            </Row>
          </Container>
        </main>
      );
    } else {
      return <ClientMission />;
    }
  }
  //  return
}

export default AddMisison;
