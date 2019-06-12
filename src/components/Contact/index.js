import React, { Component, Fragment } from 'react';
import './Contact.scss';

class Footer extends Component {
  render() {
    return (
      <div className="contact__wrapper">
        <h3 className="section__title">Contacto</h3>
        <nav className="contact__container">
          <ol className="contact__list">
            <li className="contact__item">
              <a href="mailto:leirericop@gmail.com" className="contact__link">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://www.linkedin.com/in/leirerico/" className="contact__link">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://twitter.com/leireriel1" className="contact__link">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://github.com/leireriel/" className="contact__link">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://codepen.io/leireriel/" className="contact__link">
                <i className="fab fa-codepen"></i>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default Footer;