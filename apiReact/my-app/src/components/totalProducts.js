import React, {Component } from 'react';

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
          <h3> Cantidad total de productos:</h3>
          <p>{this.state.count}</p>  
            
         
          </>
          
      
          );
        }
      }
      
      export default Totalproducts;