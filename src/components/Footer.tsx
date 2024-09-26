import React from "react";
import Extra from "./Extra";
import '../sass/footer.sass';

const Footer: React.FC = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <p>© {new Date().getFullYear()}, Made with ❤️ by yours truly. Loosely designed using Figma.</p>
                </div>
            </footer>
            <br />
            <Extra />
        </>
        
    )
}

export default Footer;