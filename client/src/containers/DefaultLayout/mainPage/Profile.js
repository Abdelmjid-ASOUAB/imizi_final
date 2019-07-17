import React, { Component } from "react";
import { Col } from "reactstrap";
import { Modal, Button, FormControl, Form } from "react-bootstrap";


class MainMessage extends Component {
 


  render() {
    
    return (
      <div className="main">     
          
          MainMessages
          <Button
            style={{ color: "#ffffff" }}
            variant="info"
            onClick={e => {
              console.log("clicked"+e);
              
            this.setState({
              Edshow:true
            })
            }}
          >
            {" "}
            Edite
          </Button>
    <form>

    <Form.Group>
              
              <Form.Label>First Name</Form.Label>
              <input
            type="submit"
            className="btn btn-primary btn-block mt-4"
            value="upload"
            accept=".pdf"
          />

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
                <FormControl
                  placeholder="First Name"
                  type="text"
                  name="nom"
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
              <FormControl
                placeholder="Profile"
                type="text"
                name="profile"
              />
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
                <Form.Control
                  as="select"
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
              <Form.Control as="select">
                <option>CDI</option>
                <option>Freelancer</option>
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
              
              />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formGridState"
              onChange={e =>(console.log()
              )  }
            >
              <Form.Label>Education</Form.Label>

              <Form.Control
                style={{ fontWeight: "bold", fontSize: "15px" }}
                rows="3"
                as="textarea"
                placeholder="Insert Education"
              
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
               
              />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formGridState"
              onChange={e =>
                this.setState({
                  languesSel: e.target.value
                },
                e => {
                  console.log(this.state.languesSel)
                })
              }
            >
              <Form.Label>First Name</Form.Label>
              <FormControl
                placeholder="Insert langues"
                type="text"
                name="langues"
              />
            </Form.Group>
          </form>
      
     </div>
    );
  }

}

//
export default MainMessage;
