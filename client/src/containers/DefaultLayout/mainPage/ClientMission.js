import React, { Fragment, Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import moment from "moment";
import { Container, Row } from "reactstrap";
import addMission from "./AddMission";
import AddMisison from "./AddMission";
class MyMission extends Component {
  state = {
    mission: [],
    search: "",
    addMission:false
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

  searchMissionByEmail = v => {
    fetch(
      "http://localhost:4000/searchemailmission?title=" +
        this.state.search +
        "&description=" +
        this.state.search +
        "&email=" +
        localStorage.getItem("email")+"&kaka=haha"
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
      <Card style={{ marginLeft: 30, marginRight: 30 }}>
        <Card.Header as="h5">{Titel}</Card.Header>
        <Card.Body>
          <Card.Title>{moment(date).format("MMMM D, YYYY")}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Read it</Button>
        </Card.Body>
      </Card>
    </div>
  );

  render() {
    if (this.state.addMission=== false) {
      const { mission } = this.state;
    return (
      <main className="main">
        <h1> MainMission</h1>

        <div>
          <Form.Control
            type="text"
            placeholder="Search for Mission"
            style={{ marginLeft: 30, marginRight: 0, marginBottom: 30 }}
            onChange={e => {
              this.setState({
                search: e.target.value
              });
              this.searchMissionByEmail();
              if (e.target.value === "") {
                this.getMissionByEmail();
              }
            }}
          />
          {mission.map(this.renderMission)}

          <Container>
            <Row
              className="justify-content-center"
              style={{ marginBottom: 10 }}
            >
              <Button variant="success" onClick={e=>this.setState({addMission:true})}>Add new Mission</Button>
            </Row>
          </Container>
        </div>
      </main>
    );
    }else{
      return           <AddMisison/>;
    }
    
  }
}

export default MyMission;
