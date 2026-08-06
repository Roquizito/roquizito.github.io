import React, { useState, useEffect } from 'react';

export default function Projects() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/Roquizito/repos?sort=updated&per_page=6')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Falha na resposta da rede');
                }
                return response.json();
            })
            .then(data => {
                const myRepos = data.filter(repo => !repo.fork);
                setRepos(myRepos);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro na requisição da API:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section id="PROJETOS" className="projects-section hidden-section">
            <div className="text-box">
                <h2>Meus Repositórios</h2>
                
                {loading ? (
                    <div className="projects-grid">
                        <p>Carregando projetos...</p>
                    </div>
                ) : (
                    <div className="projects-grid galeria">
                        {repos.map(repo => (
                            <a 
                                href={repo.html_url} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="project" 
                                key={repo.id}
                            >
                                <h3>{repo.name}</h3>
                                <p>{repo.description || "Descrição de repositório não fornecida."}</p>
                                {repo.language && <span>/ {repo.language} /</span>}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}