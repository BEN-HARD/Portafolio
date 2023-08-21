import React from 'react';
import './Navegador.css';
import Logo_Benja from './logoben.png'
export const Navegador = () => {
  return (
    <nav className='main_navegador'>
        <div className='container_logo'>
            <img src={Logo_Benja} id='logo_b'/>
        </div>
        <div className='container_nose'></div>
        <div className='container_hablame'>
            <a className='boton_hablame' href="mailto:moreno.benjamin.saez@gmail.com">Háblame</a>
        </div>
    </nav>
  )
}
