import { useRef, useState, useEffect } from "react";

const skills = [
  "HTML",
  "CSS",
  "PHP",
  "C#",
  "AutoCAD",
  "Photoshop",
  "CapCut",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js basics",
  "Creative thinking",
  "Adaptability",
];

export default function SkillsSlider() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (containerRef.current) {
        setIsScrollable(
          containerRef.current.scrollWidth > containerRef.current.clientWidth
        );
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => window.removeEventListener("resize", checkScrollable);
  }, []);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // viteza scroll-ului
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-20 px-4 bg-hidden" id="skills">
      <h2 className="text-3xl font-semibold mb-8 text-center text-white">
        Skills
      </h2>
      <div
        ref={containerRef}
        className={`flex gap-6 overflow-x-auto cursor-grab no-scrollbar transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/50 ${
          !isScrollable ? "justify-center" : ""
        }`}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={(e) => {
          setIsDragging(true);
          setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
          setScrollLeft(containerRef.current.scrollLeft);
        }}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={(e) => {
          if (!isDragging) return;
          const x = e.touches[0].pageX - containerRef.current.offsetLeft;
          const walk = (x - startX) * 2;
          containerRef.current.scrollLeft = scrollLeft - walk;
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex-shrink-0 px-6 py-3 rounded-lg bg-[#222] text-white text-lg font-medium shadow-md select-none whitespace-nowrap transform transition-transform duration-200 hover:scale-110 hover:bg-cyan-500 hover:shadow-cyan-600"
          >
            {skill}
          </div>
        ))}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
