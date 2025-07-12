import { useRef, useEffect } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    function setCanvasSize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // resetează transformările
      ctx.scale(devicePixelRatio, devicePixelRatio); // scalează pentru retina
    }

    setCanvasSize();

    const starColors = [
      "#ffffff", // alb
      "#ffd700", // auriu
      "#87cefa", // albastru deschis
      "#ffa07a", // roșiatic
      "#f0e68c", // galben pal
    ];

    class StaticStar {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.color = starColors[Math.floor(Math.random() * starColors.length)];
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.length = 30 + Math.random() * 20;
        this.speed = 8 + Math.random() * 4;
        this.angle = Math.PI / 4;
        this.alpha = 1;
      }
      update() {
        this.x -= this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);

        if (this.x < -this.length || this.y > height + this.length) {
          this.reset();
        }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = "gold";
        ctx.shadowColor = "gold";
        ctx.shadowBlur = 10;
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x + this.length * -Math.cos(this.angle),
          this.y + this.length * Math.sin(this.angle)
        );
        ctx.stroke();

        ctx.restore();
      }
    }

    let staticStars = [];
    let shootingStars = [];

    function initStars() {
      staticStars = [];
      shootingStars = [];
      for (let i = 0; i < 120; i++) {
        staticStars.push(new StaticStar());
      }
      for (let i = 0; i < 10; i++) {
        shootingStars.push(new ShootingStar());
      }
    }

    initStars();

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, width, height);

      staticStars.forEach((star) => star.draw());
      shootingStars.forEach((star) => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Update canvas size și reinitializează stelele la redimensionare/orientare
    function handleResize() {
      setCanvasSize();
      initStars();
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
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
        zIndex: 1,
        backgroundColor: "transparent",
        display: "block",
      }}
    />
  );
}
