import React, { Component } from 'react';
import './styles.css';
import { withRouter } from "react-router";

class Comment extends Component {
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            comments: []
        }
    }

    handleSubmit(event){
      //var self=this;
      event.preventDefault();
      var data= new FormData(document.getElementById('login'));
      console.log(data);
      fetch('http://localhost:5000/api/addcomment/', {
             method: 'POST',
             datatype:'json',
             headers: {
             'Accept': 'application/json',
             "Content-Type": "application/json"
         },
             body:  JSON.stringify({
                 uname: document.getElementById('uname').value,
                 email: document.getElementById('cemail').value,
                 comment: document.getElementById('comment').value,
                 id: this.props.id
             })
         }).then(function(response) {
               return response.json();
             }).then(function(body) {
                 console.log(body);
             }).catch(function(error) {
                 console.log(error);
             });
             console.log(this.props.id);
             this.props.history.push('/');
 }

    componentDidMount(){
       fetch('http://localhost:5000/api/comments/'+this.props.id,{
           method:'GET',
       })
       .then(res => res.json())
       .then(comments => this.setState({comments},() => console.log(comments)));
    }
    render() {
        var grid=[];
        for( var i in this.state.comments){
         grid.push(
            <div className="comment-box">
            <div className="comment-info">
                <div className="comment-avtar">
                    <img alt="default-commenter-image" src={require("../../img/user-default.png")}/>
                </div>
                <div className="comment-details">
                    <h3>@{this.state.comments[i].cuser}</h3>
                    <div>{this.state.comments[i].cdate}</div>  
                </div>
            </div>
          <div className="comment-body">
              {this.state.comments[i].comment}
        </div>
        </div>
         );
        }
    return (
      <div className="comments">
      <h2>User Reviews</h2>
        {grid}
        <div className="add-comment">
        <h2>Add Your Own Review</h2>
        <form onSubmit={this.handleSubmit}>
        <div className="inputs">
                <input id="uname" type="text" placeholder="Username"/>
                <input id="cemail" type="email" placeholder="Email" />
                <input id="comment" type="text" placeholder="Write Review here" />
            <input type="submit" value="Submit" />
        </div>
        </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Comment);