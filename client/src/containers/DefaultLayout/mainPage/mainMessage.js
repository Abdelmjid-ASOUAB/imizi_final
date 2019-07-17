import React, { Component } from "react";
import { Col } from "reactstrap";
import { Button, FormControl, Form } from "react-bootstrap";

class MainMessage extends Component {
  state = {
    Edshow: false,
    consultant: [],
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
    competenceSel: "",
    file:"",
    fileName:"Choose CV File",
  };
  constructor(props) {
    super(props);

    this.handleCloseEd = this.handleCloseEd.bind(this);
    this.getConsultant();
   
  }
  handleCloseEd() {
    this.setState({ Edshow: false });
  }

  getConsultant = v => {
    let url = "http://localhost:4000/getConsultanttEmail?email="+localStorage.getItem("email");
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState(
          {
            consultant: response.data,
            idSel:response.data[0].id,
            nameSel:response.data[0].nom,
            prenomSel:response.data[0].prenom,
            emailSel:response.data[0].email,
            pwdSel:response.data[0].pwd,
            telSel:response.data[0].tel,
            senioriteSel:response.data[0].seniorite,
            availabilitySel:response.data[0].disponibilite,
            tjmSel:response.data[0].Tjm,
            competenceSel:response.data[0].competence,
            experienceSel:response.data[0].experience,
            educationSel:response.data[0].education,
            certificatsSel:response.data[0].certificats,
            profileSel:response.data[0].profile,
            projectsSel:response.data[0].projects,
            languesSel:response.data[0].langues,
            contractSel:response.data[0].contract,

          },
          
        );
      })
      .catch(err => console.error(err));
  };

  onFileChange = e => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.files[0].name
    });
  };

  render() {
    return (
      <div className="main">
        MainMessages
        <Button
          style={{ color: "#ffffff" }}
          variant="info"
          onClick={e => {
            
              console.log(this.state);
              
          }}
        >
          {" "}
          Edite
        </Button>
        <form>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
              onChange={this.onFileChange}
              accept=".pdf"

            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              {this.state.fileName}
            </label>
          </div>

          </Form.Group>

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
              <FormControl placeholder="First Name" type="text" name="nom" defaultValue={this.state.prenomSel} />
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
              <FormControl placeholder="First Name" type="text" name="prenom" defaultValue={this.state.nameSel} />
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
              <FormControl placeholder="First Name" type="email" name="email" defaultValue={this.state.emailSel}/>
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
                placeholder="pwd"
                type="text"
                name="pwd"
                defaultValue={this.state.pwdSel}
              />
            </Form.Group>
          </div>
          <Form.Group
            as={Col}
            controlId="formGridState"
            onChange={e =>
              this.setState({
                profileSel: e.target.value
              })
            }
          >
            <Form.Label>Profile</Form.Label>
            <FormControl placeholder="Profile" type="text" name="profile" defaultValue={this.state.profileSel}/>
          </Form.Group>
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
              <Form.Control as="select" defaultValue="">
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
              <Form.Control as="select" defaultValue={this.state.availabilitySel}>
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

              <FormControl placeholder="tel" type="text" name="tel" defaultValue={this.state.telSel}/>
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
            <Form.Control as="select" defaultValue={this.state.contractSel+""}>
              <option>CDI</option>
              <option>Freelancer</option>
              <option>aa</option>
            </Form.Control>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridState"
            onChange={e =>
              this.setState(
                {
                  experienceSel: e.target.value
                },
                e => {
                  console.log(this.state.experienceSel);
                }
              )
            }
          >
            <Form.Label>Experience</Form.Label>
            <Form.Control
              as="textarea"
              style={{ fontWeight: "bold", fontSize: "15px" }}
              rows="3"
              defaultValue={this.state.experienceSel
                .split(",")
                .map((exp, index) => (index == 0 ? exp : "\n" + exp))}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            controlId="formGridState"
            onChange={e =>
              this.setState(
                {
                  competenceSel: e.target.value
                },
                e => {
                  console.log(this.state.competenceSel);
                }
              )
            }
          >
            <Form.Label>Competence</Form.Label>

            <Form.Control
              style={{ fontWeight: "bold", fontSize: "15px" }}
              rows="3"
              as="textarea"
              placeholder="Insert Competence"
              defaultValue={this.state.competenceSel
                .split(",")
                .map((exp, index) => (index == 0 ? exp : "\n" + exp))}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridState"
            onChange={e => console.log()}
          >
            <Form.Label>Education</Form.Label>

            <Form.Control
              style={{ fontWeight: "bold", fontSize: "15px" }}
              rows="3"
              as="textarea"
              placeholder={this.state.educationSel}
              defaultValue={this.state.educationSel
                .split(",")
                .map((exp, index) => (index == 0 ? exp : "\n" + exp))}
              
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridState"
            onChange={e =>
              this.setState(
                {
                  certificatsSel: e.target.value
                },
                e => {
                  console.log(this.state.certificatsSel);
                }
              )
            }
          >
            <Form.Label>Certificats</Form.Label>

            <Form.Control
              style={{ fontWeight: "bold", fontSize: "15px" }}
              rows="3"
              as="textarea"
              placeholder="Insert Certificats"
              defaultValue={this.state.certificatsSel
                .split(",")
                .map((exp, index) => (index == 0 ? exp : "\n" + exp))}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridState"
            onChange={e =>
              this.setState(
                {
                  projectsSel: e.target.value
                },
                e => {
                  console.log(this.state.projectsSel);
                }
              )
            }
          >
            <Form.Label>Projects</Form.Label>

            <Form.Control
              style={{ fontWeight: "bold", fontSize: "15px" }}
              rows="3"
              as="textarea"
              placeholder="Insert Projects"
              defaultValue={this.state.projectsSel
                .split(",")
                .map((exp, index) => (index == 0 ? exp : "\n" + exp))}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridState"
            onChange={e =>
              this.setState(
                {
                  languesSel: e.target.value
                },
                e => {
                  console.log(this.state.languesSel);
                }
              )
            }
          >
            <Form.Label>Langues</Form.Label>
            <FormControl
              placeholder="Insert langues"
              type="text"
              name="langues"
              defaultValue={this.state.languesSel}
            />
          </Form.Group>
        </form>
      </div>
    );
  }
}

//
export default MainMessage;
