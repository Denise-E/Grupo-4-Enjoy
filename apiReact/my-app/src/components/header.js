import React from 'react';
import logo from '../assets/img/ENJOY.png'; 
import {Link, Routes, Route} from "react-router-dom";
import Productstable from './tableProducts';


function Encabezado(){
    return (
        <header className="encabezado">
            
            <nav id="opciones" >
                <ul className="flexRow">
                    
                    
                    {/* <li><Link to ="/products">Productos</Link></li>
                    <Routes>
                        <Route path="/products" element={<Productstable />} />
                    </Routes> */}
                    <nav id="logo">
                <a href="#imagen"><img src={logo} alt="Logo ENJOY"/></a>
                    </nav>
                    {/* <li><Link to ="/">Usuarios</Link></li> */}
                    
                </ul>
            </nav>
        </header>
    )
}
export default Encabezado;