import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useState } from "react";
import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
import NavButton from "../components/NavButton";
import ProjectsSlider from "../components/ProjectsSlider";
import SkillsSlider from "../components/SkillsSlider";
import VolunteerSlider from "../components/VolunteerSlider";
import MusicPlayer from "../components/MusicPlayer";
import MusicPopUp from "../components/MusicPopUp";
import ContactModal from "../components/ContactModal";

export default function Home() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Emanuel Bejerea - Portfolio</title>
        <meta
          name="description"
          content="Emanuel Bejerea - Curious student passionate about technology and creativity. Shaping the future, one project at a time."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MusicPlayer />
      <ContactModal/>
      <MusicPopUp />
      <Analytics/>
      <SpeedInsights/>
      <NavButton />
      <ParticlesBackground />
      {/* Doar una dintre animații — opțional */}
      <main className="relative z-10 bg-transparent text-white">
        <section className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8 space-y-6">
          {/* poza */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#00ADB5] shadow-lg">
            <img
              src="/PozaAlbum.jpg"
              alt="Emanuel Bejerea"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            Welcome to my portfolio
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Shaping the future, one project at a time.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-transparent border border-[#00ADB5] text-[#00ADB5] px-6 py-2 rounded hover:scale-105 transition"
            >
              See my work
            </button>

            <button
             onClick={() => {
              window.open("/Emanuel_Bejerea_Resume.pdf", "_blank");
              }}
              className="bg-transparent border border-[#00ADB5] text-[#00ADB5] px-6 py-2 rounded hover:scale-105 transition"
            >
              Download my CV
            </button>
          </div>
        </section>

        {/* About Me */}
        <section className="max-w-4xl mx-auto py-20 px-4" id="about">
          <h2 className="text-3xl font-semibold mb-4 text-center ">About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m Emanuel, a technology enthusiast with experience in software testing and web development. I enjoy solving problems, learning new technologies, and collaborating with teams to build reliable and user-friendly digital products.
          </p>
          <ul className="mt-6 space-y-2 text-[#00ADB5] list-disc list-inside">
            <li>Curiosity-driven learning</li>
            <li>Collaboration & teamwork</li>
            <li>Attention to detail</li>
            <li>Adapting to challenges</li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto py-20 px-4" id="focus">
          <h2 className="text-3xl font-semibold mb-10 text-white text-center">
            Focusing On
          </h2>
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 justify-center">
            {/* Unreal Engine 5 */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 text-xl font-semibold text-white">
                <i className="fas fa-gamepad text-[#00ADB5] text-2xl"></i>
                <span>Unreal Engine 5</span>
              </div>
              <p className="mb-4 text-gray-300">What I want to learn:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Mastering Nanite and Lumen for realistic lighting</li>
                <li>Blueprint scripting for rapid prototyping</li>
                <li>Character animation and physics simulation</li>
                <li>Optimization for performance on multiple platforms</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 text-xl font-semibold text-white">
                <i className="fas fa-laptop-code text-[#00ADB5] text-2xl"></i>
                <span>Web Development</span>
              </div>
              <p className="mb-4 text-gray-300">What I want to learn:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Get advanced with React and Next.js</li>
                <li>API integration and backend basics with Node.js</li>
                <li>State management and hooks</li>
                <li>Responsive design and accessibility</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <SkillsSlider />

        {/* Projects */}
        <ProjectsSlider />

        {/* Volunteer */}
        <VolunteerSlider />

        {/* Contact */}
        <section className="text-center py-20" id="contact">
          <h2 className="text-3xl font-semibold mb-4">Let’s Talk</h2>
          <p className="mb-6">Find me here:</p>

          <div className="flex justify-center gap-10 text-5xl">
            {/* GitHub */}
            <a
              href="https://github.com/Manu8733/Projects"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="cursor-pointer transition transform hover:scale-125 hover:text-[#00FFC8] pulse w-10 h-10 flex items-center justify-center"
            >
              <i className="fab fa-github w-10 h-10"></i>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/emanuel-bejerea-9b1b682bb/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="cursor-pointer transition transform hover:scale-125 hover:text-[#00FFC8] pulse w-10 h-10 flex items-center justify-center"
            >
              <i className="fab fa-linkedin w-10 h-10"></i>
            </a>

            <>
      {/* Iconița Gmail */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsModalOpen(true);
        }}
        title="Trimite-mi un email"
        className="cursor-pointer transition transform hover:scale-125 hover:text-[#00FFC8] pulse w-10 h-10 flex items-center justify-center"
      >
        <i className="fas fa-envelope w-10 h-10"></i>
      </a>

      {/* Modalul de contact */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>

            {/* Linktree */}
         <a
  href="https://linktr.ee/Manu8733"
  target="_blank"
  rel="noopener noreferrer"
  title="Linktree"
  className="linktree-effect transition transform hover:scale-135   pulse w-10 h-10 flex items-center justify-center"
>
  <img
    src="/linktree.webp"
    alt="Linktree"
    className="w-10 h-10"
  />
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
