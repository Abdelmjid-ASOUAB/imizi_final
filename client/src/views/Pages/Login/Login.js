import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  FormFeedback,
  Row
} from "reactstrap";
import sample from "./video.webm";
import { Formik } from "formik";
import { FormGroup, FormControl } from "react-bootstrap";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import logo from "../../Icons/logo-orange.png";

class Login extends Component {
  state = {
    email: "ddd",
    auth: false
  };

  getAuth = v => {
    fetch(
      "http://localhost:4000/login?email=" + v.email + "&pwd=" + v.password + ""
    )
      .then(response => response.json())
      .then(response => {
        if (response.result[0].email === v.email) {
          this.setState({ auth: true }, () => {
            console.log(this.state.auth);
          });
        }
      })
      .catch(err => console.error(err));
  };

  Onsubmit = () => {
    console.log(this.state.email + " --  " + this.state.password);
  };

  _handelFormSubmit(value, bag) {
    this.getAuth(value);
  }

  render() {
    if (this.state.auth) {
      return <Redirect to={"/"} />;
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
            <img src={logo} style={{ zIndex: "1", height: 80, margin: 10 }} />
          </Row>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Formik
                      initialValues={{ email: "", password: "" }}
                      onSubmit={this._handelFormSubmit.bind(this)}
                      validationSchema={Yup.object().shape({
                        email: Yup.string()
                          .email()
                          .required(),
                        password: Yup.string().required()
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
                          <h1>Login</h1>
                          <FormGroup>
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
                            Login
                          </Button>
                        </div>
                      )}
                    />
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <Link to="/register">
                        <Button
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
