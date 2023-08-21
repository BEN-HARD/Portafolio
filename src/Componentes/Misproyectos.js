import React from 'react';
import './Misproyectos.css';
import logo_revista from './Layout/pexels-pixabay-260922 (1).jpg';
import GrowExample from './Spinner';
export const Misproyectos = () => {

  const hasEntrado =(e)=>{
    alert("hola")
    }
  return (
    <div className='grid_container'>
      <div className='contenedor_puntitosuno'>
        <GrowExample/>
        <GrowExample/>
        <GrowExample/>
      </div>
      <figure>
        <img src={logo_revista} id='revista_img'/>
        <figcaption className='parrafo_pagina'>
          <p className='parrafo_revista'>Revista destinada al turismo,divulgación de actividades presentes en la zona sur de Chile</p>
          <a href='https://thriving-kleicha-7f784a.netlify.app/restaurant'>Visita la web &gt;</a>
        </figcaption>
      </figure>
      <div className='contenedor_puntitos'>
        <GrowExample/>
        <GrowExample/>
        <GrowExample/>
      </div>

    </div>
  )
}
