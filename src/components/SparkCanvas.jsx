import React, { useEffect, useRef } from 'react';

export default function SparkCanvas({ intensity = 1.0, colorTheme = 'mixed', className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || 600;
    };

    window.addEventListener('resize', handleResize);

    // Particles count based on screen width
    const particleCount = Math.floor((width > 768 ? 45 : 20) * intensity);
    const particles = [];

    const colors = colorTheme === 'weld' 
      ? ['#ff5500', '#ff9900', '#ffaa00', '#ffdd55']
      : colorTheme === 'arc'
      ? ['#00e5ff', '#38bdf8', '#00f5ff', '#93c5fd']
      : ['#00e5ff', '#ff5500', '#ff9900', '#00f5ff', '#ffffff'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -0.3 - Math.random() * 0.9,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.2,
        decay: Math.random() * 0.006 + 0.003,
        sparkle: Math.random() > 0.6,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        // Reset if off-screen or faded
        if (p.alpha <= 0 || p.y < -10 || p.x < -10 || p.x > width + 10) {
          p.x = Math.random() * width;
          p.y = height + 10;
          p.vx = (Math.random() - 0.5) * 1.2;
          p.vy = -0.4 - Math.random() * 1.2;
          p.alpha = Math.random() * 0.7 + 0.3;
          p.size = Math.random() * 2.2 + 0.8;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.sparkle ? 10 : 4;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, colorTheme]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 opacity-70 ${className}`}
    />
  );
}
