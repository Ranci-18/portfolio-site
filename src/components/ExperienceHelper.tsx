import React from "react";
import '../sass/experience.sass';

interface ExperienceHelperProps {
    yearFrom: string;
    yearTo: string;
    title: string;
    content: string | React.ReactNode;
    techStack: string[] | undefined;
}

const ExperienceHelper: React.FC<ExperienceHelperProps> = ({ yearFrom, yearTo, title, content, techStack }) => {
    return (
        <>
            <div>
                <small>{yearFrom} - {yearTo}</small>
                <h3>{title}</h3>
                <p>{content}</p>
                <div className="techStack">
                    {
                    techStack && techStack.map((tech, idx) => (
                        <div className="tech" key={idx}>{tech}</div>
                    ))
                    }
                </div>
            </div>
            <br />
        </>
        
    )
}

export default ExperienceHelper;