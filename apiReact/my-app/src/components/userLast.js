import React, {Component } from 'react';

class Userlast extends Component {
   
        constructor(props){
            super(props);
            this.state ={
            user: null,
             
            }
          }
          componentDidMount(){
            fetch (`http://localhost:3000/last/user`)
            .then (res=>res.json())
            .then (data => {
                this.setState({user: data.last})
            })
            .catch(err => console.log(err))
          }
        
          componentDidUpdate(){
            fetch (`http://localhost:3000/api/last/user`)
            .then (res=>res.json())
            .then (data => {
                this.setState({user: data.last})
            })
            .catch(err => console.log(err))
          }
      
        render (){
          console.log ('user', this.state.user)
          return (<>
          <h3> Último usuario registrado:</h3>
          <p>{this.state.id}</p>  
            
         
          </>
          
      
          );
        }
      }
      
      export default Userlast;
         
