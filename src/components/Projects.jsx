import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Meus Repositórios</h2>
      <div className="projects-grid">
        {/* Este espaço será alimentado pela API do GitHub posteriormente */}
        <p>Carregando projetos...</p>
      </div>
    </section>
  );
}

export default Projects;