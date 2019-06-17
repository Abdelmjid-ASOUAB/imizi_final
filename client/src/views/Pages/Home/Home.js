import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import image from './icon/men.jpg';
import about from './icon/about-img.png';
import consul from './icon/pic.png';
import marketing from './icon/mark.png';
import quality from './icon/qulity.png';

import omar from './icon/omar.jpg';
import nabil from './icon/nabil.jpg';
import girl from './icon/0.jpg';
import soukaina from './icon/soukaina.jpg';

import './Home.css';


import HeaderIndex from './Headeridex'
import Footer from './Footer'



class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderIndex />


                <Container className="colu_meun" style={{ marginTop: 60 }}>
                    <Row id='row' style={{ height: 600, top: 60 }} >1
          <img src={image} id="image" />
                    </Row >
                    <Row id='row' style={{ height: 200 }}>
                        <h1>Welcom to IMZII</h1>
                        <p>IMZII is a professional portal, aiming at uberizing the domain of IT outsourcing by controlling, by building a direct channel between consultant and client.</p>

                    </Row >
                    <Row id='row' style={{ height: 400 }}>
                        <Col id="ll">
                            <img src={about} style={{ height: 370 }} />
                        </Col>

                        <Col id="rr">
                            <p>   <b> IMZII is considered to be the first professional platform dedicated to IT and telecom freelancers in Morocco   </b>  </p>
                            <p> It offers multiple benefits to different users (Companies / Consultants) </p>
                            <b />
                            <ul class="list-group">
                                <li class="list-group-item">Simplify the recruitment process without using intermediaries.</li>
                                <li class="list-group-item">Broaden the choice of IT profiles.</li>
                                <li class="list-group-item"> Guarantee a direct relationship between companies and consultants.
</li>
                                <li class="list-group-item"> Make the Exchange Company Consulting process easier, faster, efficient and transparent.
</li>
                            </ul>
                        </Col>

                    </Row > <Row id='row' style={{ height: 450 }}>
                        <h1>OUR SERVICES</h1>
                        <p style={{ textAlign: "center" }}> Having already building an assets of ICT consultants, we approach IT / Telecom
                            consulting knowing that it is all about people. People who work with technology and have
                             to get things done using technology as easy as possible.
                            Therefore we first listen carefully to our customers and then we use our
               experience to come up with accurate consultant profiles to comply the project courses.</p>

                        <Col id="card">
                            <img src={consul} />
                            <h4>Consulting</h4>
                            <br />

                            <p> We are here to help you define a realistic IT strategy to optimize ROI, productivity and performance, while ensuring alignment with your business. </p>

                        </Col>
                        <Col id="card">
                            <img src={quality} />
                            <h4>Quality</h4>
                            <br />
                            <p>Expertise, Best practice methods Compliance with quality, deadlines and budget requirements. Strong Project management skills.</p>

                        </Col>
                        <Col id="card" S>
                            <img src={marketing} />
                            <h4>Marketing</h4>
                            <br />
                            <p>One component of marketing that is still under-developed is “freelance attractiveness”. For that, We support our freelancers to focus on theirs mission.</p>
                        </Col>
                        <br />


                    </Row >
                    <Row id='row' >


                    </Row >

                    <Row id='row2' >

                        <div class="embed-responsive embed-responsive-21by9">

                            <iframe width="1300" height="537" src="https://www.youtube.com/embed/-C6708iHZkw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <Col id="aa" style={{ top: 20 }}>
                            <h4>Get Our Servece</h4>
                            <p>Our team can offer you many IT services and reply to all your questions.</p>
                        </Col>
                        <Col id="bb" style={{ top: 40, textAlign: "center" }}>
                            <Button variant="outline-dark"> <b>Contact Us </b></Button>

                        </Col>

                    </Row >
                    <Row id='client' >
                        <h1>OUR TEAM</h1>
                        <br />
                        <br />

                        <Col   style={{ textAlign: "center"  }}>
                        <img id="pic" src={omar} style={{ textAlign: "center"  ,height:200}}/>
                        <h4>CHAGUIRI OMAR</h4>
                        <p>CONSULTING MANAGER</p>

                        </Col>

                        <Col id="" style={{ textAlign: "center"  }}>
                        <img id="pic"src={girl} style={{ textAlign: "center"  ,height:200}} />
                        <h4>Nasma AZHARI</h4>
                        <p>MARKETING MANAGER</p>

                        </Col>
                        <Col id="" style={{ textAlign: "center" }}>
                        <img id="pic" src={nabil} style={{ textAlign: "center"   ,height:200, borderBottom:3}}/>
                        <h4>HAMAOUI NABIL</h4>
                        <p>SERVICES MANAGER</p>

                        </Col>
                        <Col id="" style={{ textAlign: "center" }}>
                        <img id="pic" src={soukaina} style={{ textAlign: "center"  ,height:200}}/>
                        <h4>Soukaîna OUAZRAGH</h4>
                        <p>HR MANAGER / IT HEADHUNTER</p>

                        </Col>

                    </Row >
                    <Row id='row' >
                        <h1>CONTACT US</h1>
                        <Col id="cn_left" style={{ textAlign: "left" }}>
                         <h4>ADDRESS</h4>
                        <p>Lot 316, Lotissement Lina, Sidi Maarouf, Casablanca, Maroc</p>
                         
                         <h4>PHONE UMBER</h4>
                        <p>+212522990120</p>
                         
                         <h4>EMAIL</h4>
                        <p>contact@imzii.com</p>

                         <h4>WEBSITE</h4>
                        <p>www.imzii.ma</p>

                        </Col >

                        <Col id="cn_right" style={{ textAlign: "center" }}>
                        <Form>
                            
                        <Form.Control type="text" placeholder="Full Name" />
                        <br />
                        <Form.Control type="email" placeholder="email" />
                        <br />

                        <Form.Control as="textarea" rows="5"  placeholder="Message" />

                        </Form>
                        </Col>
                    </Row >
                    <Row id='row' >
                    </Row >


                </Container >

                <Footer/ >
            </div>

        );
    }
}


/**
 *   <div className="home">
          <Container className="colu_meun">
          <Row id='item' >
            dcd
          </Row >
          <Row id='item' >
          csc
          </Row > <Row id='item' >
         csd
          </Row > <Row id='item' >
        csdc
          </Row >
                    </Container >

      </div>
 * 
 */
export default Home;
