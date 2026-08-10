# 🚀 Portfólio Pessoal - Roque Crisóstomo

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

> Portfólio web moderno e responsivo desenvolvido com **React** e **Vite**, apresentando uma estética *Cybercore* com paleta de azuis profundos, player de áudio integrado, seções responsivas e deploy automatizado no GitHub Pages.

🌐 **Acesse o Portfólio Online:** [https://roquizito.github.io](https://roquizito.github.io)

---

## 📌 Sobre o Projeto

Este repositório contém o código-fonte do meu portfólio profissional. O projeto evoluiu de uma estrutura estática legada (HTML, CSS e JS puros) para uma arquitetura moderna e escalável em **Node.js** utilizando **React + Vite**.

### ✨ Principais Destaques:
- **Design Cybercore & Glassmorphism:** Interface estilizada com tons translúcidos de azul (`#010E36`, `#0161C1`, `#6F96CC`) e efeitos de desfoque de fundo.
- **Player de Áudio Flutuante:** Reprodução de trilha sonora ambiente (`Lullaby.mp3`) com controle de play/pause e persistência no layout.
- **Responsividade Total:** Layout adaptável para smartphones, tablets e monitores widescreen via CSS Grid e Media Queries.
- **Apresentação Profissional:** Seções detalhadas de Biografia, Habilidades Tecnológicas, Formação Acadêmica (UERN), Experiências Profissionais (Projeto FiloQuest & STI/UERN) e Certificações (OSF Digital & DIO).

---

## 🛠️ Tecnologias Utilizadas

- **Core:** [React 18](https://react.dev/), [Vite](https://vitejs.dev/)
- **Linguagens:** JavaScript (ES6+), HTML5, CSS3
- **Mídia & Fontes:** Fontes customizadas (*Uncial Antiqua*, *Orbitron*)
- **Deploy & Automação:** [`gh-pages`](https://www.npmjs.com/package/gh-pages)
- **Integração:** `@emailjs/browser` (Suporte a formulários de contato)

---

## 📂 Estrutura do Projeto

```text
roquizito.github.io/
├── public/
│   ├── fonts/         # Tipografias customizadas (UncialAntiqua, Orbitron)
│   ├── images/        # Imagens de perfil, ícones e plano de fundo
│   └── musics/        # Arquivo de áudio (Lullaby.mp3)
├── src/
│   ├── components/    # Componentes modularizados (Hero, About, Skills, Curriculum, Contact, Footer)
│   ├── App.jsx        # Componente principal e controle da Splash Screen / Player
│   ├── App.css        # Estilização global, temas e Media Queries
│   └── main.jsx       # Ponto de entrada da aplicação React
├── vite.config.js     # Configuração de rotas de build do Vite
└── package.json       # Dependências e scripts de automação
