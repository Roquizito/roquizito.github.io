import React from 'react';

export default function Skills() {
    return (
        <section id="HABILIDADES" className="hidden-section">
            <div className="text-box">
                <h2>Habilidades</h2>
                <div className="skill-group">
                    <h3>Linguagens de Programação</h3>
                    <p>Java (POO), Python, JavaScript (ES6+) e SQL</p>
                </div>
                <div className="skill-group">
                    <h3>Tecnologias & Frameworks</h3>
                    <p>HTML5, CSS3, Node.js, Git e GitHub</p>
                </div>
                <div className="skill-group">
                    <h3>Design, Qualidade & Infraestrutura</h3>
                    <p>Quality Assurance (QA), Testes de Interface, UI/UX Design (Figma), Inteligência Artificial, Redes e GSTI</p>
                </div>
                <div className="skill-group">
                    <h3>Idiomas</h3>
                    <p>Português (Nativo), Inglês (Profissional), Espanhol (Intermediário) e Chinês (Iniciante)</p>
                </div>
            </div>
        </section>
    );
}