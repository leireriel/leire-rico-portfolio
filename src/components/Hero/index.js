import React, { Component, Fragment } from 'react';
import './Hero.scss';

class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div className="hero-header__background"></div>
        <div className="hero__container">
          <img 
            src="images/fotoamarilla.jpg" 
            alt="Leire Rico"
            className="hero__photo"
            />
        </div>
      </Fragment>
    );
  }
}

export default Hero;