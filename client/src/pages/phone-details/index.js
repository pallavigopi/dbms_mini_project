import React, { Component } from 'react';
import styles from './styles.css';
export default class PhoneDetails extends Component {
    constructor(){
        super();
        this.state={
            phones: []
        }
    }

    componentDidMount(){
       fetch('/api/phones/'+this.props.match.params.id)
       .then(res => res.json())
       .then(phones => this.setState({phones},() => console.log(phones)));
    }
    render() {
        var grid=[];
        for(var i in this.state.phones)
            grid.push(<div><h2>Brand:{this.state.phones[i].brand}<br/></h2>
                           <h2>Name:{this.state.phones[i].name}<br/></h2>
                           <h2>Weight:{this.state.phones[i].weight}<br/></h2>
                           <h2>Announced:{this.state.phones[i].announced}<br/></h2>
                           <h2>Status:{this.state.phones[i].status}<br/></h2>
                           <h2>Dimensions:{this.state.phones[i].dimensions}<br/></h2>
                           <h2>Weight:{this.state.phones[i].weight}<br/></h2>
                           <h2>Build:{this.state.phones[i].build}<br/></h2>
                           <h2>Sim:{this.state.phones[i].sim}<br/></h2>
                           <h2>Display Type:{this.state.phones[i].disptype}<br/></h2>
                           <h2>Display Size:{this.state.phones[i].dispsize}<br/></h2>
                           <h2>Display Resolution:{this.state.phones[i].dispres}<br/></h2>
                           <h2>Multitouch:{this.state.phones[i].ismultitouch}<br/></h2>
                           <h2>Protection:{this.state.phones[i].protection}<br/></h2>
                           <h2>OS:{this.state.phones[i].os}<br/></h2>
                           <h2>Chipset:{this.state.phones[i].chipset}<br/></h2>
                           <h2>GPU:{this.state.phones[i].gpu}<br/></h2>
                           <h2>Main Camera Type:{this.state.phones[i].maincamtype}<br/></h2>
                           <h2>Main Camera Features:{this.state.phones[i].maincamfeatures}<br/></h2>
                           <h2>Main Camera Video:{this.state.phones[i].maincamvid}<br/></h2>
                           <h2>Selfie Camera Type:{this.state.phones[i].selfcamtype}<br/></h2>
                           <h2>Selfie Camera Features:{this.state.phones[i].selfcamfeatures}<br/></h2>
                           <h2>Selfie Camera Video:{this.state.phones[i].selfcamvid}<br/></h2>
                           <h2>Alert Type:{this.state.phones[i].alerttype}<br/></h2>
                           <h2>Loudspeakers:{this.state.phones[i].loudspeakers}<br/></h2>
                           <h2>Jack:{this.state.phones[i].jack}<br/></h2>
                           <h2>Additional Sound Features:{this.state.phones[i].soundmisc}<br/></h2>
                           <h2>WLAN:{this.state.phones[i].wlan}<br/></h2>
                           <h2>Bluetooth:{this.state.phones[i].bluetooth}<br></br></h2>
                           <h2>GPS:{this.state.phones[i].gps}<br></br></h2>
                           <h2>NFC:{this.state.phones[i].nfc}<br></br></h2>
                           <h2>Radio:{this.state.phones[i].radio}<br/></h2>
                           <h2>USB:{this.state.phones[i].usb}<br/></h2>
                           <h2>Sensors:{this.state.phones[i].sensors}<br/></h2>
                           <h2>Messaging:{this.state.phones[i].messaging}<br/></h2>
                           <h2>Browser:{this.state.phones[i].browser}<br/></h2>
                           <h2>Battery:{this.state.phones[i].batterybasic}<br/></h2>
                           <h2>Talktime:{this.state.phones[i].talktime}<br/></h2>
                           <h2>Musicplay:{this.state.phones[i].musicplay}<br/></h2>
                           <h2>Colors:{this.state.phones[i].colors}<br/></h2>
                           <h2>Price:{this.state.phones[i].price}<br/></h2>
                           <img src="this.state.phones[i].imagelink1"/>
                      </div>);

    return (
      <div className="phone-deatils">
        <h1>Phone Details</h1>
        {grid}
      </div>
    );
  }
}