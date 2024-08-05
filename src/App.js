import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Projetos from './components/Projetos';
import Curriculo from './components/Curriculo';
import './App.css';

// Importar imagens
import projetosIcon from './assets/projetos.png';
import curriculoIcon from './assets/curriculo.png';
import githubIcon from './assets/github.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <div className="logo">Arthur Byte Code</div>
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/projetos">
                <img src={projetosIcon} alt="Projetos" />
              </Link>
              Projects 
            </li>
            <li>
              <Link to="/curriculo">
                <img src={curriculoIcon} alt="Currículo" />
              </Link>
              Résumé
            </li>
            <li>
              <a href="https://github.com/Arthur-byte-code" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              GitHub
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/" element={<Projetos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
