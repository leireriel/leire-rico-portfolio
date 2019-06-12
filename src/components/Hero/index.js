import React, { Component, Fragment } from 'react';
import heroImg from './images/leire_square.png';
import './Hero.scss';

class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div className="hero-header__background"></div>
        <div className="hero__container">
          <img 
            src={heroImg}
            alt="Leire Rico"
            className="hero__photo"
          />
          <div className="hero__text">
            <h1 className="hero__text--name">Leire Rico</h1>
            <h2 className="hero__text--job">Front-end developer</h2>
          </div>
        </div>
        <div className="hero__dinamic--wrapper">
          <div className="hero__dinamic">:)</div>
        </div>
      </Fragment>
    );
  }
}

export default Hero;