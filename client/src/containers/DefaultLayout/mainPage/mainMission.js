import React, {  Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import moment from 'moment';

class MainMission extends Component {
  state = {
    mission: [],
    search: "",
    Show:false
  };
  constructor(props) {
    super(props);
    this.getMission();

    // Don't call this.setState() here!
    if(localStorage.getItem('compte')=='client'){
        console.log("CLIENT");
        
        this.getMissionByEmail();

    }else  if(localStorage.getItem('compte')=='consultant'){
      console.log("CONSULTANT");
     
    }
    
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

  getMissionByEmail = v => {
    fetch("http://localhost:4000/missionemail?email="+localStorage.getItem('email'))
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
          <Button variant="primary" >Read it</Button>
        </Card.Body>
      </Card>
    </div>
  );

  render() {
    const { mission } = this.state;
    return (
      <main className="main">
                 
              <h2 style={{marginLeft:"45%"}} >Mission</h2>

        <div>
          <Form.Control
            type="text"
            placeholder="Search for Mission"
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

}

export default MainMission;
