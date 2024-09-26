import React from 'react';
import '../sass/app.sass';
import Welcome from './Welcome';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Blog from './Blog';
import Footer from './Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className='welcome'>
                <Welcome />
            </div>
            <div className='content'>
                <About />
                <Experience />
                <Projects />
                <Blog  />
                <Footer />
            </div>
            
        </div>
            )
}

export default App;