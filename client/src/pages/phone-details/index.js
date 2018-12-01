import React, { Component } from 'react';
import './styles.css';
import Comment from '../../components/comment';

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
            grid.push(
                <div>
                <div className="phone-box">
                <div className="phone-img-section">
                    <img alt="phone-name" src={this.state.phones[i].imglink1}/>
                </div>
                <div className="phone-summary-section">
                    <h1>{this.state.phones[i].brand} {this.state.phones[i].name}</h1>
                    <div className="user-rating-summary">
                        <img src={require("../../img/favorite.png")}/>
                        <text><span 
                        className="large-bolder-text">4.5/</span>5</text>
                        <span>  (Average User Rating)</span>
                        <br/>
                        <br/>
                        <div className="details-small-grid">
                        <div className="details-small-grid1">
                            <h3 className="details-small-grid-head">
                            <img src={require("../../img/security-on.png")}/>OS</h3>
                            <p className="details-small-grid-text"> Android</p>
                        </div>
                        <div className="details-small-grid1">
                            <h3 className="details-small-grid-head"><img src={require("../../img/memory-chip.png")}/> Chipset</h3>
                            <p className="details-small-grid-text">A10 Bionic</p>
                        </div>
                        <div className="details-small-grid1">
                            <h3 className="details-small-grid-head"><img src={require("../../img/battery.png")}/> Battery</h3>
                            <p className="details-small-grid-text">4000 mah</p>
                        </div>
                        <div className="details-small-grid1">
                            <h3 className="details-small-grid-head"><img src={require("../../img/smartphone.png")}/> Screen</h3>
                            <p className="details-small-grid-text">6.21"</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    
            <div id="spec_response">
            <div className="sub_inner_box border">
                <h2 className="heading head_bdr">
                OnePlus 6T Specifications
                </h2>
                <div className="spec_box">
                    <div className="specsLeft">
                    General
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">Launch Date</td>
                            <td className="spec_des">{this.state.phones[i].announced}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Status</td>
                            <td className="spec_des">{this.state.phones[i].status}</td>
                        </tr>
                   
                        </tbody>
                    </table>
                </div>
                <div className="spec_box">
                    <div className="specsLeft">
                    Body
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">Dimensions</td>
                            <td className="spec_des">{this.state.phones[i].dimensions}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Weight</td>
                            <td className="spec_des">{this.state.phones[i].weight}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Build</td>
                            <td className="spec_des">{this.state.phones[i].build}</td>
                        </tr>
                            <tr>
                            <td className="spec_ttle">SIM</td>
                            <td className="spec_des">{this.state.phones[i].sim}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="spec_box">
                    <div className="specsLeft">
                    Display
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">Type</td>
                            <td className="spec_des">{this.state.phones[i].disptype}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Size</td>
                            <td className="spec_des">{this.state.phones[i].dispsize}</td>
                        </tr>
                           <tr>
                            <td className="spec_ttle">Resolution</td>
                            <td className="spec_des">{this.state.phones[i].dispres}</td>
                        </tr>
                           <tr>
                            <td className="spec_ttle">Multitouch</td>
                            <td className="spec_des">{this.state.phones[i].ismultitouch}</td>
                        </tr>
                           <tr>
                            <td className="spec_ttle">Protection</td>
                            <td className="spec_des">{this.state.phones[i].protection}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="spec_box">
                    <div className="specsLeft">
                    Platform
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">OS</td>
                            <td className="spec_des">{this.state.phones[i].os}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Chipset</td>
                            <td className="spec_des">{this.state.phones[i].chipset}</td>
                        </tr>
                           <tr>
                            <td className="spec_ttle">GPU</td>
                            <td className="spec_des">{this.state.phones[i].gpu}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="spec_box">
                    <div className="specsLeft">
                    Main Camera
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">Type</td>
                            <td className="spec_des">{this.state.phones[i].maincamtype}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Features</td>
                            <td className="spec_des">{this.state.phones[i].maincamfeatures}</td>
                        </tr>
                           <tr>
                            <td className="spec_ttle">Video</td>
                            <td className="spec_des">{this.state.phones[i].maincamvid}</td>
                        </tr>
                       
                        </tbody>
                    </table>
                </div>
                <div className="spec_box">
                    <div className="specsLeft">
                    Selfie Camera
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">Type</td>
                            <td className="spec_des">{this.state.phones[i].selfcamtype}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Features</td>
                            <td className="spec_des">{this.state.phones[i].selfcamfeatures}</td>
                        </tr>
                           <tr>
                            <td className="spec_ttle">Video</td>
                            <td className="spec_des">{this.state.phones[i].selfcamvid}</td>
                        </tr>
                       
                        </tbody>
                    </table>
                </div>
                <div className="spec_box">
                    <div className="specsLeft">
                    Sound
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">Alert Type</td>
                            <td className="spec_des">{this.state.phones[i].alerttype}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Loudspeaker</td>
                            <td className="spec_des">{this.state.phones[i].loudspeakers}</td>
                        </tr>
                           <tr>
                            <td className="spec_ttle">Jack</td>
                            <td className="spec_des">{this.state.phones[i].jack}</td>
                        </tr>
                            <tr>
                            <td className="spec_ttle">Additional Features</td>
                            <td className="spec_des">{this.state.phones[i].soundmisc}</td>
                        </tr>
                       
                        </tbody>
                    </table>
                </div>
                  <div className="spec_box">
                    <div className="specsLeft">
                    Comms
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">WLAN</td>
                            <td className="spec_des">{this.state.phones[i].wlan}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Bluetooth</td>
                            <td className="spec_des">{this.state.phones[i].bluetooth}</td>
                        </tr>
                           <tr>
                            <td className="spec_ttle">GPS</td>
                            <td className="spec_des">{this.state.phones[i].gps}</td>
                        </tr>
                            <tr>
                            <td className="spec_ttle">NFC</td>
                            <td className="spec_des">{this.state.phones[i].nfc}</td>
                        </tr>
                              <tr>
                            <td className="spec_ttle">Radio</td>
                            <td className="spec_des">{this.state.phones[i].radio}</td>
                        </tr>
                              <tr>
                            <td className="spec_ttle">USB</td>
                            <td className="spec_des">{this.state.phones[i].usb}</td>
                        </tr>
                       
                        </tbody>
                    </table>
                </div>
                <div className="spec_box">
                    <div className="specsLeft">
                    Features
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">Sensors</td>
                            <td className="spec_des">{this.state.phones[i].sensors}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Messaging</td>
                            <td className="spec_des">{this.state.phones[i].messaging}</td>
                        </tr>
                           <tr>
                            <td className="spec_ttle">Browser</td>
                            <td className="spec_des">{this.state.phones[i].browser}</td>
                        </tr>
                       
                        </tbody>
                    </table>
                </div>
                <div className="spec_box">
                    <div className="specsLeft">
                    Battery
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle"></td>
                            <td className="spec_des">{this.state.phones[i].batterybasic}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Talk time</td>
                            <td className="spec_des">{this.state.phones[i].talktime}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Music Play</td>
                            <td className="spec_des">{this.state.phones[i].musicplay}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="spec_box">
                    <div className="specsLeft">
                    Misc
                    </div>  
                    <table className="spec_table">
                        <tbody>
                        <tr>
                            <td className="spec_ttle">Colors</td>
                            <td className="spec_des">{this.state.phones[i].colors}</td>
                        </tr>
                        <tr>
                            <td className="spec_ttle">Price</td>
                            <td className="spec_des">{this.state.phones[i].price}</td>
                        </tr>
                           <tr>
                            <td className="spec_ttle">Video</td>
                            <td className="spec_des">{this.state.phones[i].selfcamvid}</td>
                        </tr>
                       
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            </div>
            );
    return (
        <div className="phone-details">
            {grid}
        <Comment id={this.props.match.params.id}/>
        </div>
    );
  }
}
