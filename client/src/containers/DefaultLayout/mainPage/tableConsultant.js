import React, { Fragment, Component } from "react";
import {
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  FormFeedback,
  Row,
  Table
} from "reactstrap";
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  Alert,
  Form,
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
let but = "warning";

class tableConsultant extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.handleShowEd = this.handleShowEd.bind(this);
    this.handleCloseEd = this.handleCloseEd.bind(this);

    this.getConsultant();
  }
  state = {
    competence: "",
    seniorite1: "",
    seniorite2: "",
    seniorite3: "",
    seniorite4: "",
    diponibilite1: "",
    diponibilite2: "",
    diponibilite3: "",
    diponibilite4: "",
    consultant: [],
    activeTab: "1",
    skills: "",
    tjm: "",
    contract: "",
    Rshow: false,
    Edshow: false,
    idSel: "",
    nameSel: "",
    prenomSel: "",
    emailSel: "",
    pwdSel: "",
    senioriteSel: "",
    availabilitySel: "",
    tjmSel: "",
    contractSel: "",
    telSel: ""
  };

  getConsultant = v => {
    let url =
      "http://localhost:4000/getConsultant" ;
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

  handleShow(id, name, email) {
    this.setState({ Rshow: true, idSel: id, nameSel: name, emailSel: email });
  }

  handleCloseEd() {
    this.setState({ Edshow: false });
  }

  handleShowEd(
    id,
    name,
    prenom,
    email,
    pwd,
    tel,
    seniorite,
    availability,
    tjm,
    contract
  ) {
    this.setState({
      Edshow: true,
      idSel: id,
      nameSel: name,
      prenomSel: prenom,
      emailSel: email,
      pwdSel: pwd,
      telSel: tel,
      senioriteSel: seniorite,
      availabilitySel: availability,
      tjmSel: tjm,
      contractSel: contract
    });
  }

  changeActive = (id, active) => {
    let url =
      "http://localhost:4000/activeConsultant?id=" + id + "&active=" + active;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.getConsultant();
      })
      .catch(err => console.error(err));
  };

  removeConsultant = id => {
    let url = "http://localhost:4000/removeConsultant?id=" + id;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.getConsultant();
      })
      .catch(err => console.error(err));
  };
  renderConsultant = ({
    id,
    nom,
    prenom,
    seniorite,
    email,
    pwd,
    disponibilite,
    Tjm,
    contract,
    active,
    tel
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
      <tr key={id} style={{ textAlign: "center", backgroundColor: color }}>
        <td>{nom}</td>
        <td>{prenom}</td>
        <td>{email}</td>
        <td>{seniorite}</td>
        <td>{disponibilite}</td>
        <td>{Tjm}</td>
        <td>
          <Form.Control
            as="select"
            onChange={e => {
              console.log(id + "  " + e.target.value);
              this.changeActive(id, e.target.value);
            }}
          >
            <option
              style={{ backgroundColor: "#1fab89", color: "#ffffff" }}
              selected={active == "active" ? "selected" : ""}
            >
              active
            </option>
            <option
              style={{ backgroundColor: "#f08a5d", color: "#ffffff" }}
              selected={active == "waiting" ? "selected" : ""}
            >
              waiting
            </option>
            <option
              style={{ backgroundColor: "#ff5335", color: "#ffffff" }}
              selected={active == "inactive" ? "selected" : ""}
            >
              inactive
            </option>
          </Form.Control>
        </td>
        <td style={{ backgroundColor: "#ffffff" }}>
          <Button
            variant="danger"
            onClick={e => {
              console.log(id + "  " + e.target.value);
              this.handleShow(id, nom + " " + prenom, email);
            }}
          >
            {" "}
            remove
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
                nom,
                prenom,
                email,
                pwd,
                tel,
                seniorite,
                disponibilite,
                Tjm,
                contract
              );
            }}
          >
            {" "}
            Edite
          </Button>
        </td>
      </tr>
    );
  };

  updateConsultant = v => {
    console.log(v);

    fetch(
      "http://localhost:4000/updateconsultant?nom=" +
        v.nameSel +
        "&prenom=" +
        v.prenomSel +
        "&tel=" +
        v.telSel +
        "&email=" +
        v.emailSel +
        "&pwd=" +
        v.pwdSel +
        "&seniorite=" +
        v.senioriteSel +
        "&availability=" +
        v.availabilitySel +
        "&tjm=" +
        v.tjmSel +
        "&contract=" +
        v.contractSel +
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
      <div className="s">
        <Table
          striped
          bordered
          hover
          responsive
          size="sm"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>seniorite</th>
              <th>diponibilite</th>
              <th>Tjm</th>
              <th>Active</th>
              <th colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>{consultant.map(this.renderConsultant)}</tbody>
        </Table>

        <Modal show={this.state.Rshow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Remove Consultant {this.state.idSel} ?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Name : <strong> {this.state.nameSel}</strong> <br /> Email:{" "}
            {this.state.emailSel}{" "}
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
          <Modal.Header closeButton>
            <Modal.Title>Edite Consultant {this.state.idSel} ?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="input-group-prepend">
                <Form.Group
                  as={Col}
                  controlId="formGridState"
                  onChange={e =>
                    this.setState({
                      nameSel: e.target.value
                    })
                  }
                >
                  <Form.Label>First Name</Form.Label>
                  <FormControl
                    placeholder="First Name"
                    type="text"
                    name="nom"
                    defaultValue={this.state.nameSel}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="formGridState"
                  onChange={e =>
                    this.setState({
                      prenomSel: e.target.value
                    })
                  }
                >
                  <Form.Label>Last Name</Form.Label>
                  <FormControl
                    placeholder="First Name"
                    type="text"
                    name="prenom"
                    defaultValue={this.state.prenomSel}
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
                  <Form.Label>Email</Form.Label>
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
                    type="password"
                    name="pwd"
                    defaultValue={this.state.pwdSel}
                  />
                </Form.Group>
              </div>

              <div className="input-group-prepend">
                <Form.Group
                  as={Col}
                  controlId="formGridState"
                  onChange={e =>
                    this.setState({
                      senioriteSel: e.target.value
                    })
                  }
                >
                  <Form.Label>Seniorite</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue={this.state.senioriteSel}
                  >
                    <option>Choose your seniority</option>
                    <option>Expert [+10 years]</option>
                    <option>Senior [5 to 10 years]</option>
                    <option>intermediate [3 to 5 years]</option>
                    <option>beginner [0 to 5 years]</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="formGridState"
                  onChange={e =>
                    this.setState({
                      availabilitySel: e.target.value
                    })
                  }
                >
                  <Form.Label>availability</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue={this.state.availabilitySel}
                  >
                    <option>Choose your availability</option>
                    <option>immediate</option>
                    <option>In 2 weeks</option>
                    <option>1 month</option>
                    <option>+ 1 month</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="input-group-prepend">

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Tel</Form.Label>

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
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
              <Form.Label>TJM</Form.Label>

              <FormControl
                placeholder="Tjm"
                type="number"
                name="tjm"
                min="1000"
                max="4946"
                step="100"
                defaultValue={this.state.tjmSel}
                onChange={e =>
                  this.setState(
                    {
                      tjmSel: e.target.value
                    },
                    e => {
                      console.log(this.state.tjmSel);
                    }
                  )
                }
              />
              </Form.Group>
              </div>

              <Form.Group
                as={Col}
                controlId="formGridState"
                onChange={e =>
                  this.setState(
                    {
                      contractSel: e.target.value
                    },
                    e => {
                      console.log(this.state.contractType);
                    }
                  )
                }
              >
                <Form.Label>Type of Contracts</Form.Label>
                <Form.Control as="select" defaultValue={this.state.contractSel}>
                  <option>CDI</option>
                  <option>Freelancer</option>
                </Form.Control>
              </Form.Group>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseEd}>
              Close
            </Button>
            <Button
              variant="outline-success"
              onClick={e => {
                this.updateConsultant(this.state);
                this.getConsultant();
                this.handleCloseEd();
              }}
            >
              Edite Consultant
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  //  return
}

export default tableConsultant;
