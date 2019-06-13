import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.scss';

class Header extends Component {
  render() {
    return (
      <div className="nav__wrapper">
        <nav className="nav__container">
          <ol className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <i className="fas fa-home"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/#whoIAm" className="nav__link">Quién soy</Link>
            </li>
            <li className="nav__item">
              <Link to="/#projects" className="nav__link">Proyectos</Link>
            </li>
            <li className="nav__item">
              <Link to="/#contact" className="nav__link">Contacto</Link>              
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default Header;
