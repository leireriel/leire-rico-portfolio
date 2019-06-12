import React, { Component } from 'react';
import './DeveloperLogo.scss';

class DeveloperLogo extends Component {
  render() {
    const { link, description } = this.props;
    return (
      <li className="developer__item">
        <img 
          src={link} 
          alt={description}
          className="developer__image"
        />
      </li>
    );
  }
}

export default DeveloperLogo;