import React, { Component, Fragment } from 'react';
import heroImg from './images/leire_square.png';
import { HashLink as Link } from 'react-router-hash-link';
import './Hero.scss';

class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div id="home" className="hero-header__background"></div>
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
          <Link smooth to="/#whoIAm" className="hero__dinamic">></Link>
        </div>
      </Fragment>
    );
  }
}

export default Hero;