import React, { Fragment, Component } from "react";
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

import {
  FormGroup,
  FormControl,
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup,
  Form
} from "react-bootstrap";

var bgColors = {
  Default: "#81b71a",
  Blue: "#00B1E1",
  Cyan: "#37BC9B",
  Green: "#8CC152",
  Red: "#E9573F",
  Yellow: "#F6BB42"
};
class searshConsultant extends Component {

  constructor(props){
    super(props); 
    this.OnSubmit =this.OnSubmit.bind(this);

    this.checkBooxChangeSeniorite =this.checkBooxChangeSeniorite.bind(this);
    this.checkBooxChangeDisponibilte =this.checkBooxChangeDisponibilte.bind(this);
    this.getConsultant();

  }
  state={
    competence:'',
    seniorite1:'',
    seniorite2:'',
    seniorite3:'',
    seniorite4:'',
    diponibilite1:'',
    diponibilite2:'',
    diponibilite3:'',
    diponibilite4:'',
    consultant:[]
  }
  checkBooxChangeSeniorite(e,n){
    if(n==1){
      if(e.target.checked){
        console.log("oui")
        this.setState({
          seniorite1:"Expert [+10 years]"
        },()=>{
          console.log(this.state.seniorite1)
        });
      }else{
       console.log("non")
       this.setState({
         seniorite1:'',
       },()=>{
        console.log(this.state.seniorite1)
      });
      }
      
    }else if(n==2){
      if(e.target.checked){
        console.log("oui")
        this.setState({
          seniorite2:"Senior [5 to 10 years]"
        },()=>{
          console.log(this.state.seniorite2)
        });
      }else{
       console.log("non")
       this.setState({
         seniorite2:'',
       },()=>{
        console.log(this.state.seniorite2)
      });
      }
      
    }else if(n==3){
      if(e.target.checked){
        console.log("oui")
        this.setState({
          seniorite3:"intermediate [3 to 5 years]"
        },()=>{
          console.log(this.state.seniorite3)
        });
      }else{
       console.log("non")
       this.setState({
         seniorite3:'',
       },()=>{
        console.log(this.state.seniorite3)
      });
      }
      
    }else if(n==4){
      if(e.target.checked){
        console.log("oui")
        this.setState({
          seniorite4:"beginner [0 to 5 years]"
        },()=>{
          console.log(this.state.seniorite4)
        });
      }else{
       console.log("non")
       this.setState({
         seniorite4:'',
       },()=>{
        console.log(this.state.seniorite4)
      });
      }
      
    }
  }
  checkBooxChangeDisponibilte(e,n){
    if(n==1){
      if(e.target.checked){
        console.log("oui")
        this.setState({
          diponibilite1:"immediate"
        },()=>{
          console.log(this.state.diponibilite1)
        });
      }else{
       console.log("non")
       this.setState({
        diponibilite1:'',
       },()=>{
        console.log(this.state.diponibilite1)
      });
      }
      
    }else if(n==2){
      if(e.target.checked){
        console.log("oui")
        this.setState({
          diponibilite2:"In 2 weeks"
        },()=>{
          console.log(this.state.diponibilite2)
        });
      }else{
       console.log("non")
       this.setState({
        diponibilite2:'',
       },()=>{
        console.log(this.state.diponibilite2)
      });
      }
      
    }else if(n==3){
      if(e.target.checked){
        console.log("oui")
        this.setState({
          diponibilite3:"1 month"
        },()=>{
          console.log(this.state.diponibilite3)
        });
      }else{
       console.log("non")
       this.setState({
        diponibilite3:'',
       },()=>{
        console.log(this.state.diponibilite3)
      });
      }
      
    }else if(n==4){
      if(e.target.checked){
        console.log("oui")
        this.setState({
          diponibilite4:"+ 1 month"
        },()=>{
          console.log(this.state.diponibilite4)
        });
      }else{
       console.log("non")
       this.setState({
        diponibilite4:'',
       },()=>{
        console.log(this.state.diponibilite4)
      });
      }
      
    }
  }
  

/**
 *  competence,
    seniorite1,
    seniorite2,
    seniorite3,
    seniorite4,
    diponibilite1,
    diponibilite2,
    diponibilite3,
    diponibilite4
 */
  getConsultant = v => {
    let url ="http://localhost:4000/searchconsultant?competence=" +
    this.state.competence+"&seniorite1="+
    this.state.seniorite1+"&seniorite2="+
    this.state.seniorite2+"&seniorite3="+
    this.state.seniorite3+"&seniorite4="+
    this.state.seniorite4+"&diponibilite1="+
    this.state.diponibilite1+"&diponibilite2="+
    this.state.diponibilite2+"&diponibilite3="+
    this.state.diponibilite3+"&diponibilite4="+
    this.state.diponibilite4;
    fetch(
      url
    )
      .then(response => response.json())
      .then(response =>{
        this.setState({
          consultant: response.data
        },()=>{console.log(this.state.consultant);
        });
      }
      )
      .catch(err => console.error(err));

      console.log(url);
      
  };


  OnSubmit() {
    console.log("onSubmit");
    this.getConsultant();
  }
  render() {
    return (
      <main className="main">
        {" "}
        <Row>
          <Col xs={12} md={7}>
          <FormControl placeholder="skills" type="text" name="skills" style={{marginTop:30}}  onChange={e=>{
            this.setState({
              competence:e.target.value
            },()=>{
              console.log(this.state.competence);
              
            });
            
          }}/> <input
            type="submit"
            className="btn btn-primary btn-block mt-4"
            value="search"
            onClick={this.OnSubmit}
          />
          </Col>
          <Col xs={6} md={5} style={{ backgroundColor: bgColors.Yellow ,}}>
            <form style={{marginTop:30}}>
              
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Seniorite</Form.Label>
                <Row>
                  <Col>
                    <Form.Check label="Expert [+10 years]"  onChange={e=>{
                        this.checkBooxChangeSeniorite(e,1);
                    }} />
                  </Col>{" "}
                  <Col>
                    <Form.Check label="Senior [5 to 10 years]" onChange={e=>{
                        this.checkBooxChangeSeniorite(e,2);                    
                    }} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check label="intermediate [3 to 5 years]" onChange={e=>{
                        this.checkBooxChangeSeniorite(e,3);
                    }}  />
                  </Col>{" "}
                  <Col>
                    <Form.Check label="beginner [0 to 5 years]"onChange={e=>{
                        this.checkBooxChangeSeniorite(e,4);
                    }}  />
                  </Col>
                </Row>

                <Form.Label>availability</Form.Label>
                <Row>
                  <Col>
                    <Form.Check label="immediate" onChange={e=>{
                     this. checkBooxChangeDisponibilte(e,1)
                    }} />
                  </Col>{" "}
                  <Col>
                    <Form.Check label="In 2 weeks"  onChange={e=>{
                      this.checkBooxChangeDisponibilte(e,2)
                    }}/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check label="1 month"  onChange={e=>{
                     this.checkBooxChangeDisponibilte(e,3)
                    }}/>
                  </Col>{" "}
                  <Col>
                    <Form.Check label="+ 1 month"  onChange={e=>{
                      this.checkBooxChangeDisponibilte(e,4)
                    }}/>
                  </Col>
                </Row>
              
                
              </Form.Group>
            </form>
          </Col>
        </Row>
      </main>
    );
  }
  //  return
}

export default searshConsultant;
