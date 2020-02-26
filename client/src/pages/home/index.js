import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            phones: []
        }
        this.handleLogout=this.handleLogout.bind(this);
    }
    handleLogout(){
        localStorage.setItem('loggedin','false');
        localStorage.setItem('usertoken','');
    }
    componentDidMount(){
       fetch('/api/phones/all')
       .then(res => res.json())
       .then(phones => this.setState({phones},() => console.log(phones)));
    }
    render() {
        var grid=[];
        if(localStorage.getItem('loggedin')=='true')
          grid.push(
            <div className="login-logout">
              <Link to='/' onClick={this.handleLogout}>LOGOUT</Link>
            </div>
          );
        else
        grid.push(
          <div className="login-logout">
            <Link to='/login'>LOGIN</Link>
          </div>
        );
    return (
      <div className="home">
        {grid}
        <div className="main-overlay">
        <h1>PhoneGeeks</h1>
        <input placeholder="Search..." required="required" autoFocus="" className="search-bar-landing"/>
        <button id="search-action" className="search-icon-landing">
            <img alt="icon" src={require('../../img/search.png')} />
        </button>
        </div>
        <h1>Featured Phones</h1>
        <div className="featured-phones-grid">
            {this.state.phones.map(phones => 
            <Link key={phones.id} to={"/phones/"+phones.id}><div className="featured-phones-item">
            <img alt="phone-pic" src={phones.imglink1}/>
            <h2>{phones.brand} {phones.name}</h2>
            </div></Link>)}
      </div>
      </div>
    );
  }
}