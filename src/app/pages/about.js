"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Image from "next/image";
import Amikom from "../../../public/amikom.png";
import Dicoding from "../../../public/dicoding.jpg";
import Gits from "../../../public/gitSolution.png";

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
              <div className="w-8 h-8 rounded-full bg-yellow-600 absolute left-4 shadow-xl flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-white"></span>
              </div>
              <div className="ml-16 text-left">
                <h3 className="text-xl font-semibold text-yellow-600">
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
                      Specialized in full-stack development with a focus on both
                      front-end and back-end technologies.
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

                {/* Dicoding Section */}
                <div className="flex items-center mt-4">
                  <Image
                    src={Dicoding}
                    alt="Binar Academy Logo"
                    width={40}
                    height={40}
                  />
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">
                      Dicoding Indonesia
                    </p>
                    <p className="text-gray-600">
                      Focused on advanced full-stack web development, including
                      modern frameworks and back-end technologies.
                    </p>

                    <a
                      href="https://maps.app.goo.gl/WRbc4HfsL8XoHt3L8"
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
              <div className="w-8 h-8 rounded-full bg-yellow-600 absolute left-4 shadow-xl flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-white"></span>
              </div>
              <div className="ml-16 text-left">
                <h3 className="text-xl font-semibold text-yellow-600">
                  First Project
                </h3>

                {/* Portfolio Project Section */}
                <div className="flex items-center mt-4">
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">Portfolio</p>
                    <p className="text-gray-600">
                      Built my first full-stack website using HTML, CSS,
                      JavaScript, and integrated backend functionalities with
                      Node.js and Express.
                    </p>
                    <p className="text-gray-700">
                      Technologies: Tailwind CSS, Next.js, Node.js, Express
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Stack Journey Section */}
            <div
              className="relative flex items-center mt-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-600 absolute left-4 shadow-xl flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-white"></span>
              </div>
              <div className="ml-16 text-left">
                <h3 className="text-xl font-semibold text-yellow-600">
                  Full-Stack Journey
                </h3>

                <div className="flex items-center mt-4">
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">2021 - Now</p>
                    <p className="text-gray-600">
                      Started with front-end technologies (HTML, CSS, JS), then
                      progressed to full-stack development with Node.js and
                      MongoDB. I'm passionate about creating scalable and
                      responsive applications.
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

            {/* Freelancing Section */}
            <div
              className="relative flex items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-600 absolute left-4 shadow-xl flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-white"></span>
              </div>
              <div className="ml-16 text-left">
                <h3 className="text-xl font-semibold text-yellow-600">
                  Freelancing
                </h3>

                <div className="flex items-center mt-4">
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">
                      Freelance Projects
                    </p>
                    <p className="text-gray-600">
                      Since 2023, I've been freelancing as a full-stack
                      developer, creating dynamic websites and applications that
                      provide seamless user experiences and powerful back-end
                      functionalities.
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
              <div className="w-8 h-8 rounded-full bg-yellow-600 absolute left-4 shadow-xl flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-white"></span>
              </div>
              <div className="ml-16 text-left">
                <h3 className="text-xl font-semibold text-yellow-600">
                  Current Projects
                </h3>

                <div className="flex items-center mt-4">
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">
                      Information System
                    </p>
                    <p className="text-gray-600">
                      I am currently developing an API for Kaliman, a business
                      information system for a software house. The system aims
                      to streamline operations, manage projects, track client
                      interactions, and improve internal communication. Together
                      with my team, I’m building a reliable back-end
                      infrastructure to support the system’s functionalities and
                      ensure smooth integration with the front-end.
                    </p>
                    <p className="text-gray-700"></p>
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
              <div className="w-8 h-8 rounded-full bg-yellow-600 absolute left-4 shadow-xl flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-white"></span>
              </div>
              <div className="ml-16 text-left">
                <h3 className="text-xl font-semibold text-yellow-600">
                  Current Engagements
                </h3>

                <div className="flex items-center mt-4">
                <Image
                    src={Gits}
                    alt="Amikom Logo"
                    width={40}
                    height={40}
                  />
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">Internship</p>
                    <p className="text-gray-600">
                      I am currently interning at Git Solution, where I work as a Data
                      Analytics Mentor. In this role, I assist with guiding new
                      learners in understanding data analytics concepts, tools,
                      and techniques. I help create learning materials and
                      support the development of analytical skills to enable
                      students to interpret and utilize data effectively for
                      real-world applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining Timeline Items */}
          {/* More sections can be added here as per your development journey */}
        </div>
      </div>
    </div>
  );
}
