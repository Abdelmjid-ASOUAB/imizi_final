import React, { Fragment, Component } from "react";
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
  constructor(props) {
    super(props);
    this.OnSubmit = this.OnSubmit.bind(this);

    this.checkBooxChangeSeniorite = this.checkBooxChangeSeniorite.bind(this);
    this.checkBooxChangeDisponibilte = this.checkBooxChangeDisponibilte.bind(
      this
    );
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
    skills: ""
  };
  checkBooxChangeSeniorite(e, n) {
    if (n == 1) {
      if (e.target.checked) {
        console.log("oui");
        this.setState(
          {
            seniorite1: "Expert [+10 years]"
          },
          () => {
            console.log(this.state.seniorite1);
          }
        );
      } else {
        console.log("non");
        this.setState(
          {
            seniorite1: ""
          },
          () => {
            console.log(this.state.seniorite1);
          }
        );
      }
    } else if (n == 2) {
      if (e.target.checked) {
        console.log("oui");
        this.setState(
          {
            seniorite2: "Senior [5 to 10 years]"
          },
          () => {
            console.log(this.state.seniorite2);
          }
        );
      } else {
        console.log("non");
        this.setState(
          {
            seniorite2: ""
          },
          () => {
            console.log(this.state.seniorite2);
          }
        );
      }
    } else if (n == 3) {
      if (e.target.checked) {
        console.log("oui");
        this.setState(
          {
            seniorite3: "intermediate [3 to 5 years]"
          },
          () => {
            console.log(this.state.seniorite3);
          }
        );
      } else {
        console.log("non");
        this.setState(
          {
            seniorite3: ""
          },
          () => {
            console.log(this.state.seniorite3);
          }
        );
      }
    } else if (n == 4) {
      if (e.target.checked) {
        console.log("oui");
        this.setState(
          {
            seniorite4: "beginner [0 to 5 years]"
          },
          () => {
            console.log(this.state.seniorite4);
          }
        );
      } else {
        console.log("non");
        this.setState(
          {
            seniorite4: ""
          },
          () => {
            console.log(this.state.seniorite4);
          }
        );
      }
    }
  }
  checkBooxChangeDisponibilte(e, n) {
    if (n == 1) {
      if (e.target.checked) {
        console.log("oui");
        this.setState(
          {
            diponibilite1: "immediate"
          },
          () => {
            console.log(this.state.diponibilite1);
          }
        );
      } else {
        console.log("non");
        this.setState(
          {
            diponibilite1: ""
          },
          () => {
            console.log(this.state.diponibilite1);
          }
        );
      }
    } else if (n == 2) {
      if (e.target.checked) {
        console.log("oui");
        this.setState(
          {
            diponibilite2: "In 2 weeks"
          },
          () => {
            console.log(this.state.diponibilite2);
          }
        );
      } else {
        console.log("non");
        this.setState(
          {
            diponibilite2: ""
          },
          () => {
            console.log(this.state.diponibilite2);
          }
        );
      }
    } else if (n == 3) {
      if (e.target.checked) {
        console.log("oui");
        this.setState(
          {
            diponibilite3: "1 month"
          },
          () => {
            console.log(this.state.diponibilite3);
          }
        );
      } else {
        console.log("non");
        this.setState(
          {
            diponibilite3: ""
          },
          () => {
            console.log(this.state.diponibilite3);
          }
        );
      }
    } else if (n == 4) {
      if (e.target.checked) {
        console.log("oui");
        this.setState(
          {
            diponibilite4: "+ 1 month"
          },
          () => {
            console.log(this.state.diponibilite4);
          }
        );
      } else {
        console.log("non");
        this.setState(
          {
            diponibilite4: ""
          },
          () => {
            console.log(this.state.diponibilite4);
          }
        );
      }
    }
  }

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
      this.state.diponibilite4;
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

  onChangeInput = () => {
    localStorage.setItem("skills", this.state.skills);

    localStorage.setItem("ischeckSenior1", this.state.ischeckSenior1);
    localStorage.setItem("ischeckSenior2", this.state.ischeckSenior2);
    localStorage.setItem("ischeckSenior3", this.state.ischeckSenior3);
    localStorage.setItem("ischeckSenior4", this.state.ischeckSenior4);

    localStorage.setItem("ischeckAvaibil1", this.state.ischeckAvaibil1);
    localStorage.setItem("ischeckAvaibil2", this.state.ischeckAvaibil2);
    localStorage.setItem("ischeckAvaibil3", this.state.ischeckAvaibil3);
    localStorage.setItem("ischeckAvaibil4", this.state.ischeckAvaibil4);
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  renderMission = ({ id, nom, prenom, competence, email }) => (
    <div key={id} className="itemm">
      <Card style={{ width: "11rem" }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>{nom + " " + prenom}</Card.Title>
          <Card.Text>{competence}</Card.Text>
          <Button variant="primary">{email}</Button>
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
  }
  render() {
    const { consultant } = this.state;

    const menuSearch = (
      <React.Fragment>
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
            onClick={() => {
              if (this.state.ischeckSenior1 === "") {
                this.setState(
                  {
                    ischeckSenior1: "checked"
                  },
                  () => {
                    console.log("checked");
                    this.onChangeInput();
                  }
                );
              } else {
                {
                  this.setState(
                    {
                      ischeckSenior1: ""
                    },
                    () => {
                      console.log("no checked");
                      this.onChangeInput();
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
                    ischeckSenior2: "checked"
                  },
                  () => {
                    console.log("checked");
                    this.onChangeInput();
                  }
                );
              } else {
                {
                  this.setState(
                    {
                      ischeckSenior2: ""
                    },
                    () => {
                      console.log("no checked");
                      this.onChangeInput();
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
                    ischeckSenior3: "checked"
                  },
                  () => {
                    console.log("checked");
                    this.onChangeInput();
                  }
                );
              } else {
                {
                  this.setState(
                    {
                      ischeckSenior3: ""
                    },
                    () => {
                      console.log("no checked");
                      this.onChangeInput();
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
                    ischeckSenior4: "checked"
                  },
                  () => {
                    console.log("checked");
                    this.onChangeInput();
                  }
                );
              } else {
                {
                  this.setState(
                    {
                      ischeckSenior4: ""
                    },
                    () => {
                      console.log("no checked");
                      this.onChangeInput();
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
                    ischeckAvaibil1: "checked"
                  },
                  () => {
                    console.log("checked");
                    this.onChangeInput();
                  }
                );
              } else {
                {
                  this.setState(
                    {
                      ischeckAvaibil1: ""
                    },
                    () => {
                      console.log("no checked");
                      this.onChangeInput();
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
                    ischeckAvaibil2: "checked"
                  },
                  () => {
                    console.log("checked");
                    this.onChangeInput();
                  }
                );
              } else {
                {
                  this.setState(
                    {
                      ischeckAvaibil2: ""
                    },
                    () => {
                      console.log("no checked");
                      this.onChangeInput();
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
                    ischeckAvaibil3: "checked"
                  },
                  () => {
                    console.log("checked");
                    this.onChangeInput();
                  }
                );
              } else {
                {
                  this.setState(
                    {
                      ischeckAvaibil3: ""
                    },
                    () => {
                      console.log("no checked");
                      this.onChangeInput();
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
                    ischeckAvaibil4: "checked"
                  },
                  () => {
                    console.log("checked");
                    this.onChangeInput();
                  }
                );
              } else {
                {
                  this.setState(
                    {
                      ischeckAvaibil4: ""
                    },
                    () => {
                      console.log("no checked");
                      this.onChangeInput();
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
        </ListGroup>
      </React.Fragment>
    );

    return (
      <main className="main">
        {" "}
        <Row>
          <Col sm={9}>
            <div
              className="containerr"
              style={{ overflowY: "auto", height: 700, width: 700 }}
            >
              {consultant.map(this.renderMission)}
            </div>
          </Col>

          <Col sm={3} style={{ backgroundColor: bgColors.wi }}>
            {menuSearch}
          </Col>
        </Row>
      </main>
    );
  }
  //  return
}

export default searshConsultant;

/**  search Form1 
 *  <Col xs={12} md={9}>
            <FormControl
              placeholder="skills"
              type="text"
              name="skills"
              style={{ marginTop: 30 }}
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
            />{" "}
            <input
              type="submit"
              className="btn btn-primary btn-block mt-4"
              value="search"
              onClick={this.OnSubmit}
            />
           
          </Col>
            <form style={{ marginTop: 30 }}>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Seniorite</Form.Label>
                <Row>
                  <Col>
                    <Form.Check
                      label="Expert [+10 years]"
                      onChange={e => {
                        this.checkBooxChangeSeniorite(e, 1);
                      }}
                    />
                  </Col>{" "}
                </Row>
                <Row>
                  <Col>
                    <Form.Check
                      label="Senior [5 to 10 years]"
                      onChange={e => {
                        this.checkBooxChangeSeniorite(e, 2);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check
                      label="intermediate [3 to 5 years]"
                      onChange={e => {
                        this.checkBooxChangeSeniorite(e, 3);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check
                      label="beginner [0 to 5 years]"
                      onChange={e => {
                        this.checkBooxChangeSeniorite(e, 4);
                      }}
                    />
                  </Col>
                </Row>

                <Form.Label>availability</Form.Label>
                <Row>
                  <Col>
                    <Form.Check
                      label="immediate"
                      onChange={e => {
                        this.checkBooxChangeDisponibilte(e, 1);
                      }}
                    />
                  </Col>{" "}
                </Row>
                <Row>
                  <Col>
                    <Form.Check
                      label="In 2 weeks"
                      onChange={e => {
                        this.checkBooxChangeDisponibilte(e, 2);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check
                      label="1 month"
                      onChange={e => {
                        this.checkBooxChangeDisponibilte(e, 3);
                      }}
                    />
                  </Col>
                  </Row>
                <Row>
                  <Col>
                    <Form.Check
                      label="+ 1 month"
                      onChange={e => {
                        this.checkBooxChangeDisponibilte(e, 4);
                      }}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </form>
 */
