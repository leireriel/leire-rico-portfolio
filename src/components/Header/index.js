import React, { Component, Fragment } from 'react';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <nav>
            <ol>
            <li><a href="/html/">
              <i class="fas fa-home"></i>
          </a></li>
          <li><a href="/css/">Quién soy</a></li>
          <li><a href="/js/">Proyectos</a></li>
          <li><a href="/jquery/">Contacto</a></li>
            </ol>
        </nav>
      </Fragment>
    );
  }
}

export default Header;
