'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  baseColor: string;
  alpha: number;
  targetAlpha: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 20000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          baseColor: theme === 'dark' ? '255, 255, 255' : '0, 0, 0',
          alpha: Math.random() * 0.5 + 0.2,
          targetAlpha: Math.random() * 0.5 + 0.2
        });
      }
    };

    const drawParticles = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update position with slight wave motion
        particle.x += particle.vx + Math.sin(time + i) * 0.05;
        particle.y += particle.vy + Math.cos(time + i) * 0.05;

        // Smooth alpha transition
        particle.alpha += (particle.targetAlpha - particle.alpha) * 0.02;
        if (Math.abs(particle.alpha - particle.targetAlpha) < 0.001) {
          particle.targetAlpha = Math.random() * 0.5 + 0.2;
        }

        // Bounce off edges with damping
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8;
          particle.x = particle.x < 0 ? 0 : canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8;
          particle.y = particle.y < 0 ? 0 : canvas.height;
        }

        // Draw particle with dynamic opacity
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.baseColor}, ${particle.alpha})`;
        ctx.fill();

        // Connect particles within range with gradient lines
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              otherParticle.x, otherParticle.y
            );
            const alpha = (1 - distance / 120) * 0.15;
            gradient.addColorStop(0, `rgba(${particle.baseColor}, ${alpha})`);
            gradient.addColorStop(1, `rgba(${otherParticle.baseColor}, ${alpha})`);
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });

        // Interact with mouse
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const angle = Math.atan2(dy, dx);
          const force = (1 - distance / 120) * 2;
          particle.vx -= Math.cos(angle) * force * 0.02;
          particle.vy -= Math.sin(angle) * force * 0.02;
        }

        // Add some random movement
        particle.vx += (Math.random() - 0.5) * 0.01;
        particle.vy += (Math.random() - 0.5) * 0.01;
        
        // Damping to prevent excessive speed
        particle.vx *= 0.99;
        particle.vy *= 0.99;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    createParticles();
    drawParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image
        src="/images/tech-bg-2.jpg"
        alt="Technology Background"
        fill
        className="object-cover opacity-[0.5] dark:opacity-[0.4]"
        priority
        quality={90}
      />
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  );
} 