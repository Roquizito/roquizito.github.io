import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Curriculum from './components/Curriculum';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden-section');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <main className="main">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Curriculum />
            <Projects />
            <Footer />
        </main>
    );
}

export default App;