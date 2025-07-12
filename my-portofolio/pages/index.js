import ParticlesBackground from "../components/ParticlesBackground";
import NavButton from "../components/NavButton";
import ProjectsSlider from "../components/ProjectsSlider";
import SkillsSlider from "../components/SkillsSlider";
import ResponsiveStarsBackground from "../components/ResponsiveStarsBackground";

export default function Home() {
  return (
  
    <>
      <NavButton />
      <ParticlesBackground />
 <ResponsiveStarsBackground />
      <main className="relative z-10 bg-hidden  text-white">
        <section className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8 space-y-6">
          {/* poza ta */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#00ADB5] shadow-lg">
            <img
              src="/PozaAlbum.jpg"
              alt="Emanuel Bejerea"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to my portfolio
          </h1>
          <p className="text-lg md:text-xl mb-6">
            I craft digital experiences that connect people & ideas.
          </p>
         <button
  onClick={() => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-[#00ADB5] text-black px-6 py-2 rounded hover:scale-105 transition"
>
  See my work
</button>



        </section>

        {/* About Me */}
        <section className="max-w-4xl mx-auto py-20 px-4" id="about">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
           I’m Emanuel, a curious and open-minded student passionate about technology and creativity. I thrive in diverse teams, learn from feedback, and believe great projects come from collaboration and openness.
          </p>
          <ul className="mt-6 space-y-2 text-[#00ADB5]">
            
          </ul>
        </section>
        {/* Skills */}
       <SkillsSlider />

        {/* Projects */}
        <ProjectsSlider />

        {/* Contact */}
        <section className="text-center py-20" id="contact">
          <h2 className="text-3xl font-semibold mb-4">Let’s Talk</h2>
          <p className="mb-6">Find me here:</p>

          <div className="flex justify-center gap-10 text-5xl">
            <a
              href="https://github.com/Manu8733/Projects"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="cursor-pointer transition transform hover:scale-125 hover:text-[#00FFC8] pulse"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/emanuel-bejerea-9b1b682bb/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="cursor-pointer transition transform hover:scale-125 hover:text-[#00FFC8] pulse"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ebejerea@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
              className="cursor-pointer transition transform hover:scale-125 hover:text-[#00FFC8] pulse"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-6">
          Built by Manu © 2025
        </footer>
      </main>
    </>
    
  );
}
