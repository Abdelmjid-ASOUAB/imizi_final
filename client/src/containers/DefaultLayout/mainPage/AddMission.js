import React, { Fragment, Component } from "react";
import { Container, Row, Col, FormFeedback } from "reactstrap";
import { Form, Button, Card, FormControl, FormGroup } from "react-bootstrap";
import { Formik } from "formik";
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
  componentDidUpdate(){
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

  insertRealationMissionClient() {
    const email =localStorage.getItem("email");
    fetch(
      "http://localhost:4000/insertmissionclient?email=" +
        email 
      
    )
      .then(response => response.json())

      .then(response => {
        console.log("realation "+response.success);
      })
      .catch(err => console.error(err));
  }
  insertMission(v,{resetForm}) {
    const date = new Date().toLocaleString();
    fetch(
      "http://localhost:4000/insertmission?titel=" +
        v.titel +
        "&description=" +
        v.description +
        "&date=" +
        moment(date).format("YYYY-MM-DD")
    )
      .then(response => response.json())

      .then(response => {
        console.log(response.success);
        this.insertRealationMissionClient();
        resetForm({titel: "", description: ""});
            })
      .catch(err => console.error(err));
  }



  RemoveRelationnMissionClient = id => {
    fetch(
      "http://localhost:4000/removemissionClient?id=" +
       id
    )
      .then(response => response.json())
      .then(response =>{}
      
      )
      .catch(err => console.error(err));
  };

  RemoveMission = id => {
    fetch(
      "http://localhost:4000/removemission?id=" +
       id
    )
      .then(response => response.json())
      .then(response =>{
        this.RemoveRelationnMissionClient(id);  
      }
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
                <Button variant="primary" onClick={ () =>console.log("read it "+id)}  >Read </Button>
              </Col>
              <Col>
                <Button variant="info" onClick={ () =>console.log("modife"+localStorage.getItem('input'))}>Modife </Button>
              </Col>
              <Col>
                <Button variant="danger"   onClick={ () =>this.RemoveMission(id)}>Remove </Button>
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
          <Container>
            <Row className="justify-content-center">
              <Col>
                <Card className="text-center">
                  <Card.Header as="h5">Add New Mission </Card.Header>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Header as="h5">My Mission </Card.Header>
                </Card>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col>
                <Formik
                  initialValues={{
                    description: "",
                    
                    titel: ""
                  }}
                  onSubmit={this.insertMission.bind(this)}
                  render={({
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    errors,
                    touched
                  }) => (
                    <div>
                      <FormGroup>
                        <FormControl
                          placeholder="Title"
                          type="text"
                          name="titel"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      <br />

                        <Form.Control
                          as="textarea"
                          rows="10"
                          name="description"
                          placeholder="description"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </FormGroup>

                      <Container>
                        <Row
                          className="justify-content-center"
                          style={{ marginBottom: 10 }}
                        >
                          <Button
                          
                            onClick={handleSubmit}
                            type="submit"
                            color="sccess"
                          >
                            add mission
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
