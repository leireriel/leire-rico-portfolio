import React, { Component } from 'react';
import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div className="section__container section__padding">
        <div className="section__center">
          <h3 className="section__title">Proyectos</h3>
          <p className="section__text">Estos son algunos de mis últimos proyectos:</p>
        </div>
      <div className="projects__images--container">

      </div>
      <a href="https://github.com/leireriel/" className="section__text projects__github--link">
        <p>
          <span role="img" aria-label="emoji of arrow">👉</span>
          Aquí están todos mis repositorios de Git Hub
        </p>
      </a>
      </div>
    );
  }
}

export default Projects;