import React, { useState, useEffect } from 'react';
import './PageUp.css'; // Estilos para o botão

function PageUp() {
  const [showButton, setShowButton] = useState(false);

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Monitora o scroll para exibir ou ocultar o botão
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    showButton && (
      <button onClick={scrollToTop} className="back-to-top">
        ⬆
      </button>
    )
  );
}

export default PageUp;
