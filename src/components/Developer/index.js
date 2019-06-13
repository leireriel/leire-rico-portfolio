import React, { Component, Fragment } from 'react';
import reactImg from './images/react.png';
import javascriptImg from './images/javascript.png';
import html5Img from './images/html5.png';
import css3Img from './images/css3.png';
import sassImg from './images/sass.png'
import gitImg from './images/git.png';
import npmImg from './images/npm.png';
import DeveloperLogo from './components/DeveloperLogo';
import './Developer.scss';

class Developer extends Component {
  render() {
    return (
      <Fragment>
        <span className="anchor" id="whoIAm"></span>
        <div className="section__container section__padding">
          <div className="section__center">
            <h3 className="section__title">Quién soy</h3>
            <p className="section__text">
              ¡Hola! Me llamo Leire y me apasiona la programación <strong>front-end</strong>.
              A la hora de programar, soy muy curiosa y me gusta probar cosas nuevas y entender cómo funcionan.
              <br/>
              <strong>Me encanta aprender</strong>, ya sea haciendo pair programming o por mi cuenta, y siempre intento <strong>aportar sugerencias</strong>. 
              Tengo gran capacidad de adaptabilidad y me siento muy motivada cuando puedo trabajar en <strong>proyectos nuevos</strong>.
              Además, en mi código voy aplicando todo lo que aprendo sobre <strong>Clean Code :)</strong>
            </p>
            <h4 className="section__text">Lenguajes y tecnologías que uso por ahora:</h4>
          </div>
          <ol className="section__images--container developer__container">
            <DeveloperLogo link={reactImg} description="Librería React, Javascript" />
            <DeveloperLogo link={javascriptImg} description="Javascript" />
            <DeveloperLogo link={html5Img} description="HTML" />
            <DeveloperLogo link={css3Img} description="CSS" />
            <DeveloperLogo link={sassImg} description="SASS, SCSS" />
            <DeveloperLogo link={gitImg} description="Git" />
            <DeveloperLogo link={npmImg} description="NPM gestor de paquetes" />
          </ol>
        </div>
      </Fragment>
    );
  }
}

export default Developer;
