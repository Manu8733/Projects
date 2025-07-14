import { useState, useEffect } from "react";

export default function MusicPopUp() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 2500); // 2.5 secunde

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-20 right-6 bg-cyan-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-center font-semibold animate-fadeInOut max-w-xs">
  Enjoy some background music while browsing 👇
  {/* stilurile animate rămân */}
      <style jsx>{`
        @keyframes fadeInOut {
          0% {opacity: 0; transform: translateY(-10px);}
          10% {opacity: 1; transform: translateY(0);}
          90% {opacity: 1; transform: translateY(0);}
          100% {opacity: 0; transform: translateY(-10px);}
        }
        .animate-fadeInOut {
          animation: fadeInOut 2.5s ease forwards;
        }
      `}</style>
    </div>
  );
}
