import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Progress,
  TabContent,
  TabPane,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import PropTypes from "prop-types";
import classNames from "classnames";
import { AppSwitch } from "@coreui/react";

import { Form } from "react-bootstrap";
import { MdSearch } from "react-icons/md";

import "./checkbook.css";
const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultAside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      ischeckSenior1:"",
      ischeckSenior2:"",
      ischeckSenior3:"",
      ischeckSenior4:"",
      ischeckAvaibil1:"",
      ischeckAvaibil2:"",
      ischeckAvaibil3:"",
      ischeckAvaibil4:"",
      skills:""

    };
  }

    onChangeInput=()=>{
      localStorage.setItem('skills',this.state.skills);

      localStorage.setItem('ischeckSenior1',this.state.ischeckSenior1);
      localStorage.setItem('ischeckSenior2',this.state.ischeckSenior2);
      localStorage.setItem('ischeckSenior3',this.state.ischeckSenior3);
      localStorage.setItem('ischeckSenior4',this.state.ischeckSenior4);

      localStorage.setItem('ischeckAvaibil1',this.state.ischeckAvaibil1);
      localStorage.setItem('ischeckAvaibil2',this.state.ischeckAvaibil2);
      localStorage.setItem('ischeckAvaibil3',this.state.ischeckAvaibil3);
      localStorage.setItem('ischeckAvaibil4',this.state.ischeckAvaibil4);

    }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <i className="icon-list" />
            </NavLink>
          </NavItem>
         
        </Nav>
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
                <div >
                  <div className="page">
                    <div className="">
                      <div className="">
                        <label className="">
                          <input  type="text" onChange={(e)=>{
                            this.setState({
                              skills:e.target.value
                            },()=>{
                              console.log(this.state);
                             this.onChangeInput()
                            });

                            
                          }}/>
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
              
              </ListGroupItem>

           
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase">
                Seniorite
              </ListGroupItem >
                         
              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-danger"
                onClick={ () =>{
                  if(this.state.ischeckSenior1 === ""){
                    this.setState({
                      ischeckSenior1:"checked"
                    },() =>{
                      console.log("checked");
                      this.onChangeInput()
                    });
                    
                  }else{
                    {
                      this.setState({
                        ischeckSenior1:""
                      },() =>{
                        console.log("no checked");
                        this.onChangeInput()
                      });
                    }
                  }
                }
              }
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input className="toggle__input" type="checkbox"  checked ={this.state.ischeckSenior1 }/>
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
                onClick={ () =>{
                  if(this.state.ischeckSenior2 === ""){
                    this.setState({
                      ischeckSenior2:"checked"
                    },() =>{
                      console.log("checked");
                      this.onChangeInput();

                    });
                    
                  }else{
                    {
                      this.setState({
                        ischeckSenior2:""
                      },() =>{
                        console.log("no checked");
                        this.onChangeInput();

                      });
                    }
                  }

                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input className="toggle__input" type="checkbox" checked={this.state.ischeckSenior2}/>
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
                onClick={ () =>{
                  if(this.state.ischeckSenior3 === ""){
                    this.setState({
                      ischeckSenior3:"checked"
                    },() =>{
                      console.log("checked");
                      this.onChangeInput();

                    });
                    
                  }else{
                    {
                      this.setState({
                        ischeckSenior3:""
                      },() =>{
                        console.log("no checked");
                        this.onChangeInput();

                      });
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle"  >
                          <input className="toggle__input" type="checkbox" checked={this.state.ischeckSenior3}/>
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
                onClick={ () =>{
                  if(this.state.ischeckSenior4 === ""){
                    this.setState({
                      ischeckSenior4:"checked"
                    },() =>{
                      console.log("checked");
                  this.onChangeInput();
                      
                    });
                    
                  }else{
                    {
                      this.setState({
                        ischeckSenior4:""
                      },() =>{
                        console.log("no checked");
                  this.onChangeInput();
                        
                      });
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input className="toggle__input" type="checkbox" checked={this.state.ischeckSenior4}/>
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
                onClick={ () =>{
                  if(this.state.ischeckAvaibil1 === ""){
                    this.setState({
                      ischeckAvaibil1:"checked"
                    },() =>{
                      console.log("checked");
                  this.onChangeInput();
                      
                    });
                    
                  }else{
                    {
                      this.setState({
                        ischeckAvaibil1:""
                      },() =>{
                        console.log("no checked");
                  this.onChangeInput();
                        
                      });
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input className="toggle__input" type="checkbox" checked={this.state.ischeckAvaibil1} />
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
                <small className="text-muted mr-3">
                  ___
                </small>
              
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-success"
                onClick={ () =>{
                  if(this.state.ischeckAvaibil2 === ""){
                    this.setState({
                      ischeckAvaibil2:"checked"
                    },() =>{
                      console.log("checked");
                  this.onChangeInput();
                      
                    });
                    
                  }else{
                    {
                      this.setState({
                        ischeckAvaibil2:""
                      },() =>{
                        console.log("no checked");
                  this.onChangeInput();
                        
                      });
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input className="toggle__input" type="checkbox" checked={this.state.ischeckAvaibil2}/>
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
                <small className="text-muted mr-3">
                 __
                </small>
              
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-primary"
                onClick={ () =>{
                  if(this.state.ischeckAvaibil3 === ""){
                    this.setState({
                      ischeckAvaibil3:"checked"
                    },() =>{
                      console.log("checked");
                  this.onChangeInput();
                      
                    });
                    
                  }else{
                    {
                      this.setState({
                        ischeckAvaibil3:""
                      },() =>{
                        console.log("no checked");
                  this.onChangeInput();
                        
                      });
                    }
                  }
                  
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle"  >
                          <input className="toggle__input" type="checkbox" checked={this.state.ischeckAvaibil3}/>
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
                <small className="text-muted mr-3">
                  ___
                </small>
              
              </ListGroupItem>

              <ListGroupItem
                action
                href="#"
                className="list-group-item-accent-info"
                onClick={ () =>{
                  if(this.state.ischeckAvaibil4 === ""){
                    this.setState({
                      ischeckAvaibil4:"checked"
                    },() =>{
                      console.log("checked");
                  this.onChangeInput();
                      
                    });
                    
                  }else{
                    {
                      this.setState({
                        ischeckAvaibil4:""
                      },() =>{
                        console.log("no checked");
                  this.onChangeInput();
                        
                      });
                    }
                  }
                }}
              >
                <div className="avatar float-right">
                  <div className="page">
                    <div className="page__demo">
                      <div className="page__toggle">
                        <label className="toggle">
                          <input className="toggle__input" type="checkbox" checked={this.state.ischeckAvaibil4} />
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
                <small className="text-muted mr-3">
                  ___
                </small>
              
              </ListGroupItem>
          
            </ListGroup>
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <h6>Settings</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small>
                  <b>Option 1</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
              <div>
                <small className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 2</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  size={"sm"}
                />
              </div>
              <div>
                <small className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 3</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                  disabled
                />
                <div>
                  <small className="text-muted">Option disabled.</small>
                </div>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 4</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
            </div>

            <hr />
            <h6>System Utilization</h6>

            <div className="text-uppercase mb-1 mt-4">
              <small>
                <b>CPU Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="info" value="25" />
            <small className="text-muted">348 Processes. 1/4 Cores.</small>

            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>Memory Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="warning" value="70" />
            <small className="text-muted">11444GB/16384MB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>SSD 1 Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="danger" value="95" />
            <small className="text-muted">243GB/256GB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>SSD 2 Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="success" value="10" />
            <small className="text-muted">25GB/256GB</small>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
