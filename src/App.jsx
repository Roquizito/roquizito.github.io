import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Curriculum from './components/Curriculum';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasEntered, setHasEntered] = useState(false);

    // Função para quando o usuário clicar na Splash Screen
    const handleEnterSite = () => {
        setHasEntered(true);
        // Como o áudio agora existe desde o início, o play vai funcionar perfeitamente
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    // Função que controla o Play e Pause no botão flutuante
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        if (!hasEntered) return;

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
    }, [hasEntered]);

    return (
        <>
            <audio ref={audioRef} loop>
                <source src="/public/musics/Lullaby.mp3" type="audio/mp3" />
            </audio>

            {/* TELA DE ENTRADA (SPLASH SCREEN) */}
            {!hasEntered && (
                <div className="splash-screen">
                    <h1 className="splash-title">Bem-vindo ao Roque's Portfolio</h1>
                    <button className="splash-btn" onClick={handleEnterSite}>
                        Entrar no Portfólio
                    </button>
                </div>
            )}

            {/* CONTEÚDO PRINCIPAL DO SITE */}
            {hasEntered && (
                <main className="main">
                    <Header />
                    
                    <button className="music-btn" onClick={togglePlay}>
                        {isPlaying ? '⏸ Pausar Música' : '▶ Tocar Música'}
                    </button>

                    <Hero />
                    <About />
                    <Skills />
                    <Curriculum />
                    <Projects />
                    <Footer />
                </main>
            )}
        </>
    );
}

export default App;