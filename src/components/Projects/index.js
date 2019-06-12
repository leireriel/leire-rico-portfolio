import React, { Component } from 'react';
import ProjectDetails from './components/ProjectDetails';
import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div className="section__container section__padding">
        <div className="section__center">
          <h3 className="section__title">Proyectos</h3>
          <p className="section__text">Estos son algunos de mis últimos proyectos:</p>
        </div>
        <div className="section__images--container projects__container">
        <ProjectDetails
          title="Harry Potter"
          link="http://beta.adalab.es/f-m3-evaluacion-final-leireriel/#/"
          description="Buscador de personajes - SPA React"
        />
        <ProjectDetails 
          title="Generador de tarjetas"
          link="http://beta.adalab.es/f-m3-unicodes/#/"
          description="Código refactorizado y migrado de JS nativo a React"
        />
        <ProjectDetails 
          title="Monstruito"
          link="https://codepen.io/leireriel/pen/ZZEZNv"
          description="Creado con HTML, CSS y JS"
        />
        <ProjectDetails 
          title="Pokedex"
          link="http://beta.adalab.es/f-m3-evaluacion-intermedia-leireriel/"
          description="¡Selecciona tus favoritos! - React"
        />
        <ProjectDetails 
          title="Tipo Stack Overflow"
          link="http://beta.adalab.es/fairfax-m4-stack-nfq/#/home"
          description="Foro creado para empresa NFQ - SPA React"
        />
        <ProjectDetails 
          title="Juego"
          link="http://beta.adalab.es/f-m2-evaluacion-intermedia-leireriel/"
          description="¡Adivina el número secreto! - Vanilla JS"
        />
        </div>
      </div>
    );
  }
}

export default Projects;