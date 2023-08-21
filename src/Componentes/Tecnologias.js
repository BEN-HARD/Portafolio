import React from 'react';
import './Tecnologias.css';
import diseño from './Layout/capa.png';
import frontend from './Layout/desarrollador-de-software.png'
export const Tecnologias = () => {
  return (
    <div className='main_tecnologias'>
        <div className='column uno'>
            <img src={diseño} id='img_diseño'/>
            <h1>Diseñador</h1>
            <p className='parrafos'>Valoro la estructura de contenido simple, los <br></br>
            patrones de diseño limpios y las<br></br>
             interacciones bien pensadas.</p>
             <p className='texto_morado'>Cosas que disfruto diseñando:</p>
             <p className='parrafos'>Web<br></br><br></br>Aplicaciones<br></br><br></br> Logotipos</p>
        </div>
        <div className='column'>
            <img src={frontend} id='img_diseño'/>
            <h1>Desarrollador Frontend</h1>
            <p className='parrafos'>Me gusta codificar cosas desde cero y<br></br>
             disfruto dando vida a las ideas en el navegador.</p>
            <p className='texto_morado'>Idiomas que manejo:</p>
            <p className='parrafos'>HTML, CSS, Javascript,Reactjs.</p>
            <p className='texto_morado'>Herramientas para el desarrollo:</p>
            <p className='parrafos'>Bootstrap<br/>
               Gimp<br/>
                
            </p>
        </div>

    </div>
  )
}
