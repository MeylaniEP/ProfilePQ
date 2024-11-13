"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Image from "next/image"; 
import Amikom from "../../../public/amikom.png";
import Binar from "../../../public/binar.png";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      id="about"
      className="min-h-screen bg-gray-100 py-16 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12"
          data-aos="fade-up"
        >
          About Me
        </h2>

        <div>
          {/* Timeline Container */}
          <div className="relative flex flex-col items-start">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-6 w-1 bg-gray-300"></div>

            {/* Education Section */}
            <div
              className="relative flex items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-8 h-8 rounded-full bg-purple-400 absolute left-4 shadow-xl flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-white"></span>
              </div>
              <div className="ml-16 text-left">
                <h3 className="text-xl font-semibold text-purple-400">
                  Education
                </h3>
                {/* Amikom Section */}
                <div className="flex items-center mt-4">
                  <Image
                    src={Amikom}
                    alt="Amikom Logo"
                    width={40}
                    height={40}
                  />
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">
                      Amikom University
                    </p>
                    <p className="text-gray-600">
                      Specialized in front-end fundamentals and design.
                    </p>
                    <a
                      href="https://maps.app.goo.gl/frBskSRW9UHBkf5F7"
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      Location
                    </a>
                  </div>
                </div>

                {/* Binar Academy Section */}
                <div className="flex items-center mt-4">
                  <Image
                    src={Binar}
                    alt="Binar Academy Logo"
                    width={40}
                    height={40}
                  />
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">Binar Academy</p>
                    <p className="text-gray-600">
                      Focused on advanced web development techniques.
                    </p>

                    <a
                      href="https://maps.app.goo.gl/TuESgZVztoY1xEmN8"
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      Location
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* First Project Section */}
            <div
              className="relative flex items-center mt-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-8 h-8 rounded-full bg-purple-400 absolute left-4 shadow-xl flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-white"></span>
              </div>
              <div className="ml-16 text-left">
                <h3 className="text-xl font-semibold text-purple-400">
                  First Project
                </h3>

                {/* Binar Academy Section */}
                <div className="flex items-center mt-4">
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">Portofolio</p>
                    <p className="text-gray-600">
                      Built my first website using HTML, CSS, and JavaScript. It
                      was a simple portfolio site but sparked my passion for web
                      development.
                    </p>
                    <p className="text-gray-700">
                      Technologies : Tailwind CSS, Next.js, JavaScript
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Development Journey Section */}
            <div
              className="relative flex items-center mt-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-8 h-8 rounded-full bg-purple-400 absolute left-4 shadow-xl flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-white"></span>
              </div>
              <div className="ml-16 text-left">
                <h3 className="text-xl font-semibold text-purple-400">
                  Web Development Journey
                </h3>

                {/* Binar Academy Section */}
                <div className="flex items-center mt-4">
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">2021 - Now</p>
                    <p className="text-gray-600">
                      Started with HTML, CSS, and JavaScript, and expanded to
                      Tailwind CSS and Next.js. I'm passionate about crafting
                      responsive, user-friendly web experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Timeline Container */}
          <div className="relative flex flex-col items-start">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-6 w-1 bg-gray-300"></div>

            {/* Feelance Section */}
            <div
              className="relative flex items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-8 h-8 rounded-full bg-purple-400 absolute left-4 shadow-xl flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-white"></span>
              </div>
              <div className="ml-16 text-left">
                <h3 className="text-xl font-semibold text-purple-400">
                  Freelancing
                </h3>

                {/* Freelance Section */}
                <div className="flex items-center mt-4">
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">Hiring</p>
                    <p className="text-gray-600">
                      Started freelancing in 2024, focusing on front-end
                      development to deliver engaging and visually appealing
                      user interfaces
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Projects Section */}
            <div
              className="relative flex items-center mt-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-8 h-8 rounded-full bg-purple-400 absolute left-4 shadow-xl flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-white"></span>
              </div>
              <div className="ml-16 text-left">
                <h3 className="text-xl font-semibold text-purple-400">
                  Current Projects
                </h3>

                {/* Binar Academy Section */}
                <div className="flex items-center mt-4">
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">Data Analyst</p>
                    <p className="text-gray-600">
                      I'm currently working on a data analysis project to
                      predict student performance using Multilayer Perceptron
                      (MLP) with Python.
                    </p>
                    <p className="text-gray-700">Technologies : Python</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Engagements Section */}
            <div
              className="relative flex items-center mt-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-8 h-8 rounded-full bg-purple-400 absolute left-4 shadow-xl flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-white"></span>
              </div>
              <div className="ml-16 text-left">
                <h3 className="text-xl font-semibold text-purple-400">
                  Current Engagements
                </h3>

                {/* Binar Academy Section */}
                <div className="flex items-center mt-4">
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">2021 - Now</p>
                    <p className="text-gray-600">
                      I am currently working part-time as a tutor, teaching
                      elementary and middle school students in core subjects,
                      and guiding students in foundational programming concepts.
                      This role allows me to share my passion for education and
                      technology with younger learners while honing my teaching
                      and mentoring skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining Timeline Items */}
          {/* Add your remaining items here, similar to the previous code */}
        </div>
      </div>
    </div>
  );
}
