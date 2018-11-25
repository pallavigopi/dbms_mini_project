import React, { Component } from 'react';
//import styles from './styles.css';
//import { Link } from 'react-router-dom'npm 
export default class SignUp extends Component {
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
}
handleSubmit(event){
     event.preventDefault();
     //var self=this;
     var data= new FormData(document.getElementById('signup'));
     console.log(data);
     fetch('http://localhost:5000/signup/', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
            body:  JSON.stringify({
                email: document.getElementById('email').value,
                uname: document.getElementById('uname').value,
                password: document.getElementById('password').value
            })
        }).then(function(response) {
            if (response.ok){
                return response.json();
              } else {
                throw new Error ('Something went wrong with your fetch');
              }
            }).then(function(body) {
                console.log(body);
            }); 
}

render(){
    return (
      <div className="signup">
        <form id="signup" onSubmit={this.handleSubmit}>
            <div className="header">
                <h3>Sign Up</h3>
                <p>Join us to review your favorite gadgets!</p>
            </div>
            <div className="sep"></div>
            <div className="inputs">
                <input id="uname" type="text" placeholder="Username"/>
                <input id="email" type="email" placeholder="E-mail"/>
                <input id="password" type="password" placeholder="Password" />
            <div className="checkboxy">
                <input name="checky" id="checky" value="1" type="checkbox" /><label class="terms">I accept the terms of use</label>
            </div>
            <input type="submit" value="Submit" />
            </div>
        </form>
      </div>
    );
}
}