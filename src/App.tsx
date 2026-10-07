import Tabs from './components/Tabs';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <a href="#main" className="skip">Skip to content</a>
            <Tabs />
            <div className="notebook">
                <main id="main">
                    <Hero />
                    <Projects />
                    <Experience />
                    <About />
                    <Skills />
                </main>
                <Contact />
            </div>
        </>
    );
}

export default App;
