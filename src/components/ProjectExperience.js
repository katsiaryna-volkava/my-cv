import React from 'react';
import PropTypes from 'prop-types';

function ProjectExperience({ companyName, position, timeline, projectDescription, responsibilities, projectStack, testStack }) {
    return (
        <div className="project-experience">
            <h2 className="company-name">{companyName}</h2>
            <p className="position-timeline">
                <strong>{position}</strong> ({timeline})
            </p>
            <p className="project-description">{projectDescription}</p>
            <div className="responsibilities">
                <h3>Responsibilities:</h3>
                <ul>
                    {responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>
            <div className="stacks">
                <div className="project-stack">
                    <h3>Project Stack:</h3>
                    <p>{projectStack}</p>
                </div>
                <div className="test-stack">
                    <h3>Test Stack:</h3>
                    <p>{testStack}</p>
                </div>
            </div>
        </div>
    );
}

ProjectExperience.propTypes = {
    companyName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectStack: PropTypes.string.isRequired,
    testStack: PropTypes.string.isRequired
};

export default ProjectExperience;
