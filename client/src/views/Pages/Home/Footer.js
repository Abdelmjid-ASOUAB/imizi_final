import React, { Component } from 'react';
import  {Container,Row,Col} from 'react-bootstrap'
import './Footer.css';
import local from './icon/local.png';
import phone from './icon/phone.png';
import mail from './icon/maile.png';
import logo from './icon/logo-orange.png';


class Footer extends Component {
    render() {
       
        return (
            <div>
   
<div id="divlogo">
            

<img logo ="loggo" src={logo} style={{ width: 150, marginLeft:600 }} />   



</div>
            </div>
        );
    }
}


export default Footer;
