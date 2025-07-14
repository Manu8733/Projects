import { useState, useEffect } from "react";

export default function MusicPopUp() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="music-popup">
     Enjoy some background music while browsing 🎧
      <style jsx>{`
        .music-popup {
          position: fixed;
          bottom: 80px; /* un pic deasupra butonului */
          right: 20px;
          background: #06b6d4;
          color: white;
          padding: 12px 16px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          font-weight: 600;
          z-index: 50;
          animation: fadeInOut 2.5s ease forwards;
          max-width: 250px;
          text-align: center;
        }

        .music-popup::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 75%;
          transform: translateX(-50%);
          border-width: 10px 8px 0 8px;
          border-style: solid;
          border-color: #06b6d4 transparent transparent transparent;
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          10%,
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
      `}</style>
    </div>
  );
}
