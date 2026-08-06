import React from 'react';

export default function Hero() {
    return (
        <section className="first">
            <div id="INICIO" className="content-banner hidden-section">
                
                <div className="profile-group">
                    <div className="content-img">
                        <img src="public/images/Roque_Perfil.png" alt="ROQUE's image" width="300" height="300" />
                    </div>
                    <h2 className="profile-name">ROQUE CRISÓSTOMO</h2>
                </div>
                
                <div className="banner-text">
                    <p className="corner-text">
                        Nǐ hǎo! Sou Roque Crisóstomo, acadêmico de Ciência da Computação na UERN. Meu foco é desenvolver soluções que integram lógica de programação e experiência do usuário, aliando desenvolvimento web com Quality Assurance (QA).
                    </p>
                    <h3 className="profile-subtitle">Desenvolvedor Full Stack Júnior & Quality Assurance</h3>
                </div>

            </div>
        </section>
    );
}