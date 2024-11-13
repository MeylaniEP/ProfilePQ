"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Profile from "../../../public/profile.png";
import Urban from "../../../public/urban.png";
import Indoventure from "../../../public/indoventure.png";
import Watch from "../../../public/watch.png";
import Peduli from "../../../public/peduli.png";

export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A sleek and responsive portfolio showcasing my skills and projects. Emphasis on modern design and performance.",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
      image: Profile,
      link: "https://meylanieka.vercel.app/",
    },
    {
      title: "Company Profile",
      description:
        "A robust e-commerce platform with user-friendly design, optimized for conversions.",
      technologies: ["React", "JavaScript"],
      image: Urban,
      link: "https://urban-walk-kelompok12-dibis.vercel.app/",
    },
    {
      title: "Online Course",
      description:
        "Collaborative task manager with real-time syncing, perfect for productivity.",
      technologies: ["Bootstrap", "React", "JavaScript"],
      image: Peduli,
      link: "https://peduli-belajar.vercel.app/",
    },
    {
      title: "Catalog Movie",
      description:
        "Headless CMS-driven blog platform allowing easy content management and customization.",
      technologies: ["React", "Redux", "Node.js", "TMDB API"],
      image: Watch,
      link: "https://challenge-6-redux-state-management-redux-thunk-movie-list.vercel.app/",
    },
    {
      title: "Copywriting & Google Analys",
      description:
        "A dynamic data visualization dashboard for actionable business insights.",
      technologies: ["React", "JavaScript"],
      image: Indoventure,
      link: "https://indo-venture-kelompok12-digital-bisnis.vercel.app/",
    },
  ];

  return (
    <div id="project" className="bg-gray-900 py-16 text-white">
      <div className="max-w-6xl px-6 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              style={{ maxWidth: "280px", margin: "0 auto" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image.src}  // Updated to use imported images
                  alt={project.title}
                  className="w-full h-36 object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-purple-400 mb-2 transition duration-300 hover:text-purple-500">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-2 text-sm">{project.description}</p>

                <div className="mb-2 text-xs">
                  <span className="font-semibold">Technologies:</span>{" "}
                  {project.technologies.join(", ")}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-purple-500 text-white font-semibold px-3 py-1 rounded text-xs hover:bg-purple-600 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
