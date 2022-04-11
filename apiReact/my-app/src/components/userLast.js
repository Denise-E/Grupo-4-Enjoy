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
              this.setState({
                id: data.id,
                firstName: data.firstName,
                lastName: data.lastName,
                email:data.email
              })
            })     
          .catch(err => console.log(err))
          console.log('Inicia', this.state.id)
      }
  
    componentDidUpdate(){
          fetch('http://localhost:3000/api/last/user/')
          .then(res => res.json())
          .then(data => {
              this.setState({
                id: data.id,
                firstName: data.firstName,
                lastName: data.lastName,
                email:data.email
              })
            })        
          .catch(err => console.log(err))
          console.log('Actualiza', this.state.id)
      }
      render (){
        console.log ('id', this.state.id)
      return (
           <>
           <div className='cardLast'>
           <p className='icono'><TiPlusOutline/> </p>
           
           <h2 className= 'tituloD'>Último usuario registrado</h2>
            
         <ul>
            <li> 
              
                <p className="marg">ID: {this.state.id}</p>
                <p className="marg">Nombre: {this.state.firstName}</p>
                <p className="marg">Apellido: {this.state.lastName}</p>
                <p className="marg">Correo electrónico: {this.state.email}</p>
                
            </li>
            
        </ul> 
              </div> 
          </> 
        )
    }
   }
  
         
  
  
  export default userLast;

