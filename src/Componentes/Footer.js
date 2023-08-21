import React from 'react';
import './Footer.css';
import logo from './Layout/logoben.png';
import insta from './Layout/insta.png';
import linkedin from './Layout/linkedin.png';
import logo_react from './Layout/reactlogo.png'

export const Footer = () => {
  return (
    <footer className='main_footer'>
        <div className='contenedor_elementos'>
            <img src={logo} id='logo'/>
            <h1>Viviendo, aprendiendo y <br></br>
             subiendo de nivel un día a la vez.</h1>
            <div>
                <a href='https://www.instagram.com/benja_moreno.s/'>
                    <img src={insta} id='insta'/>
                </a>
                <a href='https://www.linkedin.com/in/benjam%C3%ADn-moreno-s%C3%A1ez-frontenddeveloper/'>
                    <img src={linkedin} id='face'/>
                </a>
            </div>
            <div className='container_react'>
                <font>
                    Codificada por mi&nbsp;&nbsp;
                    <img src={logo} id='logo_acompañante'/>
                </font>
                <p>
                    Hecha con
                    <a>
                        <img src={logo_react} id='logo_react'/>
                    </a>
                </p>
            </div>
        </div>
    </footer>
  )
}
