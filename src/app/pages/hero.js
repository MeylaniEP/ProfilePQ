"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <div
      id="home"
      className="bg-[url('/pijar.jpeg')] bg-cover bg-center min-h-screen flex items-center lg:p-52 p-4 relative"
    >
      {/* Backdrop dengan warna hitam */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="flex flex-col justify-between text-start relative z-10">
        <h1
          className="text-white text-5xl md:text-6xl font-semibold"
          data-aos="fade-up"
          data-aos-offset="100"
        >
          I ' am
        </h1>
        <div className="flex flex-row gap-2 ">
          <p
            className="text-white text-6xl md:text-7xl font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="text-yellow-600">P</span>ijar
          </p>
          <p
            className="text-white text-6xl md:text-7xl font-bold"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-yellow-600">P</span>ahlawan
          </p>
        </div>
        <p
          className="text-white text-4xl md:text-7xl font-bold mt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="text-yellow-600">Q</span>albu
        </p>
        <p
          className="text-white text-lg md:text-xl mt-6 max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Crafting Scalable and User-Centered Web Solutions, Perfecting Every
          Detail for Optimal Performance.
        </p>
      </div>
    </div>
  );
}
