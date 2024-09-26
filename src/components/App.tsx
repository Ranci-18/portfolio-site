import React, { useEffect } from 'react';
import '../sass/app.sass';
import Welcome from './Welcome';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Blog from './Blog';
import Footer from './Footer';

const App: React.FC = () => {
    useEffect(() => {
        const addElementWhenNeeded = () => {
            const parentContainer = document.querySelector('.welcome');
            if (parentContainer) {
                if (window.innerWidth >= 768) {
                    const sections = ['About', 'Experience', 'Projects', 'Blog'];
                    sections.forEach(section => {
                        const newElement = document.createElement('div');
                        newElement.textContent = section;
                        newElement.classList.add('highlight-element');
                        parentContainer.appendChild(newElement);
                    });
                }
            }
        }

        const handleScroll = () => {
            const sections = ['about', 'experience', 'projects', 'blog'];
            const highlightElements = document.querySelectorAll('.highlight-element');

            let currentSection = '';
            const viewportHeight = window.innerHeight;
            const halfwayPoint = viewportHeight / 2;

            sections.forEach((sectionClass) => {
                const section = document.querySelector(`.${sectionClass}`);
                if (section) {
                    const sectionTop = section.getBoundingClientRect().top;
                    

                    if (sectionTop >= 0 && sectionTop < halfwayPoint) {
                        currentSection = sectionClass;
                    }
                }
            });

            highlightElements.forEach(element => {
                const text = element.textContent?.toLowerCase().trim();
                element.classList.toggle('active', text === currentSection);
            });
        }

        // initial setup
        addElementWhenNeeded();
        handleScroll();

        // scroll and resize event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', addElementWhenNeeded);

        // cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', addElementWhenNeeded);
        };
    }, [])

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