import React, {Component } from 'react';
import {TiPlusOutline } from 'react-icons/ti';

class userLast extends Component {
   
    constructor(props){
        super(props);
        this.state ={
            id: null,
            firstName: null,
            lastName: null,
            email:null
        }
      }

     
    componentDidMount(){
          fetch('http://localhost:3000/api/last/user/')
          .then(res => res.json())
          .then(data => {
              this.setState({id: data.id})
            })     
          .catch(err => console.log(err))
          console.log('Inicia', this.state.id)
      }
  
    componentDidUpdate(){
          fetch('http://localhost:3000/api/last/user/')
          .then(res => res.json())
          .then(data => {
              this.setState({id: data.id})
            })        
          .catch(err => console.log(err))
          console.log('Actualiza', this.state.id)
      }
      render (){
        console.log ('id', this.state.id)
      return (
           <>
           <div className='card'>
           <p className='icono'><TiPlusOutline/> </p>
           
           <h2 className= 'tituloC'>Último usuario registrado</h2>
            
         <ul>
            <li> 
              
                <p>{this.state.id}</p>
                <p>{this.state.firstName}</p>
                
            </li>
            
        </ul> 
              </div> 
          </> 
        )
    }
   }
  
         
  
  
  export default userLast;

