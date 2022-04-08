import React from 'react';
import logo from '../assets/img/ENJOY.png'; 

function Encabezado(){
    return (
        <header className="encabezado">
            
            <nav id="opciones" class="flexRow">
                <ul>
                    
                    
                    <li><a href="#productos">Productos</a></li>
                    <nav id="logo">
                <a href="#imagen"><img src={logo} alt="Logo ENJOY"/></a>
                    </nav>
                    <li><a href="#usuarios">Usarios</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Encabezado;