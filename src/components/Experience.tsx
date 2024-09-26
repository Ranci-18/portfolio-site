import React from "react";
import ExperienceHelper from "./ExperienceHelper";

const Experience: React.FC = () => {
    return (
        <div className="experience">
            <h3>EXPERIENCE</h3>
            <ExperienceHelper 
                yearFrom="2024"
                yearTo="present"
                title="Web3 Developer @ Tesuji Systems"
                content="I build decentralized applications using the CosmosSDK blockchain technology."
                techStack={["React", "Node", "Cosmjs", "igniteCLI"]}
            />
            <ExperienceHelper 
                yearFrom="Feb 2024"
                yearTo="May 2024"
                title="Web Developer @ Real Biz Digital"
                content={
                    <>
                        <p><strong>System Analysis & Optimization:</strong> Conducted thorough system analysis, identifying
                    critical areas for improvement to enhance overall performance. <br />
                    <strong>Collaborative Development:</strong> Worked closely with the tech lead and cross-functional
                    teams to implement new code, enhance existing codebase, and deliver tailored IT
                    solutions to meet client requirements. <br />
                    <strong>Interdepartmental Collaboration:</strong> Engage directly with various departments to
                    understand client needs and offer strategic IT solutions, fostering seamless
                    integration of technology across different business functions. <br />
                    <strong>Full Stack Contribution:</strong> Leveraged full-stack development skills to create robust and
                    scalable web applications, ensuring a seamless user experience.</p>
                    </>
                }
                techStack={["React", "Node", "Javascript", "sass"]}
            />
            <ExperienceHelper 
                yearFrom="June 2023"
                yearTo="December 2023"
                title="Cybersecurity Analyst @ Sam Kihahu Consulting"
                content={
                    <>
                        <p><strong>Penetration Testing Expertise:</strong> Conducted rigorous penetration testing on diverse
                        client mobile and web applications, employing a variety of tools to identify
                        vulnerabilities and enhance security posture. <br />
                        <strong>Static Analysis:</strong> Utilize advanced static analysis techniques, including
                        extracting .apk files and employing tools like MobSF for comprehensive security
                        assessments. <br />
                        <strong>Scripting and automation</strong> Developed Python scripts automating MobSF scanning
                        processes, providing instant insights into an application's security vulnerabilities.
                        The script, available on GitHub, streamlines the identification of mid, high, and
                        extreme points of weakness without extensive report reading. <br />
                        <strong>Dynamic Analysis Mastery:</strong> Performed dynamic analysis using tools like Genymotion
                        to evaluate real-time application behavior and identify potential security threats.
                        <strong>Team collaboration:</strong> Collaborated seamlessly with relevant stakeholders to
                        communicate findings and ensure prompt remediation of identified vulnerabilities.
                        </p>
                    </>
                }
                techStack={["MobSF", "Python", "Genymotion", "SQLmap", "ZAP", "OpenDoor"]}
            />
            <div className="line"></div>
        </div>
    );
}

export default Experience;