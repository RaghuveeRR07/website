import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project, onClickCard }) => {
  return (
    <div className="card" onClick={() => onClickCard(project)}>
      <div className="card-details">
        <p className="text-title">{project.name}</p>
        <p className="text-body">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
