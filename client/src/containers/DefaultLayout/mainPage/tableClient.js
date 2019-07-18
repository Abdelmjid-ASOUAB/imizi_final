import React, {  Component } from "react";
import {
  Col,
  Table
} from "reactstrap";
import {
  Modal,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
let but = "warning";

class tableClient extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.handleShowEd = this.handleShowEd.bind(this);
    this.handleCloseEd = this.handleCloseEd.bind(this);

    this.getClient();
  }
  state = {
   
    consultant: [],
    contract: "",
    Rshow: false,
    Edshow: false,
    idSel: "",
    representantSel: "",
    societyoSel: "",
    emailSel: "",
    pwdSel: "",
    telSel: ""
  };

  getClient = v => {
    let url =
      "http://localhost:4000/getClient" ;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState(
          {
            consultant: response.data
          },
          () => {
            console.log(this.state.consultant);
          }
        );
      })
      .catch(err => console.error(err));

    console.log(url);
  };

  handleClose() {
    this.setState({ Rshow: false });
  }

  handleShow(id, name, society,email) {
    this.setState({ Rshow: true, idSel: id, representantSel: name, emailSel: email,societyoSel:society });
  }

  handleCloseEd() {
    this.setState({ Edshow: false });
  }

  handleShowEd(
    id,
    representant,
    email,
    pwd,
    tel,
    societe
  ) {
    this.setState({
      Edshow: true,
      idSel: id,
      representantSel: representant,
      emailSel: email,
      pwdSel: pwd,
      telSel: tel,
      societyoSel: societe,
    });
  }

  changeActive = (id, active) => {
    let url =
      "http://localhost:4000/activeClient?id=" + id + "&active=" + active;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.getClient();
      })
      .catch(err => console.error(err));
  };

  removeConsultant = id => {
    let url = "http://localhost:4000/removeClient?id=" + id;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.getClient();
      })
      .catch(err => console.error(err));
  };
  renderConsultant = ({
    id,
    representant,
    mail,
    pwd,
    active,
    tel,
    societe
  }) => {
    let color = "";

    if (active == "active") {
      color = "#1fab89";
    } else if (active == "inactive") {
      color = "#ff5335";
    } else if (active == "waiting") {
      color = "#f08a5d";
    }

    return (
      <tr key={id} style={{ textAlign: "center"}}>
        <td>{societe}</td>
        <td>{representant}</td>
        <td>{mail}</td>
        <td>
        <Button
          onClick={e => {
            console.log(id + "  " + e.target.value);
            this.changeActive(id,active == "inactive" ? "active" : "inactive");
          }}
          variant={active == "inactive" ? "dark" : "success"}
          >
           {active == "inactive" ? "Inactive" : "Active"}
           </Button>
        </td>
        <td style={{ backgroundColor: "#ffffff" }}>
          <Button
            variant="danger"
            onClick={e => {
              console.log(id + "  " + e.target.value);
              this.handleShow(id,representant,societe, mail);
            }}
          >
            {" "}
            Remove
          </Button>
        </td>
        <td style={{ backgroundColor: "#ffffff", color: "#ffffff" }}>
          <Button
            style={{ color: "#ffffff" }}
            variant="info"
            onClick={e => {
              console.log(id + "  " + e.target.value);
              this.handleShowEd(
                id,
                representant,
                mail,
                pwd,
                tel,
                societe
              );
            }}
          >
            {" "}
            Edit
          </Button>
        </td>
      </tr>
    );
  };

  updateConsultant = (v)=> {
    console.log(v);

    fetch(
      "http://localhost:4000/updateclient?representant=" +
        v.representantSel +
        "&societe=" +
        v.societyoSel +
        "&tel=" +
        v.telSel +
        "&email=" +
        v.emailSel +
        "&pwd=" +
        v.pwdSel +
        "&id=" +
        v.idSel
    )
      .then(response => response.json())

      .then(response => {
        if (response.success === true) {
        
          console.log(response.success);
        } else if (response.success.errno === 1062) {
          console.log("deplicact Email");
          this.setState({ deplicact: true, next: false }, () => {
            console.log(this.state.deplicact);
          });
        }
      })
      .catch(err => console.error(err));
  };

  render() {
    const { consultant } = this.state;

    return (
      <div className="main">
        <Table striped bordered hover responsive size="sm" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>society</th>
              <th>Representative</th>
              <th>address mail</th>
              <th>Activation</th>
              <th  colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>{consultant.map(this.renderConsultant)}</tbody>
        </Table>

        <Modal show={this.state.Rshow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Remove Consultant {this.state.idSel} ?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Name : <strong> {this.state.representantSel}</strong> <br /> 
            society : <strong> {this.state.societyoSel}</strong> <br /> 
            Email: <strong>{this.state.emailSel}{" "}</strong> 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="outline-danger"
              onClick={e => {
                this.handleClose();
                this.removeConsultant(this.state.idSel);
              }}
            >
              Remove Consultant
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.Edshow} onHide={this.handleCloseEd}>
          <Modal.Header  center closeButton>
            <Modal.Title>Edit client {this.state.idSel}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="input-group-prepend">
                <Form.Group
                  as={Col}
                  controlId="formGridState"
                  onChange={e =>
                    this.setState({
                      representantSel: e.target.value
                    })
                  }
                >
                  <Form.Label>Representative</Form.Label>
                  <FormControl
                    placeholder="Representative"
                    type="text"
                    name="nom"
                    defaultValue={this.state.representantSel}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="formGridState"
                  onChange={e =>
                    this.setState({
                      societyoSel: e.target.value
                    })
                  }
                >
                  <Form.Label>Society</Form.Label>
                  <FormControl
                    placeholder="Society"
                    type="text"
                    name="prenom"
                    defaultValue={this.state.societyoSel}
                  />
                </Form.Group>
              </div>

              <div className="input-group-prepend">
                <Form.Group
                  as={Col}
                  controlId="formGridState"
                  onChange={e =>
                    this.setState({
                      emailSel: e.target.value
                    })
                  }
                >
                  <Form.Label>Address mail</Form.Label>
                  <FormControl
                    placeholder="First Name"
                    type="email"
                    name="email"
                    defaultValue={this.state.emailSel}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="formGridState"
                  onChange={e =>
                    this.setState({
                      pwdSel: e.target.value
                    })
                  }
                >
                  <Form.Label>Password</Form.Label>
                  <FormControl
                    placeholder="First Name"
                    type="text"
                    name="pwd"
                    defaultValue={this.state.pwdSel}
                  />
                </Form.Group>
              </div>


              <div
                className="justify-content-center"
                style={{ marginBottom: 10 }}
              >
                <Form.Group
                 as={Col}
                 controlId="formGridState"
                >
                  <Form.Label>Phone number</Form.Label>

                  <FormControl
                    placeholder="tel"
                    type="text"
                    name="tel"
                    defaultValue={this.state.telSel}
                    onChange={e =>
                      this.setState(
                        {
                          telSel: e.target.value
                        },
                        e => {
                          console.log(this.state.telSel);
                        }
                      )
                    }
                  />                  </Form.Group>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
                      <Button
              variant="outline-success"
              onClick={e => {
                this.updateConsultant(this.state);
                this.getClient();
                this.handleCloseEd();
              
                
              }}
            >
              Submit
            </Button>
            <Button variant="outline-danger" onClick={this.handleCloseEd}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
  //  return
}

export default tableClient;
