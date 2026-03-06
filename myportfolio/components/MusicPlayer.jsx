import { useState, useRef } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/music.mp3" loop />
      <button
        onClick={togglePlay}
        className="px-4 py-2 rounded-full shadow-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
}
