import { useState, useEffect, useRef } from "react";

const projects = [
  { name: "GameBox", src: "/GameBox.mp4" },
  { name: "HomeRun", src: "/HomeRun.mp4" },
];

export default function ProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  const changeProject = (direction) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") {
          return (prev + 1) % projects.length;
        } else {
          return (prev - 1 + projects.length) % projects.length;
        }
      });
      setFade(true);
    }, 400);
  };

  return (
    <section className="py-20 px-4 bg-hidden" id="projects">
      <h2 className="text-3xl font-semibold mb-8 text-center text-white">Projects</h2>

      <div className="max-w-screen-md mx-auto relative flex justify-center items-center">
        {/* Buton Prev */}
        <button
          aria-label="Previous project"
          onClick={() => changeProject("prev")}
          className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-gradient-to-tr from-gray-800 to-gray-600 text-white rounded-full px-3 py-2 shadow-md
            transform transition-transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400
            opacity-80 md:opacity-100"
          style={{ clipPath: "ellipse(45% 65% at 50% 50%)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-5 h-5 md:w-6 md:h-6"
            style={{ transform: "translateX(-2px)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Video */}
        <div
          className={`w-full max-w-3xl rounded-lg overflow-hidden shadow-lg border border-gray-700 bg-gray-900 transition-opacity duration-400 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ aspectRatio: "16 / 9" }}
          title={projects[currentIndex].name}
        >
          <video
            ref={videoRef}
            key={projects[currentIndex].src}
            src={projects[currentIndex].src}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Buton Next */}
        <button
          aria-label="Next project"
          onClick={() => changeProject("next")}
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-gradient-to-tr from-gray-800 to-gray-600 text-white rounded-full px-3 py-2 shadow-md
            transform transition-transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400
            opacity-80 md:opacity-100"
          style={{ clipPath: "ellipse(45% 65% at 50% 50%)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-5 h-5 md:w-6 md:h-6"
            style={{ transform: "translateX(2px)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
