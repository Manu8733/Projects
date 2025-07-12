import { useRef, useEffect } from "react";

export default function ResponsiveStarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Funcție care setează dimensiunile canvasului ținând cont de devicePixelRatio
    function setCanvasSize() {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0); // resetează transformarea
      ctx.scale(dpr, dpr);
    }

    setCanvasSize();

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = window.innerWidth + Math.random() * 200;
        this.y = Math.random() * window.innerHeight * 0.3;
        this.size = 2 + Math.random() * 2;
        this.speedX = 2 + Math.random() * 3;
        this.speedY = 1 + Math.random();
        this.opacity = 1;
      }
      update() {
        this.x -= this.speedX;
        this.y += this.speedY;
        if (this.x < -50 || this.y > window.innerHeight + 50) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`;
        ctx.shadowColor = "gold";
        ctx.shadowBlur = 10;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const stars = [];
    const maxStars = 60;
    for (let i = 0; i < maxStars; i++) {
      stars.push(new Star());
    }

    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    // Redimensionează la resize și când zoom-ul browserului se schimbă
    window.addEventListener("resize", () => {
      setCanvasSize();
      // Optional: resetează pozițiile stelelor sau nu
    });

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
        backgroundColor: "black",
        display: "block",
      }}
    />
  );
}
