import { useState, useEffect, useRef } from "react";

const volunteerWork = [
  {
    title: "Techsylvania",
    description:
      "I participated in organizing workshops and educational activities for youth. I developed teamwork and event coordination skills.",
    icon: "techsylvania.png",
  },
  {
    title: "Erasmus+",
    description:
      "I took part in the SHORT-TERM EXCHANGE within the Erasmus+ Project 2019 Anti-bullying campaign in Bari, Italy (09.02.2020 - 14.02.2020). I enhanced my intercultural communication and project management abilities.",
    icon: "erasmus.png",
  },
  {
    title: "eTwinning",
    description:
      "I created and implemented online educational projects collaborating with teachers and students across Europe. I learned to use digital platforms for remote education and teamwork.",
    icon: "etwinning.png",
  },
  {
    title: "Untold",
    description:
      "I contributed to organizing one of Romania's biggest music festivals, supporting logistics and attendee assistance. I improved my ability to work under pressure and manage dynamic situations.",
    icon: "untold.png",
  },
];

export default function VolunteerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const changeSlide = (direction) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") {
          return (prev + 1) % volunteerWork.length;
        } else {
          return (prev - 1 + volunteerWork.length) % volunteerWork.length;
        }
      });
      setFade(true);
    }, 300);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (distance > threshold) {
      changeSlide("next");
    } else if (distance < -threshold) {
      changeSlide("prev");
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="py-20 px-4 bg-hidden" id="volunteer">
      <h2 className="text-3xl font-semibold mb-8 text-center text-white">
        Volunteering
      </h2>

      <div className="max-w-screen-lg mx-auto relative flex flex-col items-center">
        {/* Card */}
        <div
          className={`w-full rounded-lg overflow-hidden shadow-lg border border-gray-700 bg-gray-900 p-6 transition-opacity duration-300 ${
            fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
  src={volunteerWork[currentIndex].icon}
  alt={volunteerWork[currentIndex].title}
  className={`mx-auto mb-4 object-contain ${
    volunteerWork[currentIndex].title === "Erasmus+"
      ? "w-32 h-32"
      : "w-20 h-20"
  }`}
/>

          <h3 className="text-xl font-bold text-[#00ADB5] mb-2 text-center">
            {volunteerWork[currentIndex].title}
          </h3>
          <p className="text-white text-center">
            {volunteerWork[currentIndex].description}
          </p>
        </div>

        {/* Pagination dots */}
        <div className="flex space-x-3 mt-6">
          {volunteerWork.map((_, idx) => (
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
              aria-label={`Go to volunteer work ${idx + 1}`}
              className={`w-4 h-4 rounded-full transition-colors ${
                idx === currentIndex ? "bg-cyan-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Controls for desktop */}
        <div className="hidden md:flex justify-between w-full max-w-3xl mt-8">
          <button
            aria-label="Previous volunteer work"
            onClick={() => changeSlide("prev")}
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
            aria-label="Next volunteer work"
            onClick={() => changeSlide("next")}
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
