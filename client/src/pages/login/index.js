import React, { Component } from 'react';
import './styles.css';
//import { Link } from 'react-router-dom'
export default class Login extends Component {
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
}
handleSubmit(event){
     event.preventDefault();
     //var self=this;
     var data= new FormData(document.getElementById('login'));
     console.log(data);
     fetch('http://localhost:5000/login/', {
            method: 'POST',
            datatype:'json',
            headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
            body:  JSON.stringify({
                uname: document.getElementById('uname').value,
                password: document.getElementById('password').value
            })
        }).then(function(response) {
              return response.json();
            }).then(function(body) {
                console.log(body);
            }).catch(function(error) {
                console.log(error);
            }); 
}

render(){
    return (
      <div className="login">
        <form id="login" onSubmit={this.handleSubmit}>
            <div className="header">
                <h3>Login</h3>
            </div>
            <div className="sep"></div>
            <div className="inputs">
                <input id="uname" type="text" placeholder="Username"/>
                <input id="password" type="password" placeholder="Password" />
            <input type="submit" value="Submit" />
            </div>
        </form>
      </div>
    );
}
}