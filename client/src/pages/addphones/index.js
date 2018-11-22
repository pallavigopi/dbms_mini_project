import React, { Component } from 'react';
import style from './style.css';
import { Route, Link } from 'react-router-dom'
export default class Addphone extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {

          userInfo:[]
        }
    }

    handleDelete(event){  

    }

    handleSubmit(event){

      event.preventDefault();
      fetch('http://localhost:5000/addphones/', { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          "Content-Type":"application/json"
        },
        body:JSON.stringify({

          
          brand:document.getElementById('brand').value,
          name:document.getElementById('name').value,
          imglink1:document.getElementById('imglink1').value,
          imglink2:document.getElementById('imglink2').value,
          announced:document.getElementById('announced').value,
          status:document.getElementById('status').value,
          dimensions:document.getElementById('dimensions').value,
          weight:document.getElementById('weight').value,
          build:document.getElementById('build').value,
          sim:document.getElementById('sim').value,
          disptype:document.getElementById('disptype').value,
          dispsize:document.getElementById('dispsize').value,
          dispres:document.getElementById('dispres').value,
          ismultitouch:document.getElementById('ismultitouch').value,
          protection:document.getElementById('protection').value,
          os:document.getElementById('os').value,
          chipset:document.getElementById('chipset').value,
          gpu:document.getElementById('gpu').value,
          maincamtype:document.getElementById('maincamtype').value,
          maincamfeatures:document.getElementById('maincamfeatures').value,
          maincamvid:document.getElementById('maincamvid').value,
          selfcamtype:document.getElementById('selfcamtype').value,
          selfcamfeatures:document.getElementById('selfcamfeatures').value,
          selfcamvid:document.getElementById('selfcamvid').value,
          alerttype:document.getElementById('alerttype').value,
          loudspeakers:document.getElementById('loudspeakers').value,
          jack:document.getElementById('jack').value,
          soundmisc:document.getElementById('soundmisc').value,
          wlan:document.getElementById('wlan').value,
          bluetooth:document.getElementById('bluetooth').value,
          gps:document.getElementById('gps').value,
          nfc:document.getElementById('nfc').value,
          radio:document.getElementById('radio').value,
          usb:document.getElementById('usb').value,
          sensors:document.getElementById('sensors').value,
          messaging:document.getElementById('messaging').value,
          browser:document.getElementById('browser').value,
          batterybasic:document.getElementById('batterybasic').value,
          talktime:document.getElementById('talktime').value,
          musicplay:document.getElementById('musicplay').value,
          colors:document.getElementById('colors').value,
          price:document.getElementById('price').value,



        })
      
      }).then(function(response) {
        if(response.ok){
          return response.json();
        }else{
       throw new Error ('something went wrong with your fetch');
     }
   }).then(function(body){

     console.log(body);
   });


    }
   

   
    render() {
    return (
      <div className="addphones">
        
      <form id="addphones" onSubmit={this.handleSubmit}>
        <p>Brand <input id="brand" type="text" placeholder="Brand Name" /></p>
        <p>Name <input id="name" type="text" placeholder="Phone Name" /></p>
        <p>imagelink1 <input id="imglink1" type="text" placeholder="Image Link" /></p>
        <p>imagelink2 <input id="imglink2" type="text" placeholder="Image Link" /></p>
        <p>Announced <input id="announced" type="text" placeholder="Announced" /></p>
        <p>Status <input id="status" type="text" placeholder="Status" /></p>
        <p>Dimensions <input id="dimensions" type="text" placeholder="Dimensions" /></p>
        <p>Weight <input id="weight" type="text" placeholder="Weight" /></p>
        <p>Build <input id="build" type="text" placeholder="Build" /></p>
        <p>Sim <input id="sim" type="text" placeholder="Sim" /></p>
        <p>Display Type <input id="disptype" type="text" placeholder="Display Type" /></p>
        <p>Display Size <input id="dispsize" type="text" placeholder="Display Size" /></p>
        <p>Display Resolution <input id="dispres" type="text" placeholder="Display Resolution" /></p>
        <div>
         <label>Multitouch 
           <select id="ismultitouch" name="type">

                    <option disabled> Choose option </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
           </select>
          </label>
        </div>
        
        <p>Protection <input id="protection" type="text" placeholder="Protection" /></p>
        <p>Operating System <input id="os" type="text" placeholder="Operating System" /></p>
        <p>Chipset <input id="chipset" type="text" placeholder="Chipset" /></p>
        <p>GPU <input id="gpu" type="text" placeholder="GPU" /></p>
        <p>Main Camera Type <input id="maincamtype" type="text" placeholder="Main Camera Type" /></p>
        <p>Main Camera Features <input id="maincamfeatures" type="text" placeholder="Main Camera Features" /></p>
        <p>Main Camera Video <input id="maincamvid" type="text" placeholder="Main Camera Video" /></p>
        <p>Selfie Camera Type <input id="selfcamtype" type="text" placeholder="Selfie Camera Type" /></p>
        <p>Selfie Camera Features <input id="selfcamfeatures" type="text" placeholder="Selfie Camera Features" /></p>
        <p>Selfie Camera Video<input id="selfcamvid" type="text" placeholder="Selfie Camera Video" /></p>
        <p>Alert Type <input id="alerttype" type="text" placeholder="Alert Type" /></p>
        <p>LoudSpeakers <input id="loudspeakers" type="text" placeholder="LoudSpeakers" /></p>
        <p>Jack <input id="jack" type="text" placeholder="Jack" /></p>
        <p>Sound Additional Features <input id="soundmisc" type="text" placeholder="Sound Additional Features" /></p>
        <p>WLAN <input id="wlan" type="text" placeholder="WLAN" /></p>
        <p>Bluetooth <input id="bluetooth" type="text" placeholder="Bluetooth" /></p>
        <p>GPS <input id="gps" type="text" placeholder="GPS" /></p>
        <p>NFC <input id="nfc" type="text" placeholder="NFC" /></p>
        <p>Radio <input id="radio" type="text" placeholder="Radio" /></p>
        <p>USB <input id="usb" type="text" placeholder="USB" /></p>
        <p>Sensors <input id="sensors" type="text" placeholder="Sensors" /></p>
        <p>Messaging <input id="messaging" type="text" placeholder="Messsaging" /></p>
        <p>Browser <input id="browser" type="text" placeholder="Browser" /></p>
        <p>Battery <input id="batterybasic" type="text" placeholder="Battery" /></p>
        <p>Talktime <input id="talktime" type="text" placeholder="Talktime" /></p>
        <p>Music Play <input id="musicplay" type="text" placeholder="Music Play" /></p>
        <p>Colors <input id="colors" type="text" placeholder="Colors" /></p>
        <p>Price <input id="price" type="text" placeholder="Price" required /></p>





        <input type="submit" value="Submit"/>
      </form>
      <br/>
      
      </div>
    );
  }
}