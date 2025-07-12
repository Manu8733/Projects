import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-20">
      {/* Buton modern */}
      <button
        onClick={() => setOpen(!open)}
        className="backdrop-blur-md bg-white/20 text-white p-3 rounded-full shadow-md hover:bg-white hover:text-black transition-all duration-300"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Pop-up modern */}
      {open && (
        <div
          className="absolute right-0 mt-4 bg-black/80 text-white rounded-xl shadow-2xl p-4 space-y-3 border border-white/10 animate-slide-in"
          style={{ minWidth: "160px" }}
        >
          <a
            href="#about"
            className="block px-2 py-1 rounded hover:bg-white/10 transition"
            onClick={() => setOpen(false)}
          >
            About Me
          </a>
          <a
            href="#projects"
            className="block px-2 py-1 rounded hover:bg-white/10 transition"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-2 py-1 rounded hover:bg-white/10 transition"
            onClick={() => setOpen(false)}
          >
            Contact Me
          </a>
        </div>
      )}
    </div>
  );
}
