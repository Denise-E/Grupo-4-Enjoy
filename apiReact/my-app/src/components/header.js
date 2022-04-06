import React from 'react';
import logo from '../assets/img/ENJOY.png'; 

function Encabezado(){
    return (
        <header className="encabezado">
            <nav id="logo">
                <a href="#imagen"><img src={logo} alt="Logo ENJOY"/></a>
            </nav>
            <nav id="opciones">
                <ul>
                    <li><a href="#Inicio">Inicio</a></li>
                    <li><a href="#Nosotras">Nosotras</a></li>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#contacto">Usarios</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Encabezado;