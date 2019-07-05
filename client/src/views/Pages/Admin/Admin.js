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
import {
  FormGroup,
  FormControl,
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup,
  Alert,
} from "react-bootstrap";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import logo from "../../Icons/logo-orange.png";
import adminIcon from "../../Icons/admin.png";

class Admin extends Component {
  state = {
    email: "ddd",
    auth: false,
    notFound:false
  };


  getAuth = v => {
    fetch(
      "http://localhost:4000/admin?email=" +
        v.email +
        "&pwd=" +
        v.password +
        ""
    )
      .then(response => response.json())
      .then(response => {

        if (Object.keys(response.result).length>0) {
        if (response.result[0].email === v.email) {
          this.setState({ auth: true }, () => {
            console.log(this.state.auth);
          });
        
        }
        }else{
          console.log("ikhwaa");
          this.setState({
            notFound:true
          });
        }
      })
      .catch(err => console.error(err));
  };

  _handelFormSubmit(value, bag) {
    localStorage.setItem("email", value.email);

    
      localStorage.removeItem("compte");
      localStorage.setItem("compte", "admin");
      this.getAuth(value);
    
  }

 
  renderError(ee) {
    if (this.state.notFound === true) {
      return (
        <Alert variant="danger " >
          <p>Account not Found Please  <Alert.Link href="#/register">Sign Up</Alert.Link> </p>
        </Alert>
      );
    }
  }
  render() {
    if (this.state.auth) {
      return <Redirect to={"/dashbord"} />;
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
                    <Container>

                      <Row
                        className="justify-content-center"
                        style={{ marginBottom: 10 }}
                      >
                       
                      </Row>
                    </Container>
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
                          {this.renderError()}
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
            <img src={adminIcon} style={{  height: 200,color:"#FFFFFF" }} />
                     </div>
                     <div>
                  <h2 style={{fontSize:35}}>Admin Page</h2>
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

export default Admin;
