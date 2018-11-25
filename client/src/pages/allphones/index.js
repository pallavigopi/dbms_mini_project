import React, { Component } from 'react';
import './style.css';
import Comment from '../../components/comment';
import {Link} from 'react-router-dom';
export default class Allphones extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            phones: []
        }
    }

    onClick(){

      alert("Are You Sure You want to delete this item");
      

    }

    componentDidMount(){
       fetch('/api/phones/all')
       .then(res => res.json())
       .then(phones => this.setState({phones},() => console.log(phones)));
    }

    handleSubmit(event){

      event.preventDefault();
      fetch('http://localhost:5000/addphones/', { 
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          "Content-Type":"application/json"
        },
        body:JSON.stringify({

          
          
          
         



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
            grid.push(<table>
                       
                       <tr>
                         <td>{this.state.phones[i].brand}</td>
                         <td>{this.state.phones[i].name}</td>
                         <td>
                           
                             <Link to = {'/editform/'+this.state.phones[i].id}>Edit  </Link>
                           <form  onSubmit={this.handleSubmit}>
                              <input type="submit" name="delete" value='Delete' onClick={this.onClick} />

                           </form>
                         </td>
                       </tr>   
                      </table>);

    return (
        <div className="allphones">
          <h1>List of phones </h1>
          <table>
           <tr>
             <th>Name</th>
             <th>Brand</th>
             <th>Action</th>
           </tr>
          </table>
          
            {grid}
        </div>
    );
  }
}

