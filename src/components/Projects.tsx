import React from "react";
import chess from '../assets/ranci-chess.png';
import todo from '../assets/todo.png';
import joke from '../assets/joke Generator.png';
import ip from '../assets/IP Finder.png';
import cart from '../assets/Shopping Cart.png';
import card from '../assets/Profile Card.png';
import ProjectsHelper from "./ProjectsHelper";

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h3 className="h3">PROJECTS</h3>
            <ProjectsHelper 
                title="Ranci-chess App" 
                img={chess}
                anchor="https://github.com/Ranci-18/ranci-chess" 
                techStack={["React", "Javascript", "Chessboard.js", "chessjs", "css"]} 
            />
            <ProjectsHelper 
                title="Simple todo App" 
                img={todo} 
                anchor="https://todo-app-woad-one-64.vercel.app/"
                techStack={["React", "Javascript", "Redux", "firebase", "css"]} 
            />
            <ProjectsHelper 
                title="Joke Generator" 
                img={joke} 
                anchor="https://joke-generator-taupe-ten.vercel.app/"
                techStack={["React", "Typescript", "API", "Sass"]} 
            />
            <ProjectsHelper 
                title="IP Address Finder" 
                img={ip} 
                anchor="https://ip-address-finder-weld.vercel.app/"
                techStack={["React", "Typescript", "API", "Sass"]} 
            />
            <ProjectsHelper 
                title="Shopping Cart" 
                img={cart} 
                anchor="https://shopping-cart-swart-one.vercel.app/"
                techStack={["React", "Typescript", "Sass"]} 
            />
                <ProjectsHelper 
                title="Profile Card" 
                img={card} 
                anchor="https://profile-card-ten-mauve.vercel.app/"
                techStack={["React", "Typescript", "Sass"]} 
            />
            <br />
            <div className="line"></div>
        </div>
    )
}

export default Projects;