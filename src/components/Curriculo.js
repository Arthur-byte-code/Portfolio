import React from 'react';
import './Background.css';
import './Curriculo.css'; // Importa o CSS específico para a página de currículo
import PageUp from './PageUp';
import ParticleBackground from './ParticleBackground';



// Importa a imagem de perfil
import Hard from '../assets/ThreeLanguages.jpeg';
import Soft from '../assets/Soft.jpeg';

function Curriculo() {
  return (
    <div className="page">
      <ParticleBackground></ParticleBackground>
      <PageUp></PageUp>
      

        <ul id='menu'>
          <li>
          <a href="https://www.linkedin.com/in/arthur-henrique-65a0b8252/"  class="custom-link">LinkedIn</a>
          </li>
        </ul>

        <h1>Resume</h1>
        <div className="curriculo-content">
        

        <section className="skills-section">
        <div className="profile-image-container">
          <img src={Hard} alt="Profile" className="profile-image" />
        </div>
          <h2>Hard Skills</h2>
          <ul>
            <li>Languages whose syntax I know: C#, JavaScript, and Python;</li>
            <li>I have knowledge of Object-Oriented Programming (OOP);</li>
            <li>Databases: SQL Server, SQLite, and MySQL;</li>
            <li>Process automation using the PyAutoGui library (RPA);</li>
<li>Azure;</li>
            <li>Electron.Js;</li>
            <li>React;</li>
            <li>React Native;</li>
            <li>Windows Forms;</li>
            <li>.Net Maui;</li>
            <li>.Net Xamarin;</li>
            <li>Node.Js;</li>
            <li>Git and GitHub;</li>
            <li>Advanced English;</li>
            <li>Business IT (Word, Excel, and PowerPoint);</li>
            <li>System analysis and development from ETEC;</li>
            <li>Cisco JavaScript Essentials 1 & 2 certificates;</li>
            <li>Cisco Python Essentials 1 certificate;</li>
            <li>HTML5 and CSS3.</li>
          </ul>
        </section>
        <section className="skills-section">
        <div className="profile-image-container">
          <img src={Soft} alt="Profile" className="profile-image" />
        </div>
          <h2>Soft Skills</h2>
          <ul>
            <li>Helpful;</li>
            <li>Quick learner;</li>
            <li>Creative;</li>
            <li>Proactive;</li>
            <li>Good communication skills.</li>
          </ul>
        </section>
        <section className="skills-section">
          <h2>Contact</h2>
          <ul>
            <li>Email: arthurbytecode@gmail.com</li>
            <li>Number: +55 11 989565829 🇧🇷</li>

          </ul>
        </section>
      </div>
    </div>
  );
}

export default Curriculo;
