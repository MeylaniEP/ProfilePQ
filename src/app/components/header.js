"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Toggle menu untuk hamburger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Update state isScrolled berdasarkan posisi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // ubah menjadi true jika scroll lebih dari 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update section aktif berdasarkan hash di URL
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // untuk memastikan section aktif saat halaman pertama kali dimuat
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Menutup hamburger menu setelah item diklik
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center lg:py-6 lg:px-52 px-4 py-4 rounded-b-3xl transition-colors duration-300 ${
        isScrolled ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      <h3 className="text-white flex gap-2 text-3xl md:text-4xl font-semibold">
        <div>
          <span className="text-yellow-600">P</span>ijar
        </div>
        <div>
          <span className="text-yellow-600">P</span>ahlawan
        </div>
      </h3>

      {/* Tombol Hamburger */}
      <button onClick={toggleMenu} className="block lg:hidden text-white text-3xl">
        &#9776;
      </button>

      {/* Menu Navigasi */}
      <nav
        className={`lg:flex lg:space-x-8 absolute lg:static w-full justify-end ${
          menuOpen ? "block" : "hidden"
        } ${isScrolled ? "bg-black" : "bg-transparent"} lg:bg-transparent`}
      >
        <ul className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 p-4 lg:p-0 text-white mt-44 lg:mt-0 text-end mx-12">
          {["#home", "#about", "#skills", "#project", "#contact"].map((hash, index) => {
            const item =
              hash.substring(1).charAt(0).toUpperCase() + hash.substring(2);
            return (
              <li key={hash}>
                <a
                  href={hash}
                  onClick={closeMenu} // Menutup menu saat item diklik
                  className={`hover:text-yellow-600 text-lg lg:text-xl font-medium ${
                    activeSection === hash
                      ? "text-yellow-600 border-b-2 border-yellow-600"
                      : "text-white"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
