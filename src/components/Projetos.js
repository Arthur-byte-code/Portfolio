import React from 'react';
import './Background.css';
import './Projetos.css'; // Importar o CSS específico para a página de projetos

// Importar imagens de exemplo
import RPA from '../assets/PythorAndC.png';
import BMI from '../assets/BMI.jpeg';
import ELECTRON from '../assets/firebase_logo_shot.png';
import FOTOFOLIO from '../assets/FotoFolio.jpeg';
import WINF from '../assets/WinF.jpeg';
import RPAFORMS from '../assets/RpaForms.jpg';
import BATCH from '../assets/Batch.jpeg';
import ARDUINO from '../assets/Arduino.jpeg'


function Projetos() {
  return (
    <div className="page">
      <h1>Projects</h1>
      <div className="projetos-content">
        {/* Exemplo de Projeto */}
        <div className="projeto-card">
          <img src={RPA} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>RPA: Python And C#</h2>
            <p>Python automation that test a c# algorithm by using the PyAutoGui library</p>
            <a href="https://github.com/Arthur-byte-code/RPA-PythonAndCsharp" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on github
            </a>
          </div>
        </div>
        <div className="projeto-card">
          <img src={BMI} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>React Native BMI Calculator</h2>
            <p>I have created a mobile Body Mass Index (BMI) calculator using React Native with Expo.</p>
            <a href="https://github.com/Arthur-byte-code/ReactNative-bmiCalculator-" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on github
            </a>
          </div>
        </div>
        <div className="projeto-card">
          <img src={ELECTRON} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>Electron And Firebase</h2>
            <p>A login and register system built with Electron.js, Node.js and Firebase</p>
            <a href="https://github.com/Arthur-byte-code/ElectronAndFirebase.git" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on github
            </a>
          </div>
        </div>
        <div className="projeto-card">
          <img src={FOTOFOLIO} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>Image viewer Electron.js</h2>
            <p>By choosing a folder full of images (select the folder by clicking on the folder icon), this application can browse through and display them.</p>
            <a href="https://github.com/Arthur-byte-code/Image-Viewer-Electron" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on github
            </a>
          </div>
        </div>
        <div className="projeto-card">
          <img src={WINF} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2>Windows Forms Calculator</h2>
            <p>This project is a simple calculator developed using the Windows Forms technology.</p>
            <a href="https://github.com/Arthur-byte-code/calculator-windows-forms" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on github
            </a>
          </div>
        </div>
        <div className="projeto-card">
          <img src={RPAFORMS} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2> Python RPA Form-Filler</h2>
            <p>Using the libraries Pandas and PyAutoGUI, this RPA can fill out web page forms.</p>
            <a href="https://github.com/Arthur-byte-code/pythonRPA-Form-Filler" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on github
            </a>
          </div>
        </div>
        <div className="projeto-card">
          <img src={BATCH} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2> BatchScript-Backup-MySQL</h2>
            <p>A file .bat that is capable of doing dumps (process to make a copy) on mysql. Also I made a script that creates a new database and imports the newest backup saved from the backup/dump script.</p>
            <a href="https://github.com/Arthur-byte-code/BatchScript-Backup-MySQL" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on github
            </a>
          </div>
        </div>
        <div className="projeto-card">
          <img src={ARDUINO} alt="Projeto" className="projeto-image" />
          <div className="projeto-details">
            <h2> Arduino-LDR-7Segment-Display</h2>
            <p>It is about
            an Arduino project that uses a Light Dependent Resistor (LDR) to measure ambient light intensity.</p>
            <a href="https://github.com/Arthur-byte-code/Arduino-LDR-7Segment-Display" target="_blank" rel="noopener noreferrer" className="projeto-button">
              See it on github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
