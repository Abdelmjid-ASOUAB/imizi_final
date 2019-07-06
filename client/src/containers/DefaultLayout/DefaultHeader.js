import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem
} from "reactstrap";
import PropTypes from "prop-types";

import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";
import logo from "../../assets/img/brand/logo.png";
import sygnet from "../../assets/img/brand/sygnet.png";

import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  Alert,
  Form,
  Col,
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);

    this.handleShowEd = this.handleShowEd.bind(this);
    this.handleCloseEd = this.handleCloseEd.bind(this);
  }
  state = {
    profil: [],
    contract: "",
    Edshow: false,
    idSel: "",
    representantSel: "",
    societyoSel: "",
    emailSel: "",
    pwdSel: "",
    telSel: "",
    SuccShow: false,
    nameSel: "",
    prenomSel: "",
    senioriteSel: "",
    availabilitySel: "",
    contractSel: ""
  };

  handleCloseEd() {
    this.setState({ Edshow: false });
  }

  handleShowEd(id, representant, email, pwd, tel, societe) {
    this.setState({
      Edshow: true
    });
  }
  getProfile = e => {
    let url;
    if (localStorage.getItem("compte") == "client") {
      url =
        "http://localhost:4000/getClientEmail?email=" +
        localStorage.getItem("email");

      fetch(url)
        .then(response => response.json())
        .then(response => {
          this.setState(
            {
              emailSel: response.data[0].mail,
              idSel: response.data[0].id,
              representantSel: response.data[0].representant,
              societyoSel: response.data[0].societe,
              telSel: response.data[0].tel,
              pwdSel: response.data[0].pwd,
              senioriteSel: response.data[0].seniorite,
              availabilitySel: response.data[0].disponibilite,

            },
            () => {
              console.log(this.state);
            }
          );
        })
        .catch(err => console.error(err));
    } else if (localStorage.getItem("compte") == "consultant") {
      url =
        "http://localhost:4000/getConsultantEmail?email=" +
        localStorage.getItem("email");

      fetch(url)
        .then(response => response.json())
        .then(response => {
          this.setState(
            {
              emailSel: response.data[0].email,
              idSel: response.data[0].id,
              nameSel: response.data[0].nom,
              prenomSel: response.data[0].prenom,
              telSel: response.data[0].tel,
              pwdSel: response.data[0].pwd
            },
            () => {
              console.log(this.state);
            }
          );
        })
        .catch(err => console.error(err));
    }
    console.log(url);
  };

  updateClient = v => {
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
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 35, alt: "IMZII Logo" }}
          minimized={{ src: sygnet, width: 35, height: 35, alt: "IMZII Logo" }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="#" className="nav-link">
              Settings
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <i className="icon-bell" />
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <i className="icon-list" />
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <i className="icon-location-pin" />
            </NavLink>
          </NavItem>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img
                src={"../../assets/img/avatars/6.jpg"}
                className="img-avatar"
                alt="admin@bootstrapmaster.com"
              />
            </DropdownToggle>
            <DropdownMenu right style={{ right: "auto" }}>
              <DropdownItem header tag="div" className="text-center">
                <strong>Account</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-envelope-o" /> Messages
                <Badge color="success">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-tasks" /> Tasks
                <Badge color="danger">42</Badge>
              </DropdownItem>
              <DropdownItem header tag="div" className="text-center">
                <strong>Settings</strong>
              </DropdownItem>
              <DropdownItem
                onClick={e => {
                  this.getProfile();
                  this.handleShowEd("", "", "", "", "", "");
                }}
              >
                <i className="fa fa-user" />
                Edite Profile
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-wrench" /> Settings
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-file" /> Projects
                <Badge color="primary">42</Badge>
              </DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}>
                <i className="fa fa-lock" /> Logout
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" display="lg" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}

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

              <div
                className="justify-content-center"
                style={{ marginBottom: 10 }}
              >
                <Form.Group>
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
                  />{" "}
                </Form.Group>
              </div>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseEd}>
              Close
            </Button>
            <Button
              variant="outline-success"
              onClick={e => {
                this.updateClient(this.state);
                this.handleCloseEd();
                this.setState({ SuccShow: true });
              }}
            >
              Edite My profile
            </Button>
          </Modal.Footer>
        </Modal>

        


        <Modal
          show={this.state.SuccShow}
          onHide={e => {
            this.setState({ SuccShow: false });
          }}
        >
          <Modal.Header
            style={{ backgroundColor: "#1fab89", color: "#ffffff" }}
          >
            <Modal.Title>Profile modified </Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Button
              variant="success"
              onClick={e => {
                this.setState({ SuccShow: false });
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
