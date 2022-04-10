import React, {Component } from 'react';
import { FaStoreAlt } from 'react-icons/fa';

class Totalproducts extends Component {
   
        constructor(props){
            super(props);
            this.state ={
            count: null,
             
            }
          }
          componentDidMount(){
            fetch (`http://localhost:3000/api/products/`)
            .then (res=>res.json())
            .then (data => {
                this.setState({count: data.count})
            })
            .catch(err => console.log(err))
          }
        
          componentDidUpdate(){
            fetch (`http://localhost:3000/api/products/`)
            .then (res=>res.json())
            .then (data => {
                this.setState({count: data.count})
            })
            .catch(err => console.log(err))
          }
      
        render (){
          console.log ('users', this.state.count)
          return (<>
          <div className='card'>
          <p className='icono'><FaStoreAlt /> </p>
          <h2 className= 'tituloC'> Cantidad total de productos</h2>
          <p className='numero'>{this.state.count}</p> 
          
          </div>
          
          </>
          
      
          );
        }
      }
      
      export default Totalproducts;