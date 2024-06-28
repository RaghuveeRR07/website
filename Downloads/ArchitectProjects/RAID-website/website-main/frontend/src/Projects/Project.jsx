import React, { useState } from "react";
import ProjectCard from "./Proj-widgets/ProjectCard2";
import Modal from './Proj-widgets/Modal';
import './Project.css';
import SmallNavbar from "./Proj-widgets/SmallNavbar";

// import ProjectCard2 from "./Proj-widgets/ProjectCard2";

const Project = () => {
  const data = [
    { id: 1, name: 'Project 01', description: 'Description for Project 01' },
    { id: 2, name: 'Project 02', description: 'Description for Project 02' },
    { id: 3, name: 'Project 03', description: 'Description for Project 03' },
    { id: 4, name: 'Project 04', description: 'Description for Project 04' },
    { id: 5, name: 'Project 05', description: 'Description for Project 05' },
    { id: 6, name: 'Project 06', description: 'Description for Project 06' },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const clickMoreInfo = (project) => {
    setModalData(project);
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
    setModalData(null);
  }

  return (
    
    <div className="projects-page">
        
        
      <div className="projects-header">
        <h1>Projects</h1>
        <div className="content">
          The AI Society of IITJ, RAID (Research and Artificial Intelligence Development), is dedicated to innovation in artificial intelligence. Our team creates groundbreaking projects, from advanced machine learning algorithms to pioneering robotics solutions.
          Through workshops, seminars, and hands-on projects, RAID fosters creativity and excellence, empowering members to make significant contributions to the field of AI.
        </div>
      </div>
      <div className="Navigation">
        <SmallNavbar />
      </div>
      <div className='card-section'>
        {data.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onMoreInfo={clickMoreInfo}
          />
        ))}
        
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} data={modalData} />
    </div>
  );
};

export default Project;
