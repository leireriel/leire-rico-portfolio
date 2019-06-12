import React, { Component } from 'react';
import './Developer.scss';

class Developer extends Component {
  render() {
    return (
      <div className="developer__container">
        <div className="developer__description--container">
          <h3 className="developer__description--title">Quién soy</h3>
          <p className="developer__description--text">
            ¡Hola! Me llamo Leire y me apasiona la programación <strong>front-end</strong>.
            A la hora de programar, soy muy curiosa y me gusta probar cosas nuevas y entender cómo funcionan.
            <strong>Me encanta aprender</strong>, ya sea haciendo pair programming o por mi cuenta, y siempre intento <strong>aportar sugerencias</strong>. 
            Tengo gran capacidad de adaptabilidad y me siento muy motivada cuando puedo trabajar en <strong>proyectos nuevos</strong>.
            Además, en mi código voy aplicando todo lo que aprendo sobre <strong>Clean Code :)</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default Developer;