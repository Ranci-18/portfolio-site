import React from "react";
import '../sass/welcome.sass';
import x from '../assets/twitterx-50.png'
import linkedin from '../assets/linkedin-24.png';
import github from '../assets/icons8-github-24.png';

const Welcome: React.FC = () => {
    return (
        <div className="Welcome">
            <h1>Frank Wanyoike Ng'ang'a</h1>
            <p>Full Stack Dev | Frontend Engineer | Cybersecurity Professional</p>
            <small>I build functional web systems for different use cases.</small>
            <br />
            <br />
            <a href="https://github.com/Ranci-18"><img src={github} alt="github icon" width={30} height={30} /></a>
            <a href=""><img src={x} alt="x icon" width={30} height={30} /></a>
            <a href="https://www.linkedin.com/in/francis-wanyoike-92630b143/"><img src={linkedin} alt="linkedin icon" width={30} height={30} /></a>
            <div className="line"></div>
        </div>
    );
}

export default Welcome;