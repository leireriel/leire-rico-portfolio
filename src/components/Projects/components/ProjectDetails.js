import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProjectDetails.scss';

class ProjectDetails extends Component {
  render() {
    const { title, link, description, image } = this.props;
    return (
      <li className="project__wrapper">
        <a href={link} className="project__link" target="_blank" rel="noopener noreferrer">
          <div className="project__item">
            <div className="project__text">
              <h4 className="project__title">{title}</h4>
              <p className="project__description">{description}</p>
            </div>
            <div className="project__image--container">
              <img src={image} alt={title} className="project__image"/>
            </div>
          </div>
        </a>
      </li>
    );
  }
}

ProjectDetails.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
};

export default ProjectDetails;
