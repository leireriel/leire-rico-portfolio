import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProjectDetails.scss';

class ProjectDetails extends Component {
  render() {
    const { title, link, description } = this.props;
    return (
      <li className="project__wrapper">
        <a href={link} className="project__link" target="_blank" rel="noopener noreferrer">
          <div className="project__item">
            <h4 className="project__title">{title}</h4>
            <p className="project__description">{description}</p>
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
