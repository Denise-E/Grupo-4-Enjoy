import {useState,useEffect} from 'react'


function Categories ({title}){
  
  const [categories,category] = useState([]); 
   
    useEffect(() => {
        fetch('http://localhost:3001/api/products/')
        .then(res => res.json())
        .then( results => category(results.data))        
        console.log('Inicia')
    },[])

    useEffect(() => {
        fetch('http://localhost:3001/api/products/')
        .then(res => res.json())
        .then(results => category(results.data))        
        console.log('Actualiza')
    },[])

    let gastronomia = categories.filter(categories => categories.category === "Gastronomia").length
    let aventura = categories.filter(categories => categories.category === "Aventura").length
    

    return (
       
     <section>
         <h2>Categorías</h2>
        
        <ul>
        <li>Gastronomia: {gastronomia}</li>
        <li>Aventura: {aventura}</li> 
         
              
           
       </ul> 
     </section>

        
             
       
    

    )
 }

       


export default Categories;