import React, { Component, Suspense } from "react";
import { Container, Row, ListGroupItem, Col } from "reactstrap";
import MainMission from "./mainPage/mainMission";
import ClientMission from "./mainPage/ClientMission";
import MainMessage from "./mainPage/mainMessage";
import MainSetting from "./mainPage/mainSetting";
import MainConsultant from "./mainPage/searshConsultant";
import TableConsultant from "./mainPage/tableConsultant";

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer
} from "@coreui/react";






import Fab from '@material-ui/core/Fab';
import robot from './icons/robot.png';
import Close from '@material-ui/icons/CloseOutlined';
import "./chat.css";


import {
  Widget,
 
} from "react-chat-widget";

import home from './icons/home.png'
import message from './icons/message.png'
import setting from './icons/setting.png'
import consultant from './icons/consultant.png'

const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));


class DefaultLayout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  state = {
    page: 0,
    test: 2,
    open: false

  };


  signOut(e) {
    e.preventDefault();
    this.props.history.push("/login");
  }



  boot = newMessage => {
    if(localStorage.getItem("compte")==="client")  {
    return (
      <div
        
        onClick={() => {
          this.setState({
            open:true
          },()=> {
            console.log(this.state.open);

          });
        }}
      >
        <Fab color="primary" aria-label="Add" >
        <img src={robot} alt="home" style={{height:50,width:50}} />
    </Fab>
      </div>
    );
  
  
      }
};


boot2 = newMessage => {
  


  return (
    <div
      onClick={() => {
        this.setState({
          open:false
        },()=> {
          console.log(this.state.open);

        });
      }}
    >
       <Close  style={{right:"7",top:"5", position: "absolute",color:"#FFFFFF",cursor: "pointer", }} />

        <iframe allow="microphone;" width="350" height="430" src="https://console.dialogflow.com/api-client/demo/embedded/e1b71eb6-86f2-4c70-b3e2-798b315edd7d"> </iframe>

    </div>
  );

};

  render() {
    const colorSelect="list-group-item-accent-light";
    const colorNotSelect="list-group-item-accent";

    let selectPage = <MainMission />;
   if(localStorage.getItem("compte") !="admin"){ 
    
  }else{
    if (this.state.page === 0) {
      if (localStorage.getItem("compte") == "client") {
        selectPage =    <div className="animated fadeIn pt-1"><ClientMission /></div>;
      } else if (localStorage.getItem("compte") == "consultant") {
        selectPage =<div className="animated fadeIn pt-1"> <MainMission /></div>;
      }else if (localStorage.getItem("compte") == "admin") {
        selectPage =<div className="animated fadeIn pt-1"> <TableConsultant /></div>;
      }
    } else if (this.state.page === 1) {
      selectPage = <div className="animated fadeIn pt-1"><MainMessage /></div>;
    } else if (this.state.page === 2) {
      selectPage =<div className="animated fadeIn pt-1"><MainSetting /></div>;
    } else if (this.state.page === 3) {
      selectPage = <div className="animated fadeIn pt-1"><MainConsultant /></div>;
    }
  }

    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            {localStorage.getItem("compte") != "admin" ?
              <Container>
                <Row
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    fontWeight: "bold",
                    cursor: "pointer",
                    
                  }}
                  onClick={e => {
                    this.setState({
                      page: 0
                    });
                    console.log(localStorage.getItem("email"));
                  }}
                >
                  <ListGroupItem
              
                    action
                    href="#"
                    className={this.state.page==0?colorSelect:colorNotSelect}                
                    style={{backgroundColor:"#2f353a",color:"#f0f3f5"}}
                  >
                    <div className="avatar float-left">
                      <div className="page">
                        <div className="page__demo">
                          <div className="page__toggle">
                            <label className="toggle">
                            <img src={home} alt="home" style={{height:25,width:25}} />
                              <span className="toggle__label">
                                <span className="toggle__text" />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong>All Missions</strong>
                    </div>
                  </ListGroupItem>
                </Row>

                <Row
                  style={{
                  
                    marginBottom: 5,
                    cursor: "pointer"
                  }}
                  onClick={e =>
                    this.setState({
                      page: 1
                    })
                  }
                >
                  
                  <ListGroupItem
                    action
                    href="#"
                    className={this.state.page==1?colorSelect:colorNotSelect}
                    style={{backgroundColor:"#2f353a",color:"#f0f3f5"}}
                  >
                    <div className="avatar float-left">
                      <div className="page">
                        <div className="page__demo">
                          <div className="page__toggle">
                            <label className="toggle">
                            <img src={message} alt="home" style={{height:25,width:25}} />
                              <span className="toggle__label">
                                <span className="toggle__text" />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong>Messages</strong>
                    </div>
                  </ListGroupItem>
                </Row>
                

                <Row
                  style={{
                   
                    marginBottom: 5,
                    cursor: "pointer"
                  }}
                  onClick={e =>
                    this.setState({
                      page: 2
                    })
                  }
                >
                  

                  <ListGroupItem
                    action
                    href="#"
                    className={this.state.page==2?colorSelect:colorNotSelect}
                    style={{backgroundColor:"#2f353a",color:"#f0f3f5"}}
                  >
                    <div className="avatar float-left">
                      <div className="page">
                        <div className="page__demo">
                          <div className="page__toggle">
                            <label className="toggle">
                            <img src={setting} alt="home" style={{height:25,width:25}} />
                              <span className="toggle__label">
                                <span className="toggle__text" />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong>Setting</strong>
                    </div>
                  </ListGroupItem>
                  
                </Row>

                {localStorage.getItem("compte") == "client" ? (
                  <Row
                    style={{
                      marginBottom: 5,
                      cursor: "pointer"
                    }}
                    onClick={e =>
                      this.setState({
                        page: 3
                      })
                    }
                  >
                    

                  <ListGroupItem
                    action
                    href="#"
                    className={this.state.page==3?colorSelect:colorNotSelect}                
                    style={{backgroundColor:"#2f353a",color:"#f0f3f5"}}
                  >
                    <div className="avatar float-left">
                      <div className="page">
                        <div className="page__demo">
                          <div className="page__toggle">
                            <label className="toggle">
                            <img src={consultant} alt="home" style={{height:35,width:35}} />
                              <span className="toggle__label">
                                <span className="toggle__text" />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong> Consultant</strong>
                    </div>
                  </ListGroupItem>
                  
                  </Row>
                ) : (
                  <br />
                )}
              </Container>
             :       
             <Container>
               
               <Row
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    fontWeight: "bold",
                    cursor: "pointer",
                    
                  }}
                  onClick={e => {
                    this.setState({
                      page: 0
                    });
                    console.log(localStorage.getItem("email"));
                  }}
                >
               <ListGroupItem
                    action
                    href="#"
                    className={this.state.page==3?colorSelect:colorNotSelect}                
                    style={{backgroundColor:"#2f353a",color:"#f0f3f5"}}
                  >
                    <div className="avatar float-left">
                      <div className="page">
                        <div className="page__demo">
                          <div className="page__toggle">
                            <label className="toggle">
                            <img src={consultant} alt="home" style={{height:35,width:35}} />
                              <span className="toggle__label">
                                <span className="toggle__text" />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong> Table Consultant</strong>
                    </div>
                  </ListGroupItem>
                  </Row>
               
                </Container>           
          }
            </Suspense>

            {AppSidebarMinimizer}
          </AppSidebar>
          <Container>
          <div>
          
          {selectPage}
          <div className="App">
      
        <Widget launcher={this.state.open==false ? this.boot: this.boot2} />

      </div>
          </div>
          </Container>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
