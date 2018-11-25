import React, { Component } from 'react';
import './style.css';
export default class EditForm extends Component {
    constructor(){

      super();
      this.state={        // state is where data is obtained from.

        phones:[]
      }
    }

    componentDidMount(){

      fetch('/api/phones/'+this.props.match.params.id)
      .then(res => res.json())
      .then(phones => this.setState({phones},() => console.log(phones)));
    }

    handleSubmit(event){

      event.preventDefault();
      fetch('http://localhost:5000/addphones/', { 
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          "Content-Type":"application/json"
        },
        body:JSON.stringify({

          
          brand:document.getElementById('brand').value,
          name:document.getElementById('name').value,
        


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

      var grid=[];
        for(var i in this.state.phones)
            grid.push(<div><h2>Brand:<input id="brand" value = {this.state.phones[i].brand}/><br/></h2>
                           
                           <input type = "submit" value="Submit"/>

                      </div>);
    return (
      <div className="edit-form">
        <h1>Details</h1>
        {grid}
      </div>
    );
  }
}
