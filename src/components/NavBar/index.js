import React, { Component } from 'react';
import './NavBar.scss';

class Header extends Component {
  render() {
    return (
      <div className="nav__wrapper">
        <nav className="nav__container">
          <ol className="nav__list">
            <li className="nav__item">
              <a href="#..." className="nav__link">
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#..." className="nav__link">Quién soy</a>
            </li>
            <li className="nav__item">
              <a href="#..." className="nav__link">Proyectos</a>
            </li>
            <li className="nav__item">
              <a href="#..." className="nav__link">Contacto</a>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default Header;
