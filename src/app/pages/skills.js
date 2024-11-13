"use client";
import { useEffect, useRef } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Skills() {
  const skillRefs = useRef([]);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 200 });

    // Observer to trigger width change when each skill is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            target.style.width = target.dataset.level;
            observer.unobserve(target); // Unobserve once animation starts
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="skills"
      className="min-h-screen bg-gray-100 py-16 flex flex-col items-center"
    > 

      <div className="max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12" data-aos="fade-up">
          My Skills
        </h2>

        {/* Hard Skills Section with Progress Bars */}
        <div className="text-left mb-12" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-purple-400 mb-6">Hard Skills</h3>
          {[
            { skill: "JavaScript", level: "90%" },
            { skill: "HTML5", level: "95%" },
            { skill: "CSS", level: "90%" },
            { skill: "Bootstrap", level: "85%" },
            { skill: "TailwindCSS", level: "90%" },
            { skill: "NextJS", level: "80%" },
            { skill: "NodeJS", level: "75%" },
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between text-gray-700 font-medium mb-1">
                <span>{item.skill}</span>
                <span>{item.level}</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                <div
                  ref={(el) => (skillRefs.current[index] = el)}
                  className="bg-purple-400 h-3 rounded-full transition-all duration-1000 ease-out"
                  data-level={item.level} // Data attribute for target level
                  style={{ width: "0%" }} // Initial width set to 0
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="text-left" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-semibold text-purple-400 mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { skill: "Teamwork", icon: "🤝" },
              { skill: "Project Management", icon: "📈" },
              { skill: "Problem Solving", icon: "🧩" },
              { skill: "Critical Thinking", icon: "🧠" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow-md p-3 rounded-lg text-gray-700 font-medium"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                <span className="mr-2 text-lg">{item.icon}</span>
                {item.skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
