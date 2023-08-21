import './App.css';
import { Navegador } from './Componentes/Layout/Navegador';
import avatar from './Assets/img/avataaars.png'
import { Tecnologias } from './Componentes/Tecnologias';
import { Misproyectos } from './Componentes/Misproyectos';
import { Footer } from './Componentes/Footer';
import { Topfooter } from './Componentes/Topfooter';

function App() {
  return (
    <body className='body_app'>
      <Navegador/>
      <section className='main_texto_principal'>
        <h1>Diseñador web y Desarrollador Frontend</h1>
        <h2>Diseño y codifico cosas hermosas y sencillas.Me encanta lo que hago</h2>
        <img src={avatar} id='avatar'/>
     </section>
     <div className='contenedor_estante'>
        <img src='https://www.lidorh.com/static/media/hero-devices.ca82e97c349a897082b6268dd7f8d733.svg' id='estante'/>
      </div>
     <div className='presentacion'>
        <h1 className='soybenja'>Hola,soy Benjamin Moreno.¡Encantado de conocerte!</h1>
        <p>Comencé en Diseño y Desarrollo web hace 2 años, siempre me ha gustado el arte y la lógica,<br></br>
         trabajar como diseñador web es la combinación perfecta entre arte, lógica y tecnología.<br></br>
         Trabajé en la creación de logos, tarjetas, flayers y páginas web.<br></br>
          ¡Me encanta lo que hago!
        </p>
      {/*<h1 className='tegustaria'>¿Te gustaría crear un pagina web conmigo?</h1>
      <a className='comencemos'>Comencemos</a>*/}
      </div>
      <Tecnologias/>
      <h1 className='misproyectos'>Mis Proyectos</h1>
      <h2 className='misproyectos parraf'>Aquí hay algunos proyectos de diseño anteriores en los que he trabajado.</h2>
      <Misproyectos/>
      <Footer/>
      <Topfooter/>
    </body>
  );
}

export default App;
