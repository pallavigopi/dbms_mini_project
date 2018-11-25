import React, { Component } from 'react';
import './styles.css';
import { Redirect } from 'react-router-dom';
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
      fetch('http://localhost:5000/addcomment', {
             method: 'POST',
             datatype:'json',
             headers: {
             'Accept': 'application/json',
             "Content-Type": "application/json"
         },
             body:  JSON.stringify({
                 uname: document.getElementById('uname').value,
                 password: document.getElementById('email').value,
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
       fetch('/api/comments/'+this.props.id)
       .then(res => res.json())
       .then(comments => this.setState({comments},() => console.log(comments)));
    }
    render() {
    return (
      <div className="comments">
      <h2>User Reviews</h2>
        <div className="comment-box">
          <div><h3>@rohanajith</h3></div>
          <div>29th October 2018</div>  
          <div>Very disappointed by Samsung this time. It is nearly cost around OnePlus 6T. OnePlus 6T >>>> Galaxy A9. No better SOC. No IP Rating. 4 cameras is just hype at this price range. LG G7 Thinq, LG V30+ are other much better option.... </div>
        </div>
        <div className="comment-box">
          <div><h3>@rohanajith</h3></div>
          <div>29th October 2018</div>  
          <div>Very disappointed by Samsung this time. It is nearly cost around OnePlus 6T. OnePlus 6T >>>> Galaxy A9. No better SOC. No IP Rating. 4 cameras is just hype at this price range. LG G7 Thinq, LG V30+ are other much better option.... </div>
        </div>
        <div className="comment-box">
          <div><h3>@rohanajith</h3></div>
          <div>29th October 2018</div>  
          <div>Very disappointed by Samsung this time. It is nearly cost around OnePlus 6T. OnePlus 6T >>>> Galaxy A9. No better SOC. No IP Rating. 4 cameras is just hype at this price range. LG G7 Thinq, LG V30+ are other much better option.... </div>
        </div>
        <form onSubmit={this.handleSubmit}>
        <div className="inputs">
                <input id="uname" type="text" placeholder="Username"/>
                <input id="email" type="email" placeholder="email" />
                <input id="comment" type="text" placeholder="Write Review here" />
            <input type="submit" value="Submit" />
        </div>
        </form>
      </div>
    );
  }
}
export default withRouter(Comment);