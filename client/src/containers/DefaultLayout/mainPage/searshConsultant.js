import React, { Suspense, Component } from "react";
import {
  Button,
  Col,
  Container,
  FormFeedback,
  Row,
  Nav,
  NavItem,
  NavLink,
  Progress,
  TabContent,
  TabPane,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import "./searsh.css";

import {
  FormGroup,
  FormControl,
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup,
  Form,
  Card
} from "react-bootstrap";

import {
  AppAside,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";
import avatar from "../icons/avatar.jpg";
var bgColors = {
  Default: "#81b71a",
  Blue: "#00B1E1",
  Cyan: "#37BC9B",
  Green: "#8CC152",
  Red: "#E9573F",
  Yellow: "#F6BB42",
  wi: "#FFFFFF"
};

class searshConsultant extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  constructor(props) {
    super(props);
    this.OnSubmit = this.OnSubmit.bind(this);

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
    ischeckSenior1: "",
    ischeckSenior2: "",
    ischeckSenior3: "",
    ischeckSenior4: "",
    ischeckAvaibil1: "",
    ischeckAvaibil2: "",
    ischeckAvaibil3: "",
    ischeckAvaibil4: "",
    skills: "",
    tjm: "",
    contract: ""
  };
  getConsultant = v => {
    let url =
      "http://localhost:4000/searchconsultant?competence=" +
      this.state.competence +
      "&seniorite1=" +
      this.state.seniorite1 +
      "&seniorite2=" +
      this.state.seniorite2 +
      "&seniorite3=" +
      this.state.seniorite3 +
      "&seniorite4=" +
      this.state.seniorite4 +
      "&diponibilite1=" +
      this.state.diponibilite1 +
      "&diponibilite2=" +
      this.state.diponibilite2 +
      "&diponibilite3=" +
      this.state.diponibilite3 +
      "&diponibilite4=" +
      this.state.diponibilite4 +
      "&tjm=" +
      this.state.tjm +
      "&contract=" +
      this.state.contract;
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

  renderMission = ({ id, nom, prenom, competence, email }) => (
    <div key={id} className="itemm">
      <Card style={{ width: "11rem" }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>{nom}</Card.Title>
          <Card.Title>{" " + prenom}</Card.Title>
          <Card.Text>{competence}</Card.Text>
          <Button variant="primary" onClick={()=>{localStorage.setItem("constEmail",email)}}  href="/#/pdf" target="_blank">CV</Button>
          </Card.Body>
      </Card>
    </div>
  );

  /**
   *  <div style={{ display:"inline-grid",gridColumn:"auto",gridColumnEnd:"auto",gridColumnStart:"auto",gridColumnGap:"10",gridRowGap:"25" }}>
              
            </div>
   */

  OnSubmit() {
    console.log("onSubmit");
    this.getConsultant();
    console.log(this.state);
  }
  render() {
    const { consultant } = this.state;

    const menuSearch = (
      <React.Fragment>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={"div"}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase">
                Skills
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-success"
              >
                <div>
                  <div className="page">
                    <div className="">
                      <div className="">
                        <label className="">
                          <input
                            placeholder="skills"
                            type="text"
                            onChange={e => {
                              this.setState(
                                {
                                  competence: e.target.value
                                },
                                () => {
                                  console.log(this.state.competence);
                                }
                              );
                            }}
                          />

                          <span className="toggle__label">
                            <span className="toggle__text" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <small className="text-muted mr-3">
                  <i className="" />
                  &nbsp;Exampl : <strong>java ,sql ...</strong>
                </small>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-2"
                  value="search"
                  onClick={this.OnSubmit}
                />
              </ListGroupItem>

              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase">
                Seniorite
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-danger"
                onChange={() => {
                  console.log("change chenage");
                }}
                onClick={() => {
                  if (this.state.ischeckSenior1 === "") {
                    this.setState(
                      {
                        ischeckSenior1: "checked",
                        seniorite1: "Expert [+10 years]"
                      },
                      () => {
                        console.log("checked");
                      }
                    );
                  } else {
                    {
                      this.setState(
                        {
                          ischeckSenior1: "",
                          seniorite1: ""
                        },
                        () => {
                          console.log("no checked");
                        }
                      );
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input
                            className="toggle__input"
                            type="checkbox"
                            checked={this.state.ischeckSenior1}
                          />
                          <span className="toggle__label">
                            <span className="toggle__text" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <strong>Expert</strong>{" "}
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar" />
                  &nbsp;+10 Years
                </small>
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-success"
                onClick={() => {
                  if (this.state.ischeckSenior2 === "") {
                    this.setState(
                      {
                        ischeckSenior2: "checked",
                        seniorite2: "Senior [5 to 10 years]"
                      },
                      () => {
                        console.log("checked");
                      }
                    );
                  } else {
                    {
                      this.setState(
                        {
                          ischeckSenior2: "",
                          seniorite2: ""
                        },
                        () => {
                          console.log("no checked");
                        }
                      );
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input
                            className="toggle__input"
                            type="checkbox"
                            checked={this.state.ischeckSenior2}
                          />
                          <span className="toggle__label">
                            <span className="toggle__text" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <strong>Senior</strong>{" "}
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar" />
                  &nbsp;5 to 10 Years
                </small>
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-primary"
                onClick={() => {
                  if (this.state.ischeckSenior3 === "") {
                    this.setState(
                      {
                        ischeckSenior3: "checked",
                        seniorite3: "intermediate [3 to 5 years]"
                      },
                      () => {
                        console.log("checked");
                      }
                    );
                  } else {
                    {
                      this.setState(
                        {
                          ischeckSenior3: "",
                          seniorite3: ""
                        },
                        () => {
                          console.log("no checked");
                        }
                      );
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input
                            className="toggle__input"
                            type="checkbox"
                            checked={this.state.ischeckSenior3}
                          />
                          <span className="toggle__label">
                            <span className="toggle__text" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <strong>Intermediate</strong>{" "}
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar" />
                  &nbsp;3 to 5 Years
                </small>
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-info"
                onClick={() => {
                  if (this.state.ischeckSenior4 === "") {
                    this.setState(
                      {
                        ischeckSenior4: "checked",
                        seniorite4: "beginner [0 to 5 years]"
                      },
                      () => {
                        console.log("checked");
                      }
                    );
                  } else {
                    {
                      this.setState(
                        {
                          ischeckSenior4: "",
                          seniorite4: ""
                        },
                        () => {
                          console.log("no checked");
                        }
                      );
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input
                            className="toggle__input"
                            type="checkbox"
                            checked={this.state.ischeckSenior4}
                          />
                          <span className="toggle__label">
                            <span className="toggle__text" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <strong>Beginner</strong>{" "}
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar" />
                  &nbsp;0 to 5 Years
                </small>
              </ListGroupItem>

              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase">
                availability
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-danger"
                onClick={() => {
                  if (this.state.ischeckAvaibil1 === "") {
                    this.setState(
                      {
                        ischeckAvaibil1: "checked",
                        diponibilite1: "immediate"
                      },
                      () => {
                        console.log("checked");
                      }
                    );
                  } else {
                    {
                      this.setState(
                        {
                          ischeckAvaibil1: "",
                          diponibilite1: ""
                        },
                        () => {
                          console.log("no checked");
                        }
                      );
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input
                            className="toggle__input"
                            type="checkbox"
                            checked={this.state.ischeckAvaibil1}
                            onChange={e => {
                              console.log("change22");
                            }}
                          />
                          <span className="toggle__label">
                            <span className="toggle__text" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <strong>Immediate</strong>{" "}
                </div>
                <small className="text-muted mr-3">___</small>
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-success"
                onClick={() => {
                  if (this.state.ischeckAvaibil2 === "") {
                    this.setState(
                      {
                        ischeckAvaibil2: "checked",
                        diponibilite2: "In 2 weeks"
                      },
                      () => {
                        console.log("checked");
                      }
                    );
                  } else {
                    {
                      this.setState(
                        {
                          ischeckAvaibil2: "",
                          diponibilite2: ""
                        },
                        () => {
                          console.log("no checked");
                        }
                      );
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input
                            className="toggle__input"
                            type="checkbox"
                            checked={this.state.ischeckAvaibil2}
                          />
                          <span className="toggle__label">
                            <span className="toggle__text" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <strong>In 2 weeks</strong>{" "}
                </div>
                <small className="text-muted mr-3">__</small>
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-primary"
                onClick={() => {
                  if (this.state.ischeckAvaibil3 === "") {
                    this.setState(
                      {
                        ischeckAvaibil3: "checked",
                        diponibilite3: "1 month"
                      },
                      () => {
                        console.log("checked");
                      }
                    );
                  } else {
                    {
                      this.setState(
                        {
                          ischeckAvaibil3: "",
                          diponibilite3: ""
                        },
                        () => {
                          console.log("no checked");
                        }
                      );
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input
                            className="toggle__input"
                            type="checkbox"
                            checked={this.state.ischeckAvaibil3}
                          />
                          <span className="toggle__label">
                            <span className="toggle__text" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <strong>In 1 month</strong>{" "}
                </div>
                <small className="text-muted mr-3">___</small>
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-info"
                onClick={() => {
                  if (this.state.ischeckAvaibil4 === "") {
                    this.setState(
                      {
                        ischeckAvaibil4: "checked",
                        diponibilite4: "+ 1 month"
                      },
                      () => {
                        console.log("checked");
                      }
                    );
                  } else {
                    {
                      this.setState(
                        {
                          ischeckAvaibil4: "",
                          diponibilite4: ""
                        },
                        () => {
                          console.log("no checked");
                        }
                      );
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input
                            className="toggle__input"
                            type="checkbox"
                            checked={this.state.ischeckAvaibil4}
                          />
                          <span className="toggle__label">
                            <span className="toggle__text" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <strong>+1 month</strong>{" "}
                </div>
                <small className="text-muted mr-3">___</small>
              </ListGroupItem>

              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase">
                TJM
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-success"
              >
                <div>
                  <div className="page">
                    <div className="">
                      <div className="">
                        <label className="">
                          <FormControl
                            placeholder="Tjm"
                            type="number"
                            name="tjm"
                            min="1000"
                            max="5000"
                            step="100"
                            onChange={e =>
                              this.setState(
                                {
                                  tjm: e.target.value
                                },
                                e => {
                                  console.log(this.state.tjm);
                                }
                              )
                            }
                          />
                          <span className="toggle__label">
                            <span className="toggle__text" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

              </ListGroupItem>

              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase">
                Type of Contracts
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-success"
              >
                <div>
                  <div className="page">
                    <div className="">
                      <div className="">
                        <label className="">
                          <Form.Group
                            as={Col}
                            controlId="formGridState"
                            onChange={e =>
                              this.setState(
                                {
                                  contract: e.target.value
                                },
                                e => {
                                  console.log(this.state.contract);
                                }
                              )
                            }
                          >
                            <Form.Control as="select">
                              <option></option>
                              <option>CDI</option>
                              <option>Freelancer</option>
                            </Form.Control>
                          </Form.Group>
                          <span className="toggle__label">
                            <span className="toggle__text" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                
              </ListGroupItem>
            </ListGroup>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );

    return (
      <div className="main">
        <Row>
          {" "}
          <b> {Object.keys(consultant).length} Consultant Found </b>
        </Row>
        <Row>
          {consultant.map(this.renderMission)}
          <AppAside fixed>
            <Suspense fallback={this.loading()}>{menuSearch}</Suspense>
          </AppAside>
        </Row>
      </div>
    );
  }
  //  return
}

export default searshConsultant;
