import React, { Component } from 'react';
import reactImg from './images/react.png';
import javascriptImg from './images/javascript.png';
import html5Img from './images/html5.png';
import css3Img from './images/css3.png';
import sassImg from './images/sass.png'
import gitImg from './images/git.png';
import npmImg from './images/npm.png';

import './Developer.scss';

class Developer extends Component {
  render() {
    return (
      <div className="developer__container">
        <div className="developer__description--container">
          <h3 className="section__title">Quién soy</h3>
          <p className="section__text">
            ¡Hola! Me llamo Leire y me apasiona la programación <strong>front-end</strong>.
            A la hora de programar, soy muy curiosa y me gusta probar cosas nuevas y entender cómo funcionan.
            <strong>Me encanta aprender</strong>, ya sea haciendo pair programming o por mi cuenta, y siempre intento <strong>aportar sugerencias</strong>. 
            Tengo gran capacidad de adaptabilidad y me siento muy motivada cuando puedo trabajar en <strong>proyectos nuevos</strong>.
            Además, en mi código voy aplicando todo lo que aprendo sobre <strong>Clean Code :)</strong>
          </p>
        </div>
        <div className="developer__images--container">
          <img 
            src={reactImg} 
            alt="Logo de librería React, Javascript"
            className="developer__image"  
          />
          <img 
            src={javascriptImg} 
            alt="Logo de Javascript"
            className="developer__image"  
          />
          <img 
            src={html5Img} 
            alt="Logo de HTML"
            className="developer__image"  
          />
          <img 
            src={css3Img} 
            alt="Logo de CSS"
            className="developer__image"  
          />
          <img 
            src={sassImg} 
            alt="Logo de SASS, SCSS"
            className="developer__image"  
          />
          <img 
            src={gitImg} 
            alt="Logo de Git"
            className="developer__image"  
          />
          <img 
            src={npmImg} 
            alt="Logo de NPM"
            className="developer__image"  
          />
        </div>
      </div>
    );
  }
}

export default Developer;