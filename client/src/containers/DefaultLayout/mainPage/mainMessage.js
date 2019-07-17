import React, { Component } from "react";
import { Col, Table } from "reactstrap";
import {Button, FormControl, Form } from "react-bootstrap";
let nbr = 0;
let projet,education,langues,certificats,competence = "";


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
    file: "",
    fileName: "Resume File",
    experience: [],
    ssss:[]
  };
  constructor(props) {
    super(props);

    this.handleCloseEd = this.handleCloseEd.bind(this);
    this.getConsultant();
    this.getExperience();
    this.cmdExmpl()
  }

  handleCloseEd() {
    this.setState({ Edshow: false });
  }

  getExperience = v => {
    let url = "http://localhost:4000/getExperience?email=" + localStorage.getItem("email");
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log("get Expr");

        this.setState(
          {
            experience: response.data
          },
          () => {
            console.log(this.state.consultant);
          }
        );
      })
      .catch(err => console.error(err));

    console.log(url);
  };

  renderConsultant = ({
    id,
    intitule,
    description,
    dateDebut,
    dateFin,
    duree,

  }) => {

    nbr += parseInt(duree);

    return (
      <tr key={id} style={{}}>
        <td>{dateDebut}</td>
        <td>{dateFin}</td>
        <td>{duree}{duree != 1 ? "years" : "year"}</td>
        <td style={{ textAlign: "left" }}>{intitule}</td>
        <td style={{ textAlign: "left" }}>{description}</td>

      </tr>
    );
  };

  getConsultant = v => {
    let url = "http://localhost:4000/getConsultanttEmail?email=" + localStorage.getItem("email");
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState(
          {
            consultant: response.data,
            idSel: response.data[0].id,
            nameSel: response.data[0].nom,
            prenomSel: response.data[0].prenom,
            emailSel: response.data[0].email,
            pwdSel: response.data[0].pwd,
            telSel: response.data[0].tel,
            senioriteSel: response.data[0].seniorite,
            availabilitySel: response.data[0].disponibilite,
            tjmSel: response.data[0].Tjm,
            competenceSel: response.data[0].competence,
            experienceSel: response.data[0].experience,
            educationSel: response.data[0].education,
            certificatsSel: response.data[0].certificats,
            profileSel: response.data[0].profile,
            projectsSel: response.data[0].projects,
            languesSel: response.data[0].langues,
            contractSel: response.data[0].contract,

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

  cmdExmpl = e => {
    fetch(  "http://localhost:4000/getCmnd")
      .then(response => response.json())
      .then(response => {
        this.setState({
          ssss: response.success
        });
      })
     
      .catch(err => console.error(err));
  };
  render() {
    nbr = 0;
    const { experience } = this.state;

    return (
      <div className="main">

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
              <Form.Label>Address mail</Form.Label>
              <FormControl placeholder="First Name" type="email" name="email" defaultValue={this.state.emailSel} />
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
          <br />

          <Form.Group >
            <Form.Label>Please enter your resume file</Form.Label>

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
                profileSel: e.target.value
              })
            }
          >
            <Form.Label>Profile</Form.Label>
            <FormControl placeholder="Profile" type="text" name="profile" defaultValue={this.state.profileSel} />
          </Form.Group>
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
            <Form.Control as="select" defaultValue={this.state.contractSel + ""}>
              <option>CDI</option>
              <option>Freelancer</option>
              <option>aa</option>
            </Form.Control>
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
              <Form.Label>Seniority</Form.Label>
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
              <Form.Label>Phone Number</Form.Label>

              <FormControl placeholder="tel" type="text" name="tel" defaultValue={this.state.telSel} />
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
                  experienceSel: e.target.value
                },
                e => {
                  console.log(this.state.experienceSel);
                }
              )
            }
          >

            <Table striped bordered hover size="sm"
              variant="dark"
              style={{ textAlign: "center", backgroundColor: "#f9f7f7" }}
            >
              <thead>
                <tr><th colSpan="6"> Experience</th></tr>

                <tr>
                  <th>Start date</th>
                  <th>End date</th>
                  <th>Duration</th>
                  <th>Post</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>{experience.map(this.renderConsultant)}
                <tr>
                  <th colSpan="4" style={{ backgroundColor: "#8ac6d1", color: "#204969", }}>Number of experience</th>
                  <td  >{nbr}  {nbr != 1 ? "years" : "year"}</td>
                </tr>
              </tbody>

            </Table>


          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridState"
            onChange={e => console.log()}
          >
              
            <Table striped bordered hover size="sm"
              variant="dark"
              style={{ textAlign: "center", backgroundColor: "#f9f7f7" }}
            >
              <thead>
                <tr><th> Education</th></tr>

              </thead>
              <tbody>{
                this.state.educationSel != null
                  ?
                  this.state.educationSel
                    .split(",")
                    .map((exp, index) => (<tr><td style={{ textAlign: "left" }} > {exp}</td></tr>))
                  : ""
              }
               
              </tbody>
            </Table>
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
            
            <Table striped bordered hover size="sm"
              variant="dark"
              style={{ textAlign: "center", backgroundColor: "#f9f7f7" }}
            >
              <thead>
                <tr><th> Certificats</th></tr>

              </thead>
              <tbody>{
                this.state.certificatsSel != null
                  ?
                  this.state.certificatsSel
                    .split(",")
                    .map((exp, index) => (<tr><td style={{ textAlign: "left" }} > {exp}</td></tr>))
                  : ""
              }
               
              </tbody>
            </Table>
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

            
            <Table striped bordered hover size="sm"
              variant="dark"
              style={{ textAlign: "center", backgroundColor: "#f9f7f7" }}
            >
              <thead>
                <tr><th> Projects</th></tr>

              </thead>
              <tbody>{
                this.state.projectsSel != null
                  ?
                  this.state.projectsSel
                    .split(",")
                    .map((exp, index) => (<tr><td style={{ textAlign: "left" }} > {exp}</td></tr>))
                  : ""
              }
               
              </tbody>
            </Table>
          </Form.Group>

         
          <div className="input-group-prepend">
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

            <Table striped bordered hover size="sm"
              variant="dark"
              style={{ textAlign: "center", backgroundColor: "#f9f7f7" }}
            >
              <thead>
                <tr><th> Competence</th></tr>

              </thead>
              <tbody>{
                this.state.competenceSel != null
                  ?
                  this.state.competenceSel
                    .split(",")
                    .map((exp, index) => (<tr><td style={{ textAlign: "left" }} > {exp}</td></tr>))
                  : ""
              }
               
              </tbody>
            </Table>
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

             
            <Table striped bordered hover size="sm"
              variant="dark"
              style={{ textAlign: "center", backgroundColor: "#f9f7f7" }}
            >
              <thead>
                <tr><th> Langues</th></tr>

              </thead>
              <tbody>{
                this.state.languesSel != null
                  ?
                  this.state.languesSel
                    .split(",")
                    .map((exp, index) => (<tr><td style={{ textAlign: "left" }} > {exp}</td></tr>))
                  : ""
              }
               
              </tbody>
            </Table>
   
          </Form.Group>

          </div>

        </form>
     
        <Button variant="danger"
        onClick={e=>{this.state.ssss
          .split("\n")
          .map((exp, index) => (
          exp.split(":")[0]=="competence"
            ?competence+=
            ","+  exp.split(":")[1]
          :
          exp.split(":")[0]=="education"
            ?education+=
            ","+  exp.split(":")[1]
          :
          exp.split(":")[0]=="projet"
            ?projet+=
            ","+  exp.split(":")[1]
          :
          exp.split(":")[0]=="langues"
            ?langues+=
            ","+  exp.split(":")[1]
          :
          exp.split(":")[0]=="certificats"
            ?certificats+=
          ","+  exp.split(":")[1]
          :
          ""
          
          )

          )
      }
        }
        >Danger</Button>

 <Button
 onClick={e=>console.log(certificats)
 }
 >
 test</Button>
 
 
      </div>
 
 );
  }
}

//
export default MainMessage;
