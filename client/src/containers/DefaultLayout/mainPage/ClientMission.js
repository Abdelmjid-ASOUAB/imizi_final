import React, {  Component } from "react";
import { Form, Button, Card, Modal,Col,FormControl} from "react-bootstrap";
import moment from "moment";
import { Container, Row } from "reactstrap";
import AddMisison from "./AddMission";

class MyMission extends Component {
  state = {
    mission: [],
    search: "",
    addMission: false,
    Show:false,
    title:"",
    desc:""
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

  searchMissionByEmail = v => {
    fetch(
      "http://localhost:4000/searchemailmission?title=" +
        this.state.search +
        "&description=" +
        this.state.search +
        "&email=" +
        localStorage.getItem("email") +
        "&kaka=haha"
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

  
  insertMission() {
    const date = new Date();
    fetch(
      "http://localhost:4000/insertmission?titel=" +
       this.state.title +
        "&description=" +
        this.state.desc +
        "&date=" +
        moment(date).format("YYYY-MM-DD")
    )
      .then(response => response.json())

      .then(response => {
        console.log(response.success);
        this.insertRealationMissionClient();
       
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
      <Card style={{ marginLeft: 30, marginRight: 30 }}>
        <Card.Header as="h5">{Titel}</Card.Header>
        <Card.Body>
          <Card.Title>{moment(date).format("MMMM D, YYYY")}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="danger"   onClick={ () =>this.RemoveMission(id)}>Remove </Button>

        </Card.Body>
      </Card>
    </div>
  );

  render() {
    if (this.state.addMission === false) {
      const { mission } = this.state;
      return (
        <main className="main">
          <div>
            <Container>
              <Row
                className="justify-content-center"
                style={{ marginBottom: 10,marginLeft:5,marginRight:1 }}
              >
                <strong>
                  <h1>Missions</h1>
                </strong>
                <Form.Control
                  type="text"
                  placeholder="Search for Mission"
                  style={{
                    marginLeft: 10,
                    marginRight: 18,
                    marginBottom: 10,
                    marginTop: 20
                  }}
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
              </Row>
            </Container>

            {mission.map(this.renderMission)}

            <Container>
              <Row
                className="justify-content-center"
                style={{ marginBottom: 10 }}
              >
                <Button
                  variant="success"
                  onClick={e => {
                    this.setState({ Show: true });
                    console.log(localStorage);
                  }}
                >
                  Add Mission
                </Button>
              </Row>
            </Container>
          </div>

                 
        <Modal
          show={this.state.Show}
          onHide={e => {
            this.setState({ Show: false });
          }}
        >
          <Modal.Header
            style={{ backgroundColor: "#28c3d4", color: "#ffffff" }}
          >
            <Modal.Title>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group
                  as={Col}
                  controlId="formGridState"
                  onChange={e =>
                    this.setState({
                      title: e.target.value
                    })
                  }
                >
                  <Form.Label>Title</Form.Label>
                  <FormControl
                    type="text"
                    name="title"
                    defaultValue={this.state.emailSel}
                  />
                </Form.Group>
            
                <Form.Group
                  as={Col}
                  controlId="formGridState"
                  onChange={e =>
                    this.setState({
                      desc: e.target.value
                    })
                  }
                >
                  <Form.Label>Description</Form.Label>

                  <Form.Control as="textarea" rows="8" />
                </Form.Group>
        
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="success"
              onClick={e => {
                if(this.state.title!="" && this.state.desc!=""){
                  this.insertMission();
                this.setState({ Show: false });

                }else{
                  console.log("rempl");
                  
                }
                
              }}
            >
              Submit
            </Button>
            <Button
              variant="danger"
              onClick={e => {
                this.setState({ Show: false });
              }}
            >
              Cancel 
            </Button>
          </Modal.Footer>
        </Modal>
     
     
        </main>
      );
    } else {
      return <AddMisison />;
    }
  }
}

export default MyMission;
