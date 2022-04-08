import React, {Component } from 'react';

class Categories extends Component {
   
        constructor(props){
            super(props);
            this.state ={
              countByCategory: null,
             
            }
          }
          componentDidMount(){
            fetch (`http://localhost:3000/api/products/`)
            .then (res=>res.json())
            .then (data => {
                this.setState({countByCategory: data.countByCategory})
            })
            .catch(err => console.log(err))
          }
        
          componentDidUpdate(){
            fetch (`http://localhost:3000/api/products/`)
            .then (res=>res.json())
            .then (data => {
                this.setState({countByCategory: data.countByCategory})
            })
            .catch(err => console.log(err))
          }
      
          render (){
            console.log ('countByCategory', this.state.countByCategory)
            return (<>
            <ul>
            {this.state.countByCategory && this.state.countByCategory.map(countByCategory => (
        <li >
        <h3>{countByCategory.category} </h3>
        <p>{countByCategory.count}</p>
                  
        
                </li>
              ))}
              
            </ul>
            </>
            
        
            );
          }
        }
      
      
      export default Categories;

      