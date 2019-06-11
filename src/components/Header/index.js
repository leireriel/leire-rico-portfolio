import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <nav className="nav__container">
        <ol className="nav__list">
          <li className="nav__item">
            <a href="/html/">
              <i className="fas fa-home nav__home"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#..." className="nav__whoIAm">Quién soy</a>
          </li>
          <li className="nav__item">
            <a href="#..." className="nav__projects">Proyectos</a>
          </li>
          <li className="nav__item">
            <a href="#..." className="nav__contact">Contacto</a>
          </li>
        </ol>
      </nav>
    );
  }
}

export default Header;
