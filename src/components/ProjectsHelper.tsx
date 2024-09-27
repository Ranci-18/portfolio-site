import React from 'react';
import '../sass/projectsHelper.sass';

interface ProjectsHelperProps {
    title: string;
    img: string;
    anchor: string;
    techStack: string[];
}

const ProjectsHelper: React.FC<ProjectsHelperProps> = ({ title, img, anchor, techStack }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <a href={anchor}><img src={img} alt={title} /></a>
            <div className="techStack">
                {
                    techStack.map((tech, idx) => (
                        <div className="tech" key={idx}>{tech}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectsHelper;