import React, { useEffect } from 'react';
import '../sass/app.sass';
import Welcome from './Welcome';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Blog from './Blog';
import Footer from './Footer';
import Contact from './Contact';

const App: React.FC = () => {
    useEffect(() => {
        const removeH3ElementForLargeScreens = () => {
            const h3Elements = document.querySelectorAll('.h3');
            if (window.matchMedia('(min-width: 768px').matches) {
                h3Elements.forEach(element => {
                    element.remove();
                });
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
                    const sectionBottom = section.getBoundingClientRect().bottom;

                    if (sectionTop < halfwayPoint && sectionBottom > 0) {
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
        removeH3ElementForLargeScreens();
        handleScroll();

        // scroll and resize event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', removeH3ElementForLargeScreens);

        // cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', removeH3ElementForLargeScreens);
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
                <Contact />
            </div>
            
        </div>
            )
}

export default App;