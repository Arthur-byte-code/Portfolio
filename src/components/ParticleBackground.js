import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css'; // Importa o CSS do ParticleBackground

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const particlesArrayRef = useRef([]); // Use useRef para preservar o array de partículas
    const numberOfParticles = 100;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Função para ajustar o tamanho do canvas e inicializar as partículas
        const adjustCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        // Ajusta o tamanho do canvas quando a janela é redimensionada
        window.addEventListener('resize', adjustCanvasSize);

        // Inicializa partículas e ajusta o canvas
        const init = () => {
            particlesArrayRef.current = []; // Limpa o array de partículas
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 5 + 2;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const velocityX = (Math.random() * 0.5) - 0.25;
                const velocityY = (Math.random() * 0.5) - 0.25;
                const color = 'rgba(0, 170, 255, 1)'; // Cor neon azul
                particlesArrayRef.current.push(new Particle(x, y, size, color, velocityX, velocityY));
            }
        };

        // Objeto Partícula
        class Particle {
            constructor(x, y, size, color, velocityX, velocityY) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.velocityX = velocityX;
                this.velocityY = velocityY;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 20;
                ctx.shadowColor = '#00f'; // Efeito neon azul
                ctx.fill();
            }

            update() {
                this.x += this.velocityX;
                this.y += this.velocityY;

                // Reposiciona partículas que saem da tela
                if (this.x > canvas.width || this.x < 0) {
                    this.velocityX = -this.velocityX;
                }

                if (this.y > canvas.height || this.y < 0) {
                    this.velocityY = -this.velocityY;
                }
            }
        }

        // Anima partículas
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArrayRef.current.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        };

        // Chama a função para ajustar o tamanho do canvas ao carregar a página
        adjustCanvasSize();
        animate();

        // Limpa o event listener ao desmontar
        return () => {
            window.removeEventListener('resize', adjustCanvasSize);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ display: 'block', backgroundColor: 'black' }} />;
};

export default ParticleBackground;
