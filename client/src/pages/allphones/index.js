import React, { Component } from 'react';
import './style.css';
import Comment from '../../components/comment';
import { Link, withRouter} from 'react-router-dom';
class AllPhones extends Component {
  constructor(){
      super();
      this.handleDelete = this.handleDelete.bind(this);
      this.state={
          phones: []
      }
  }

  componentDidMount(){
     fetch('/api/phones/all')
     .then(res => res.json())
     .then(phones => this.setState({phones},() => console.log(phones)));
  }

  handleDelete(id){
    fetch('http://localhost:5000/api/delete/'+id, { 
      method: 'DELETE',
    }).then(function(response) {
      if(response.ok){
        return response.json();
      }else
          throw new Error ('something went wrong with your fetch');

      }).then(function(body){
        console.log(body);
      }).catch(function(error){
        console.log(error);
      });
      this.props.history.push('/');
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
                            <button onClick={() => this.handleDelete(this.state.phones[i].id)} name="delete" value={this.state.phones[i].id}>
                            Delete
                            </button>
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

export default withRouter(AllPhones);