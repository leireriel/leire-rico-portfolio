import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <p className="developer__description">{description}</p>
      </li>
    );
  }
}

DeveloperLogo.propTypes = {
  link: PropTypes.string,
  description: PropTypes.string,
};

export default DeveloperLogo;