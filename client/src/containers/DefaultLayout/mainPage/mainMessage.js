import React, { Fragment, Component } from "react";
import Fab from '@material-ui/core/Fab';
import robot from './robot.png';
import Close from '@material-ui/icons/CloseOutlined';
import IconButton from '@material-ui/core/IconButton';


import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage
} from "react-chat-widget";


class MainMessage extends Component {
  state = {
    open: false
  };


  boot = newMessage => {
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
      </div>
    );
  
};

  render() {
    return (
      <div className="main">     

     </div>
    );
  }

}

//
export default MainMessage;
