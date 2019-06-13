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
import { FormGroup, FormControl, Alert, Form } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Register extends Component {
  state = {
    nom: "",
    prenom: "",
    email: "",
    pwd: "",
    tel: "",
    seniorite: "",
    availability: "",
    auth: false,
    next: false,
    file: "",
    fileName: "Choose CV File",
    uploadedFile: {},
    deplicact: false,
    isRegester: false
  };
  _Next(value) {
    // console.log(value);
    this.setState({
      nom: value.nom,
      prenom: value.prenom,
      email: value.email,
      pwd: value.password,
      tel: value.tel
    });
    this.setState({
      next: true
    });
    console.log(this.state);
  }

  getRegester = v => {
    fetch(
      "http://localhost:4000/register?nom=" +
        v.nom +
        "&prenom=" +
        v.prenom +
        "&tel=" +
        v.tel +
        "&email=" +
        v.email +
        "&pwd=" +
        v.pwd +
        "&seniorite=" +
        v.seniorite +
        "&availability=" +
        v.availability
    )
      .then(response => response.json())

      .then(response => {
        console.log(response.success);

        if (response.success === true) {
          this.setState({ isRegester: true }, () => {
            console.log(this.state.isRegester);
            this.upload();
          });
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

  upload = async e => {
    const formData = new FormData();
    formData.append("file", this.state.file);

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

  OnSubmit = async e => {
    e.preventDefault();
    this.getRegester(this.state);
    console.log(this.state);
  };

  renderError(ee) {
    if (this.state.deplicact === true) {
      return (
        <Alert variant="danger " dismissible>
          <p> Email ${ee} Duplicate entry </p>
        </Alert>
      );
    }
  }

  render() {
    if (this.state.auth) {
      return <Redirect to={"/"} />;
    }
    let log1 = (
      <form onSubmit={this.OnSubmit}>
        <div
          className="input-group-prepend"
          style={{ marginBottom: 30, fontSize: 20 }}
        >
          <b> Uploading Your CV </b>
        </div>
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
              <option>beginner 0 to 5 years]</option>
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

        <div className="input-group">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
              onChange={this.onFileChange}
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              {this.state.fileName}
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block mt-4"
            value="upload"
            accept=".pdf"
          />
        </div>
      </form>
    );

    if (this.state.next === false) {
      log1 = (
        <Formik
          initialValues={{
            prenom: "",
            nom: "",
            email: "",
            tel: "+212",
            password: ""
          }}
          onSubmit={this._Next.bind(this)}
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
                <FormControl
                  isInvalid={errors.prenom && touched.prenom}
                  placeholder="Prenom"
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
                <FormControl
                  isInvalid={errors.nom && touched.nom}
                  placeholder="Nom"
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
                <CardBody className="p-4">{log1}</CardBody>
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
