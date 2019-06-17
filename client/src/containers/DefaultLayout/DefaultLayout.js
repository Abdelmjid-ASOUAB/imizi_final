import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container, Row } from "reactstrap";
import MainMission from "./mainPage/mainMission";
import ClientMission from "./mainPage/ClientMission";
import MainMessage from "./mainPage/mainMessage";
import MainSetting from "./mainPage/mainSetting";
import MainConsultant from "./mainPage/searshConsultant";


import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";
// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";

const DefaultAside = React.lazy(() => import("./DefaultAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  state = {
    page: 0,
    test:2
  };

  signOut(e) {
    e.preventDefault();
    this.props.history.push("/login");
  }

  render() {
    let selectPage = <MainMission />;
    if (this.state.page === 0) {
      if(localStorage.getItem('compte')=='client'){
        selectPage = <ClientMission />;

    }else  if(localStorage.getItem('compte')=='consultant'){
      selectPage = <MainMission />;

    }

    } else if (this.state.page === 1) {
      selectPage = <MainMessage />;
    } else if (this.state.page === 2) {
      selectPage = <MainSetting />;
    }else if (this.state.page === 3) {
      selectPage = <MainConsultant />;
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
              
              <Container>

              
                <Row
                  style={{
                    marginTop: 20,
                    marginLeft: 10,
                    marginBottom: 10,
                    fontWeight: "bold"
                  }}
                  onClick={e => {
                    this.setState({
                      page: 0
                    });
                    console.log(localStorage.getItem('email'));
                    
                  }}
                >
                  All Missions
                </Row>

                <Row
                  style={{ marginTop: 20, marginLeft: 10, marginBottom: 10 }}
                  onClick={e =>
                    this.setState({
                      page: 1
                    })
                  }
                >
                  Messages
                </Row>
                <Row
                  style={{ marginTop: 20, marginLeft: 10, marginBottom: 10 }}
                  onClick={e =>
                    this.setState({
                      page: 2
                    })
                  }
                >
                  setting
                </Row>
                
                  {localStorage.getItem("compte")=="client"? (
                    <Row
                    style={{ marginTop: 20, marginLeft: 10, marginBottom: 10 }}
                    onClick={e =>
                      this.setState({
                        page: 3
                      })
                    }
                  >
                    Search consultant
                  </Row>
                ) : (
                  <br />
                )}
              
              </Container>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <Container>
            <Row className="justify-content-center">{selectPage}</Row>
          </Container>

          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
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
