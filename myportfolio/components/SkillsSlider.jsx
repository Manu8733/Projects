import { useRef, useState, useEffect } from "react";

const skills = [
  "HTML",
  "CSS",
  "PHP",
  "C#",
  "Java",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js basics",
  "AutoCAD",
  "Photoshop",
  "CapCut",
  "Creative thinking",
  "Adaptability",
];

export default function SkillsSlider() {
  const containerRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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

  const onPointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches?.[0]?.pageX || 0;
    scrollLeft.current = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = "grabbing";
    containerRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX || e.touches?.[0]?.pageX || 0;
    const walk = (x - startX.current) * 2; // viteza scroll-ului
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onPointerUp = (e) => {
    isDragging.current = false;
    containerRef.current.style.cursor = "grab";
    containerRef.current.releasePointerCapture(e.pointerId);
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
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
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
