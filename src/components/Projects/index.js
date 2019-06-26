import React, { Component, Fragment } from 'react';
import ProjectDetails from './components/ProjectDetails';
import harrypotterImg from './images/harrypotter.PNG';
import cardsImg from './images/cards.PNG';
import monsterImg from './images/monster.PNG';
import pokedexImg from './images/pokedex.PNG';
import stackNFQImg from './images/stackNFQ.PNG';
import gameImg from './images/game.PNG';
import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <Fragment>
        <span className="anchor" id="projects"></span>
        <div className="section__container section__padding">
          <div className="section__center">
            <h3 className="section__title">Proyectos</h3>
            <p className="section__text">Estos son algunos de mis últimos proyectos:</p>
          </div>
          <ol className="section__images--container projects__container">
            <ProjectDetails
              title="Harry Potter"
              link="http://beta.adalab.es/f-m3-evaluacion-final-leireriel/#/"
              description="Buscador de personajes - SPA React (¡con carrusel de imágenes!)"
              image={harrypotterImg}
              code="https://github.com/leireriel/harry-potter-searcher-react"
            />
            <ProjectDetails 
              title="Generador de tarjetas"
              link="http://beta.adalab.es/f-m3-unicodes/#/"
              description="Código refactorizado y migrado de JS nativo a React"
              image={cardsImg}
              code="https://github.com/Adalab/f-m3-unicodes"
            />
            <ProjectDetails 
              title="Monstruito"
              link="https://codepen.io/leireriel/pen/ZZEZNv"
              description="Creado con HTML, CSS y JS"
              image={monsterImg}
              code="https://github.com/leireriel/little-monster"
            />
            <ProjectDetails 
              title="Pokedex"
              link="http://beta.adalab.es/f-m3-evaluacion-intermedia-leireriel/"
              description="¡Selecciona tus favoritos! - React"
              image={pokedexImg}
              code="https://github.com/leireriel/pokedex"
            />
            <ProjectDetails 
              title="Tipo Stack Overflow"
              link="http://beta.adalab.es/fairfax-m4-stack-nfq/#/home"
              description="Foro creado para empresa NFQ - SPA React"
              image={stackNFQImg}
              code="https://github.com/Adalab/fairfax-m4-stack-nfq"
            />
            <ProjectDetails 
              title="Juego"
              link="http://beta.adalab.es/f-m2-evaluacion-intermedia-leireriel/"
              description="¡Adivina el número secreto! - Vanilla JS"
              image={gameImg}
              code="https://github.com/leireriel/guess-the-number-GAME-JS"
            />
          </ol>
          <p className="section__text">
              ¡También he hecho un bot de Twitter! 
              <a href="https://twitter.com/BTelescopia" className="projects__link projects__link--button" target="_blank" rel="noopener noreferrer">
                Bot
              </a>
              <a href="https://github.com/leireriel/bot-telescopia" className="projects__link projects__link--button" target="_blank" rel="noopener noreferrer">
                Repo
              </a>
          </p>
          <a href="https://github.com/leireriel/" className="section__text projects__link" target="_blank" rel="noopener noreferrer">
            <p>
              <span role="img" aria-label="emoji of arrow">👉</span>
              Aquí están todos mis repositorios de Git Hub
            </p>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Projects;