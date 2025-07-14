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
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            const section = document.getElementById("about");
            section?.scrollIntoView({ behavior: "smooth" });
            }}
            >
              About Me
              </a>


          <a
            href="#focus"
            className="block px-2 py-1 rounded hover:bg-white/10 transition"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              const section = document.getElementById("focus");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Focusing on
          </a>
          <a
            href="#skills"
            className="block px-2 py-1 rounded hover:bg-white/10 transition"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              const section = document.getElementById("skills");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block px-2 py-1 rounded hover:bg-white/10 transition"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              const section = document.getElementById("projects");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Live Demos
          </a>
          <a
          href="#volunteer"
          className="block px-2 py-1 rounded hover:bg-white/10 transition"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            const section = document.getElementById("volunteer");
            section?.scrollIntoView({ behavior: "smooth" });
            }}
            >
              Volunteering
              </a>
          <a
            href="#contact"
            className="block px-2 py-1 rounded hover:bg-white/10 transition"
            onClick={(e) => { 
              e.preventDefault();
              setOpen(false);
              const section = document.getElementById("contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </a>
        </div>
      )}
    </div>
  );
}
