import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'
export default class LoginMessage extends Component {
    constructor(){
        super();
    }
    render() {
        var grid=[]
        if(localStorage.getItem('loggedin')==='true')
            grid.push(
            <div>
            <h1>Login Successful</h1>
            <p>Go To<Link to='/'>  Home</Link></p>
            <p>Add a phone- <Link to='/addphones'> Add Phones</Link></p>
            </div>);
        else
            grid.push(<div>
                <h1>Login failed. Please retry</h1>
                <p><Link to='/login'>Try Again</Link></p>
                <p>Go To<Link to='/'>  Home</Link></p>
            </div>);
    return (
      <div className="login-message">
        {grid}
      </div>
    );
  }
}