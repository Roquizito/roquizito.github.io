import React from 'react';

export default function Hero() {
    return (
        <section className="first">
            <div className="title">
                <h1>ROQUE'S PORTFOLIO</h1>
                <p className="corner-text">
                    OI OI, MEU NOME É ROQUE, SEJA BEM VINDO AO MEU PORTIFÓLIO! AQUI VOCÊ VAI ENCONTRAR MUITO MAIS SOBRE O MEU TRABALHO E SOBRE EU COMO PROFISSIONAL EM DESENVOLVIMENTO E QUALIDADE DE SOFTWARE E TECNOLOGIA NO GERAL ^-^...
                </p>
            </div>
            
            <audio autoPlay loop>
                <source src="public/musics/Columbina's Lullaby.mp3" type="audio/mp3" />
            </audio>

            <div id="INICIO" className="content-banner hidden-section">
                <div className="content-img">
                    <img src="public/images/Roque_Perfil.png" alt="Roque's image" width="400" height="400" />
                </div>
                <h1>ROQUE CRISÓSTOMO</h1>
                <h2>Desenvolvedor Web, QA e Acadêmico de Ciência da Computação</h2>
            </div>
        </section>
    );
}