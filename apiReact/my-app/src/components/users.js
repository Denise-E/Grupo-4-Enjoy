import React,{Component} from 'react';
class Users extends Component{
    constructor(props){
        super(props);
        this.state ={
         users: null,
         
        }
      }
      componentDidMount(){
        fetch (`http://localhost:3000/api/users/`)
        .then (res=>res.json())
        .then (data => {
            this.setState({users: data.users})
        })
        .catch(err => console.log(err))
      }
    
      componentDidUpdate(){
        fetch (`http://localhost:3000/api/users/`)
        .then (res=>res.json())
        .then (data => {
            this.setState({users: data.users})
        })
        .catch(err => console.log(err))
      }
  
    render (){
      console.log ('users', this.state.users)
      return (<>
      <ul>
        {this.state.users && this.state.users.map(users => (
          <li key ={users.id}>
          <h3>{users.name} </h3>
          <p>{users.email}</p>
  
          </li>
        ))}
        
      </ul>
      </>
      
  
      );
    }
  }
  
  export default Users;