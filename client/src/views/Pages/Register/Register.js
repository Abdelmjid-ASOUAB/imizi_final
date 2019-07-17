import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  FormFeedback,
  Row
} from "reactstrap";
import sample from "../Login/video.webm";
import logo from "../../Icons/logo-orange.png";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  FormGroup,
  FormControl,
  Alert,
  Form,
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.checkChange = this.checkChange.bind(this);
  }

  //our State
  state = {
    nom: "",
    prenom: "",
    email: "",
    pwd: "",
    tel: "",
    seniorite: "",
    availability: "",
    auth: false,
    next: false,//false !!
    file: "",
    fileName: "Choose CV File",
    uploadedFile: {},
    deplicact: false,
    isRegester: false,
    typeCompt: 1,
    contractType:"CDI",
    tjm:''
  };

  //Regester Consultant
  getRegesterConsultant = v => {
    console.log("nom=" +
    v.nom +
    "&prenom=" +
    v.prenom +
    "&tel=" +
    v.tel +
    "&email=" +
    v.email +
    "&pwd=" +
    v.password);
           
    fetch(
      "http://localhost:4000/ConsultantRegister?nom=" +
        v.nom +
        "&prenom=" +
        v.prenom +
        "&tel=" +
        v.tel +
        "&email=" +
        v.email +
        "&pwd=" +
        v.password
    )
      .then(response => response.json())

      .then(response => {
        if (response.success === true) {
          this.setState({ isRegester: true }, () => {
            console.log(this.state.isRegester);
          });
          this.setState({
            auth: true
          });

          console.log(response.success);

          localStorage.setItem("email", v.email);
        } else if (response.success.errno === 1062) {
          console.log("deplicact Email");
          this.setState({ deplicact: true, next: false }, () => {
            console.log(this.state.deplicact);
          });
        }
      })
      .catch(err => console.error(err));

      
  };

  //Regester Client
  getRegesterClient = v => {
    localStorage.setItem("email", v.email);

    fetch(
      "http://localhost:4000/ClientRegister?nom=" +
        v.nom +
        "&prenom=" +
        v.prenom +
        "&tel=" +
        v.tel +
        "&email=" +
        v.email +
        "&pwd=" +
        v.password +
        "&clientname=" +
        v.Client_name
    )
      .then(response => response.json())

      .then(response => {
        console.log(response.success);
        if (response.success === true) {
          this.setState({ isRegester: true }, () => {
            console.log(this.state.isRegester);
          });
          this.setState({
            auth: true
          });

          localStorage.setItem("email", v.email);
        } else if (response.success.errno === 1062) {
          console.log("deplicact Email");
          this.setState({ deplicact: true, next: false }, () => {
            console.log(this.state.deplicact);
          });
        }
      })
      .catch(err => console.error(err));
  };

  onFileChange = e => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.files[0].name
    });
  };

  //Upload Cv
  upload = async e => {
    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("Namefile", this.state.email);

    try {
      const res = await axios.post("http://localhost:4000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      const { fileName, filePath } = res.data;
      this.setState({
        fileName,
        filePath,
        auth: true
      });
    } catch (err) {}
  };

  //Submit Consultant Form
  OnSubmit = async e => {
    e.preventDefault();
    this.getRegesterConsultant(this.state);
    console.log(this.state);
  };
  //get Error
  renderError(ee) {
    if (this.state.deplicact === true) {
      return (
        <Alert variant="danger " >
          <p>You already have account with this email  </p>
        </Alert>
      );
    }
  }

  //Submit CLient Form
  SubmitClient(v) {
    this.getRegesterClient(v);
  }

  //Check Change of Type Compte Button
  checkChange(value, event) {
    this.setState({ typeCompt: value });
    console.log(this.state.typeCompt);
  }

  render() {
    if (this.state.auth) {
      return <Redirect to={"/dashbord"} />;
    }
    let log1 = (
      <form onSubmit={this.OnSubmit}>
        <div
          className="input-group-prepend"
          style={{ marginBottom: 30, fontSize: 20 }}
        />
        <div className="input-group-prepend">
          <Form.Group
            as={Col}
            controlId="formGridState"
            onChange={e =>
              this.setState({
                seniorite: e.target.value
              })
            }
          >
            <Form.Label>Seniorite</Form.Label>
            <Form.Control as="select">
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
                availability: e.target.value
              })
            }
          >
            <Form.Label>availability</Form.Label>
            <Form.Control as="select">
              <option>Choose your availability</option>
              <option>immediate</option>
              <option>In 2 weeks</option>
              <option>1 month</option>
              <option>+ 1 month</option>
            </Form.Control>
           
          </Form.Group>
        
        </div>

       
        <Row
                  className="justify-content-center"
                  style={{ marginBottom: 10 }}
                >
          <Form.Group  >
           
          <FormControl
                   
                      placeholder="Tjm"
                      type="number"
                      name="tjm"
                      min="1000"
                      max="4946"
                      step="100"
                      onChange={e =>
                        this.setState({
                          tjm: e.target.value
                        },e=>{console.log(this.state.tjm);
                        })
                      }
                    />
                    <Form.Group
            as={Col}
            controlId="formGridState"
            onChange={e =>
              this.setState({
                contractType: e.target.value
              },e=>{console.log(this.state.contractType);
              })
            }
          >
            <Form.Label>Type of Contracts</Form.Label>
            <Form.Control as="select">
              <option>CDI</option>
              <option>Freelancer</option>
              
            </Form.Control>
           
          </Form.Group>
          </Form.Group>
         
          </Row>

        <div className="input-group">
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

          <input
            type="submit"
            className="btn btn-primary btn-block mt-4"
            value="upload"
          />
        </div>
      </form>
    );
    //Consultant Form Compte
      log1 = (
        <Formik
          initialValues={{
            prenom: "",
            nom: "",
            email: "",
            tel: "+212",
            password: ""
          }}
          onSubmit={this.getRegesterConsultant}
          validationSchema={Yup.object().shape({
            prenom: Yup.string().required(),
            nom: Yup.string().required(),
            email: Yup.string()
              .email()
              .required(),
            password: Yup.string().required(),
            tel: Yup.string().required()
          })}
          render={({
            handleChange,
            handleSubmit,
            isValid,
            isSubmitting,
            handleBlur,
            errors,
            touched
          }) => (
            <div>
              <FormGroup>
                <Row>
                  <Col>
                    <FormControl
                      isInvalid={errors.prenom && touched.prenom}
                      placeholder="First Name"
                      type="text"
                      name="prenom"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.prenom && touched.prenom ? (
                      <FormFeedback> {errors.prenom} </FormFeedback>
                    ) : (
                      <br />
                    )}
                  </Col>
                  <Col>
                    <FormControl
                      isInvalid={errors.nom && touched.nom}
                      placeholder="Last Name"
                      type="text"
                      name="nom"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.nom && touched.nom ? (
                      <FormFeedback> {errors.nom} </FormFeedback>
                    ) : (
                      <br />
                    )}
                  </Col>
                </Row>

                <FormControl
                  isInvalid={errors.email && touched.email}
                  placeholder="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <FormFeedback> {errors.email} </FormFeedback>
                ) : (
                  <br />
                )}
                <FormControl
                  isInvalid={errors.tel && touched.tel}
                  placeholder="+212 XXXXXXX"
                  type="text"
                  name="tel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.tel && touched.tel ? (
                  <FormFeedback> {errors.tel} </FormFeedback>
                ) : (
                  <br />
                )}

                <FormControl
                  isInvalid={errors.password && touched.password}
                  placeholder="password"
                  onChange={handleChange}
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <FormFeedback> {errors.password} </FormFeedback>
                ) : (
                  <br />
                )}
              </FormGroup>

              <Button
                disabled={!isValid || isSubmitting}
                variant="outline-warning"
                onClick={handleSubmit}
                type="submit"
                color="primary"
              >
                Next >>
              </Button>
              {this.renderError()}
            </div>
          )}
        />
      );
    

    // Sweetch to Client Form
    if (this.state.typeCompt == 2) {
      log1 = (
        <Formik
          initialValues={{
            prenom: "",
            nom: "",
            email: "",
            tel: "+212",
            password: "",
            Client_name: ""
          }}
          onSubmit={this.SubmitClient.bind(this)}
          validationSchema={Yup.object().shape({
            prenom: Yup.string().required(),
            nom: Yup.string().required(),
            email: Yup.string()
              .email()
              .required(),
            password: Yup.string().required(),
            tel: Yup.string().required(),
            Client_name: Yup.string().required()
          })}
          render={({
            handleChange,
            handleSubmit,
            isValid,
            isSubmitting,
            handleBlur,
            errors,
            touched
          }) => (
            <div>
              <FormGroup>
                <Row>
                  <Col>
                    <FormControl
                      isInvalid={errors.prenom && touched.prenom}
                      placeholder="Representant First Name"
                      type="text"
                      name="prenom"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.prenom && touched.prenom ? (
                      <FormFeedback> {errors.prenom} </FormFeedback>
                    ) : (
                      <br />
                    )}
                  </Col>
                  <Col>
                    <FormControl
                      isInvalid={errors.nom && touched.nom}
                      placeholder=" Representant Last Name"
                      type="text"
                      name="nom"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.nom && touched.nom ? (
                      <FormFeedback> {errors.nom} </FormFeedback>
                    ) : (
                      <br />
                    )}
                  </Col>
                </Row>
                <FormControl
                  isInvalid={errors.Client_name && touched.Client_name}
                  placeholder="Client Name"
                  type="text"
                  name="Client_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.Client_name && touched.Client_name ? (
                  <FormFeedback> {errors.Client_name} </FormFeedback>
                ) : (
                  <br />
                )}

                <FormControl
                  isInvalid={errors.email && touched.email}
                  placeholder="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <FormFeedback> {errors.email} </FormFeedback>
                ) : (
                  <br />
                )}
                <FormControl
                  isInvalid={errors.tel && touched.tel}
                  placeholder="+212 XXXXXXX"
                  type="text"
                  name="tel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.tel && touched.tel ? (
                  <FormFeedback> {errors.tel} </FormFeedback>
                ) : (
                  <br />
                )}

                <FormControl
                  isInvalid={errors.password && touched.password}
                  placeholder="password"
                  onChange={handleChange}
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <FormFeedback> {errors.password} </FormFeedback>
                ) : (
                  <br />
                )}
              </FormGroup>

              <Container>
                <Row
                  className="justify-content-center"
                  style={{ marginBottom: 10 }}
                >
                  <Button
                    disabled={!isValid || isSubmitting}
                    variant="outline-warning"
                    onClick={handleSubmit}
                    type="submit"
                    color="primary"
                  >
                    registration
                  </Button>
                </Row>
              </Container>
              <Container>
                <Row className="justify-content-center">
                  {this.renderError()}
                </Row>
              </Container>
            </div>
          )}
        />
      );
    }

    return (
      <div className="app flex-row align-items-center">
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            minWidth: "100%",
            minHeight: "100%"
          }}
        >
          <source src={sample} type="video/mp4" />
        </video>
        <Container>
          <Row className="justify-content-center">
            <img src={logo} style={{ zIndex: "1", height: 40, margin: 10 }} />
          </Row>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Container>
                    <Row className="justify-content-center" style={{fontWeight:"bolder",fontSize:20,color:"#2980b9"}}>YOU ARE :</Row>
                    <Row
                      className="justify-content-center"
                      style={{ marginBottom: 10 }}
                    >
                      <ButtonToolbar>
                        <ToggleButtonGroup
                          type="radio"
                          name="options"
                          defaultValue={1}
                          value={this.state.typeCompt}
                          onChange={this.checkChange}
                        >
                          <ToggleButton value={1}>Consultant</ToggleButton>
                          <ToggleButton value={2}>Client</ToggleButton>
                        </ToggleButtonGroup>
                      </ButtonToolbar>
                    </Row>
                  </Container>

                  {log1}
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block>
                        <span>facebook</span>
                      </Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block>
                        <span>twitter</span>
                      </Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
