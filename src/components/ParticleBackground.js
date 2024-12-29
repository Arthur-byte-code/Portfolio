import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const ParticleBackground = ({ colorParticle }) => {
  const canvasRef = useRef(null);
  const particlesArrayRef = useRef([]);
  const numberOfParticles = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const adjustCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', adjustCanvasSize);

    const init = () => {
      particlesArrayRef.current = [];
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 5 + 2;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const velocityX = (Math.random() * 0.5) - 0.25;
        const velocityY = (Math.random() * 0.5) - 0.25;
        const color = colorParticle; // Use the selected color
        particlesArrayRef.current.push(new Particle(x, y, size, color, velocityX, velocityY));
      }
    };

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
        ctx.shadowColor = this.color; // Neon effect in selected color
        ctx.fill();
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x > canvas.width || this.x < 0) {
          this.velocityX = -this.velocityX;
        }

        if (this.y > canvas.height || this.y < 0) {
          this.velocityY = -this.velocityY;
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArrayRef.current.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    adjustCanvasSize();
    animate();

    return () => {
      window.removeEventListener('resize', adjustCanvasSize);
    };
  }, [colorParticle]); // Update when `colorParticle` changes

  return <canvas ref={canvasRef} style={{ display: 'block', backgroundColor: 'black' }} />;
};

export default ParticleBackground;
