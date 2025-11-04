import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  // Handle navigation between routes
  const handleHomeScroll = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      // Wait for homepage render before scrolling
      setTimeout(() => scrollToSection(sectionId), 700);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-lg shadow-lg shadow-emerald-500/10 py-3"
          : "bg-black/80 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 text-white">
       {/* Logo */}
<div
  onClick={() => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }}
  className="text-2xl font-extrabold tracking-wider cursor-pointer flex items-center gap-1"
>
  <span className="text-emerald-500">CODIVA</span>
  <span>SYSTEMS</span>
</div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleHomeScroll("hero")}
            className="text-sm font-medium tracking-wide hover:text-emerald-500 transition-colors"
          >
            WHAT WE DO
          </button>

          <button
            onClick={() => navigate("/company")}
            className="text-sm font-medium tracking-wide hover:text-emerald-500 transition-colors"
          >
            COMPANY
          </button>

          <button
            onClick={() => handleHomeScroll("projects")}
            className="text-sm font-medium tracking-wide hover:text-emerald-500 transition-colors"
          >
            PROJECTS
          </button>

          <button
  onClick={() => {
    setIsMobileMenuOpen(false);
    navigate("/letstalk");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="flex items-center gap-2 text-sm font-semibold bg-emerald-500 px-5 py-2.5 rounded-full hover:bg-white hover:text-black hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-300"
>
  LET'S TALK <ArrowRight size={16} />
</button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emerald-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-5 space-y-4 text-white">
          <button
            onClick={() => handleHomeScroll("hero")}
            className="block w-full text-left text-sm font-medium tracking-wide hover:text-emerald-500 transition-colors"
          >
            WHAT WE DO
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              navigate("/company");
            }}
            className="block w-full text-left text-sm font-medium tracking-wide hover:text-emerald-500 transition-colors"
          >
            COMPANY
          </button>

          <button
            onClick={() => handleHomeScroll("projects")}
            className="block w-full text-left text-sm font-medium tracking-wide hover:text-emerald-500 transition-colors"
          >
            PROJECTS
          </button>

          <button
  onClick={() => {
    setIsMobileMenuOpen(false);
    navigate("/letstalk");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="flex items-center gap-2 text-sm font-semibold bg-emerald-500 px-4 py-2 rounded-full hover:bg-white hover:text-black hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 w-full justify-center"
>
  LET'S TALK <ArrowRight size={16} />
</button>


        </div>
      )}
    </nav>
  );
};

export default Navbar;
