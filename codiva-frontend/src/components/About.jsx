import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Use this instead of next/navigation

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const navigate = useNavigate(); // ✅ Hook from react-router-dom

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={aboutRef}
      className="relative w-full bg-gradient-to-b from-zinc-900 to-zinc-950 pt-20 pb-24 overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* About Content */}
      <div
        className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Enhanced Web Applications
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
          <span className="text-emerald-400 font-semibold">Codiva Systems</span> is a dynamic
          software company committed to delivering innovative and high-performance web solutions.
          We craft seamless digital experiences that enhance business growth, efficiency, and user
          engagement. With a focus on innovation and excellence, Codiva Systems transforms ideas into
          powerful digital solutions tailored to your needs.
        </p>

        <button
          onClick={() => navigate("/company")} // ✅ Navigate using React Router
          className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 hover:scale-105 focus:outline-none border-none"
        >
          ABOUT US
        </button>
      </div>
    </div>
  );
};

export default About;
