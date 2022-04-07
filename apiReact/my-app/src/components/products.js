import React,{Component} from 'react';
class Products extends Component{
    constructor(props){
      super(props);
      this.state ={
       products: null,
       
      }
    }
    componentDidMount(){
      fetch (`http://localhost:3000/api/products/`)
      .then (res=>res.json())
      .then (data => {
          this.setState({products: data.products})
      })
      .catch(err => console.log(err))
    }
  
    componentDidUpdate(){
      fetch (`http://localhost:3000/api/products/`)
      .then (res=>res.json())
      .then (data => {
          this.setState({products: data.products})
      })
      .catch(err => console.log(err))
    }
  
    render (){
      console.log ('products', this.state.products)
      return (<>
      <ul>
        {this.state.products && this.state.products.map(products => (
          <li key ={products.id}>
            <h3>{products.name} </h3>
            <p>{products.description} </p>
            <p>{products.category} </p>
            
  
          </li>
        ))}
        
      </ul>
      </>
      
  
      );
    }
  }
  
  export default Products;