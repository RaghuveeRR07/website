import React from 'react';
import '../styles/ProjectCard2.css'

function ProjectCard2({project, onMoreInfo}) {
  return (
    <>
            <div className="neon bd-container">
            <div className="neon__container">
                <div className="neon__card">

                    <h1 className="neon__title">{project.name}</h1>
                    <p className="neon__description">{project.description}</p>
                    <a href="#" className="neon__button" onClick={() => onMoreInfo(project)}>More Info
                    </a>
                    </div>
                </div>
                </div>         
    </>
  )
}

export default ProjectCard2
    