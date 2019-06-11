import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="nav__container">
          <ol className="nav__list">
            <li className="nav__item nav__item--icon">
              <a href="/html/" className="nav__link">
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li className="nav__item nav__item--text">
              <a href="#..." className="nav__link">Quién soy</a>
            </li>
            <li className="nav__item nav__item--text">
              <a href="#..." className="nav__link">Proyectos</a>
            </li>
            <li className="nav__item nav__item--text">
              <a href="#..." className="nav__link">Contacto</a>
            </li>
          </ol>
        </nav>
      </header>
    );
  }
}

export default Header;
