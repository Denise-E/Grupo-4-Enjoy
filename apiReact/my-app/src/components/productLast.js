import React, {Component } from 'react';
import {TiPlus } from 'react-icons/ti';
class Productlast extends Component {
   
  constructor(props){
    super(props);
    this.state ={
        id: null,
        name: null,
        title: null,
        description: null,
        resume: null,
        location: null,
        persons: null,
        price: null,
        fees: null,
        starsAvg: null,
        category: null,
        imageURL: null,
    }
  }

 
componentDidMount(){
      fetch('http://localhost:3000/api/last/product/')
      .then(res => res.json())
      .then(data => {
          this.setState({
            id: data.id,
            name: data.name,
            title: data.title,
            description: data.description,
            resume: data.resume,
            location: data.location,
            persons: data.persons,
            price: data.price,
            fees: data.fees,
            starsAvg: data.startsAvg,
            category: data.category,
            imageURL: data.imageUrl,
          })
        })     
      .catch(err => console.log(err))
      console.log('Inicia', this.state.id)
  }

componentDidUpdate(){
      fetch('http://localhost:3000/api/last/product/')
      .then(res => res.json())
      .then(data => {
          this.setState({
            id: data.id,
            name: data.name,
            title: data.title,
            description: data.description,
            resume: data.resume,
            location: data.location,
            persons: data.persons,
            price: data.price,
            fees: data.fees,
            starsAvg: data.startsAvg,
            category: data.category,
            imageURL: data.imageUrl,
          })
        })        
      .catch(err => console.log(err))
      console.log('Actualiza', this.state.id)
  }
  render (){
    console.log ('id', this.state.id)
  return (
       <>
       <div className='card'>
       <p className='icono'><TiPlus/> </p>    
       <h2 className= 'tituloC'>Último producto cargado</h2>
        
     <ul>
        <li> 
            <p>{this.state.id}</p>
            <p>{this.state.name}</p>
            <p>{this.state.title}</p>
            <p>{this.state.description}</p>
            <p>{this.state.resume}</p>
            <p>{this.state.location}</p>
            <p>{this.state.persons}</p>
            <p>{this.state.price}</p>
            <p>{this.state.fees}</p>
            <p>{this.state.startsAvg}</p>
            <p>{this.state.category}</p>
            <p>{this.state.imageURL}</p>
            
            
        </li>
        
    </ul> 
          </div> 
      </> 
    )
}
      }
      
      export default Productlast;