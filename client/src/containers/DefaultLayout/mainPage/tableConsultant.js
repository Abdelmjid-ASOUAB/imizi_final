import React, { Component } from "react";
import { Col, Table } from "reactstrap";
import { Modal, Button, FormControl, Form } from "react-bootstrap";

let but ="success";
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
    telSel: "",
    experienceSel: "",
    educationSel: "",
    certificatsSel: "",
    profileSel: "",
    projectsSel: "",
    languesSel: "",
    competenceSel: ""
  };

  getConsultant = v => {
    let url = "http://localhost:4000/getConsultant";
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
    contract,
    experience,
    competence,
    certificats,
    education,
    projects,
    langues,
    profile
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
      contractSel: contract,
      experienceSel: experience,
      competenceSel: competence,
      certificatsSel: certificats,
      educationSel: education,
      projectsSel: projects,
      languesSel: langues,
      profileSel: profile
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
    tel,
    langues,
    certificats,
    competence,
    experience,
    education,
    profile,
    projects
  }) => {
   

    return (
      <tr key={id} style={{ textAlign: "center"}}>
        <td>{profile}</td>
        <td>{nom}</td>
        <td>{prenom}</td>
        <td>{email}</td> 
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
        <td>
          <Button
            variant="danger"
            onClick={e => {
              console.log(id + "  " + e.target.value);
              this.handleShow(id, nom + " " + prenom, email);
            }}
          >
            {" "}
            Remove
          </Button>
        </td>
        <td>
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
                contract,
                experience,
                competence,
                certificats,
                education,
                projects,
                langues,
                profile
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
        v.idSel+
        "&competence=" +
        v.competenceSel+
        "&experience=" +
        v.experienceSel+
        "&education=" +
        v.educationSel+
        "&certificats=" +
        v.certificatsSel+
        "&profile=" +
        v.profileSel+
        "&projects=" +
        v.projectsSel+
        "&langues=" +
        v.languesSel
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
            <th>Profile</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Address mail</th>
              <th>Active</th>
              <th colspan="2">Activation</th>
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
            <Modal.Title>Edit consultant {this.state.idSel} </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              "max-height": "calc(100vh - 210px)",
              "overflow-y": "auto"
            }}
          >
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
                  <Form.Label>First name</Form.Label>
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
                  <Form.Label>Last name</Form.Label>
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
           
              <div className="input-group-prepend">
                <Form.Group as={Col} controlId="formGridState">
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
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>TJM (DHS)</Form.Label>

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
                <Form.Label>Type of Contract</Form.Label>
                <Form.Control as="select" defaultValue={this.state.contractSel}>
                  <option>CDI</option>
                  <option>Freelancer</option>
                </Form.Control>
              </Form.Group>

     
  
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-success"
              onClick={e => {
                this.updateConsultant(this.state);
                this.getConsultant();
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

export default tableConsultant;
