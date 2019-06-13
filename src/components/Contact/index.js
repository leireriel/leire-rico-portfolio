import React, { Component } from 'react';
import './Contact.scss';

class Footer extends Component {
  render() {
    return (
      <div id="contact" className="contact__wrapper section__padding">
        <h3 className="section__title">Contacto</h3>
        <p className="section__text contact__description">¡Visítame en mis redes!</p>
        <nav className="contact__container">
          <ol className="contact__list">
            <li className="contact__item">
              <a href="mailto:leirericop@gmail.com" target="_blank" rel="noopener noreferrer" className="contact__link">
                <i className="fas fa-envelope contact__link__icon"></i>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://www.linkedin.com/in/leirerico/" target="_blank" rel="noopener noreferrer" className="contact__link">
                <i className="fab fa-linkedin-in contact__link__icon"></i>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://twitter.com/leireriel1" target="_blank" rel="noopener noreferrer" className="contact__link">
                <i className="fab fa-twitter contact__link__icon"></i>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://github.com/leireriel/" target="_blank" rel="noopener noreferrer" className="contact__link">
                <i className="fab fa-github contact__link__icon"></i>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://codepen.io/leireriel/" target="_blank" rel="noopener noreferrer" className="contact__link">
                <i className="fab fa-codepen contact__link__icon"></i>
              </a>
            </li>
          </ol>
        </nav>
        <p className="section__text contact__thanks"><small>Gracias ❤</small></p>
      </div>
    );
  }
}

export default Footer;