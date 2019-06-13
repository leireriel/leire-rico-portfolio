import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.scss';

class Header extends Component {
  render() {
    return (
      <div className="nav__wrapper">
        <nav className="nav__container">
          <ol className="nav__list">
            <Link smooth to="/#home" className="nav__link">
              <li className="nav__item">
                <i className="fas fa-home"></i>
              </li>
            </Link>
            <Link smooth to="/#whoIAm" className="nav__link">
              <li className="nav__item">
                Quién soy
              </li>
            </Link>
            <Link smooth to="/#projects" className="nav__link">
              <li className="nav__item">
                Proyectos
              </li>
            </Link>
            <Link smooth to="/#contact" className="nav__link">
              <li className="nav__item">
                Contacto
              </li>
            </Link>              
          </ol>
        </nav>
      </div>
    );
  }
}

export default Header;
