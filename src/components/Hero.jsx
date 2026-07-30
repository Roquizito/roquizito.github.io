import React from 'react';

export default function Hero() {
    return (
        <section className="first">
                      
            <audio autoPlay loop>
                <source src="public/musics/Lullaby.mp3" type="audio/mp3" />
            </audio>

            <div id="INICIO" className="content-banner hidden-section">
                
                {/* Grupo da esquerda: Foto + Nome (20px) */}
                <div className="profile-group">
                    <div className="content-img">
                        <img src="public/images/Roque_Perfil.png" alt="ROQUE's image" width="300" height="300" />
                    </div>
                    <h2 className="profile-name">ROQUE CRISÓSTOMO</h2>
                </div>
                
                {/* Grupo da direita: Textos de apresentação */}
                <div className="banner-text">
                    <p className="corner-text">
                        OI OI, MEU NOME É ROQUE, SEJA BEM VINDO AO MEU PORTIFÓLIO! AQUI VOCÊ VAI ENCONTRAR MUITO MAIS SOBRE O MEU TRABALHO E SOBRE EU COMO PROFISSIONAL EM DESENVOLVIMENTO, QUALIDADE DE SOFTWARE E TECNOLOGIA DA INFORMAÇÃO NO GERAL ^-^...
                    </p>
                    <h3 className="profile-subtitle">Desenvolvedor Web, QA e Acadêmico de Ciência da Computação</h3>
                </div>

            </div>
        </section>
    );
}