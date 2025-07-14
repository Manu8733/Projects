import { useState, useEffect, useRef } from "react";

const projects = [
  { name: "GameBox", src: "/GameBox.mp4" },
  { name: "HomeRun", src: "/HomeRun.mp4" },
];

export default function ProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const videoRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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
    }, 300);
  };

  // Swipe handling for mobile
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance
    if (distance > threshold) {
      changeProject("next");
    } else if (distance < -threshold) {
      changeProject("prev");
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="py-20 px-4 bg-hidden" id="projects">
     <h2 className="text-3xl font-semibold mb-8 text-center text-white flex items-center justify-center gap-2">
  Live Demos
  <div className="relative group cursor-pointer">
    <i className="fas fa-info-circle text-cyan-500 text-xl"></i>
    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
      Source code available on my GitHub profile
    </div>
  </div>
</h2>


      
      <div className="max-w-screen-lg mx-auto relative flex flex-col items-center">
        {/* Video Container */}
        <div
          className={`w-full rounded-lg overflow-hidden shadow-lg border border-gray-700 bg-gray-900 transition-opacity duration-300 ${
            fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ aspectRatio: "16 / 9", maxWidth: "100%" }}
          title={projects[currentIndex].name}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
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

        {/* Pagination dots */}
        <div className="flex space-x-3 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (idx !== currentIndex) {
                  setFade(false);
                  setTimeout(() => {
                    setCurrentIndex(idx);
                    setFade(true);
                  }, 300);
                }
              }}
              aria-label={`Go to project ${idx + 1}`}
              className={`w-4 h-4 rounded-full transition-colors ${
                idx === currentIndex ? "bg-cyan-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Controls for desktop */}
        <div className="hidden md:flex justify-between w-full max-w-3xl mt-8">
          <button
            aria-label="Previous project"
            onClick={() => changeProject("prev")}
            className="bg-gradient-to-tr from-gray-800 to-gray-600 text-white rounded-full px-3 py-2 shadow-md
              transform transition-transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400
              opacity-80"
            style={{ clipPath: "ellipse(45% 65% at 50% 50%)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              style={{ transform: "translateX(-2px)" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            aria-label="Next project"
            onClick={() => changeProject("next")}
            className="bg-gradient-to-tr from-gray-800 to-gray-600 text-white rounded-full px-3 py-2 shadow-md
              transform transition-transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400
              opacity-80"
            style={{ clipPath: "ellipse(45% 65% at 50% 50%)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              style={{ transform: "translateX(2px)" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
