import React, { Fragment, Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import moment from 'moment';
class MainMission extends Component {
  state = {
    mission: [],
    search: ""
  };
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.getMission();
  }

  getMission = v => {
    fetch("http://localhost:4000/getmission")
      .then(response => response.json())
      .then(response =>
        this.setState({
          mission: response.data
        })
      )
      .catch(err => console.error(err));
  };

  searchMission = v => {
    fetch(
      "http://localhost:4000/searchmission?title=" +
        this.state.search +
        "&description=" +
        this.state.search
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
    const { mission } = this.state;
    return (
      <main className="main">
        <h1> MainMission</h1>

        <div>
          <Form.Control
            type="email"
            placeholder="Search a Mission"
            style={{ marginLeft: 30, marginRight: 0, marginBottom: 30 }}
            onChange={e => {
              this.setState({
                search: e.target.value
              });
              this.searchMission();
              if(e.target.value===''){
                this.getMission();
              }
            }}
          />
          {mission.map(this.renderMission)}
        </div>
      </main>
    );
  }
  //  return
}

export default MainMission;
