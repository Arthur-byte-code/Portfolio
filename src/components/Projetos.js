import React, { useState } from 'react';
import './Background.css';
import './Projetos.css';
import PageUp from './PageUp';
import ParticleBackground from './ParticleBackground';
import { ChromePicker } from 'react-color'; // Importa o componente de seleção de cor

// Importar imagens dos projetos
import RPA from '../assets/PythorAndC.png';
import BMI from '../assets/BMI.jpeg';
import ELECTRON from '../assets/firebase_logo_shot.png';
import FOTOFOLIO from '../assets/FotoFolio.jpeg';
import WINF from '../assets/WinF.jpeg';
import RPAFORMS from '../assets/RpaForms.jpg';
import BATCH from '../assets/Batch.jpeg';
import ARDUINO from '../assets/Arduino.jpeg';

function Projetos() {
  const [color, setColor] = useState('#00f'); // Estado para armazenar a cor selecionada
  const [showPicker, setShowPicker] = useState(false); // Estado para alternar visibilidade do seletor de cor

  // Função para mudar a cor
  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div className="page" > {/* Aplica a cor de fundo selecionada */}
      <ParticleBackground />
      <PageUp />
      <h1>My Projects</h1>

      {/* Pass the selected color as a prop */}
      <ParticleBackground colorParticle={color} />
      <PageUp />
     

    {/* Botão de seleção de cor */}
    <button onClick={() => setShowPicker(!showPicker)} className="color-picker-button">
        Select Background Color
      </button>
      {showPicker && (
        <div style={{ position: 'absolute', top: '100px', left: '50px', zIndex: 10000 }}>
          <ChromePicker color={color} onChangeComplete={handleColorChange} />
        </div>
      )}
      

      <div className="projetos-content">
        
        {/* Cartões de projetos */}
        <div className="projeto-card">
          <img src={RPA} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>RPA: Python And C#</h2>
            <p>Python automation that tests a C# algorithm using the PyAutoGui library</p>
            <a href="https://github.com/Arthur-byte-code/RPA-PythonAndCsharp" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on GitHub
            </a>
          </div>
        </div>

        <div className="projeto-card">
          <img src={BMI} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>React Native BMI Calculator</h2>
            <p>I have created a mobile Body Mass Index (BMI) calculator using React Native with Expo.</p>
            <a href="https://github.com/Arthur-byte-code/ReactNative-bmiCalculator-" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on GitHub
            </a>
          </div>
        </div>

        <div className="projeto-card">
          <img src={ELECTRON} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>Electron And Firebase</h2>
            <p>A login and register system built with Electron.js, Node.js and Firebase</p>
            <a href="https://github.com/Arthur-byte-code/ElectronAndFirebase.git" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on GitHub
            </a>
          </div>
        </div>

        <div className="projeto-card">
          <img src={FOTOFOLIO} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>Image Viewer Electron.js</h2>
            <p>By choosing a folder full of images (select the folder by clicking on the folder icon), this application can browse through and display them.</p>
            <a href="https://github.com/Arthur-byte-code/Image-Viewer-Electron" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on GitHub
            </a>
          </div>
        </div>

        <div className="projeto-card">
          <img src={WINF} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>Windows Forms Calculator</h2>
            <p>This project is a simple calculator developed using the Windows Forms technology.</p>
            <a href="https://github.com/Arthur-byte-code/calculator-windows-forms" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on GitHub
            </a>
          </div>
        </div>

        <div className="projeto-card">
          <img src={RPAFORMS} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>Python RPA Form-Filler</h2>
            <p>Using the libraries Pandas and PyAutoGUI, this RPA can fill out web page forms.</p>
            <a href="https://github.com/Arthur-byte-code/pythonRPA-Form-Filler" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on GitHub
            </a>
          </div>
        </div>

        <div className="projeto-card">
          <img src={BATCH} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>BatchScript-Backup-MySQL</h2>
            <p>A .bat file that creates backups (dumps) in MySQL. Also includes a script to create a new database and import the latest backup.</p>
            <a href="https://github.com/Arthur-byte-code/BatchScript-Backup-MySQL" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on GitHub
            </a>
          </div>
        </div>

        <div className="projeto-card">
          <img src={ARDUINO} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>Arduino-LDR-7Segment-Display</h2>
            <p>An Arduino project that uses a Light Dependent Resistor (LDR) to measure ambient light intensity.</p>
            <a href="https://github.com/Arthur-byte-code/Arduino-LDR-7Segment-Display" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projetos;
