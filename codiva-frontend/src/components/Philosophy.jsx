"use client";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="font-sans text-black bg-white">

      {/* ✅ PHILOSOPHY SECTION (Dark Theme) */}
      <section
        id="philosophy"
        className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6 lg:px-16 py-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-emerald-400 tracking-wide">
          Our Philosophy
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl w-full">
          {/* Left: Video Section */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg shadow-emerald-500/20">
            <video
              src="/videos/philosophy.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[350px] lg:h-[420px] object-cover scale-110 hover:scale-100 transition-transform duration-700"
            />
          </div>

          {/* Right: Text Section */}
          <div className="w-full lg:w-1/2 text-zinc-300 text-lg leading-relaxed text-justify">
            <p className="mb-4">
              At{" "}
              <span className="text-emerald-400 font-semibold">Codiva Systems</span>,
              our developers collaborate closely with designers, strategists, and
              analysts to craft tailor-made solutions — never cookie-cutter ones.
            </p>

            <p className="mb-4">
              We translate design precision into clean, functional code without
              shortcuts or compromises. Every line of code reflects creativity,
              clarity, and craftsmanship.
            </p>

            <p>
              We’re driven by{" "}
              <span className="text-emerald-400 font-semibold">
                user-centered design
              </span>{" "}
              — the kind that boosts engagement, productivity, and revenue. Our
              expertise is remarkable, but our hunger for innovation keeps us
              pushing beyond our previous achievements.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl">
          <p className="italic text-xl text-zinc-400">
            “Innovation isn’t a destination — it’s our daily mindset.”
          </p>
        </div>
      </section>

      {/* ✅ HERO SECTION */}
      <section className="text-center py-24 px-6">
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Building High-Quality Digital Products
        </p>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          We craft seamless digital experiences with cutting-edge technology,
          ensuring performance, design, and user experience at the highest
          level.
        </p>
        <div className="w-full flex justify-center py-8">
          <Link to="/letstalk">
            <button
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-black rounded-full shadow-md transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-pulse opacity-50"></span>
            </button>
          </Link>
        </div>
      </section>

      {/* ✅ OUR PROCESS SECTION */}
      <section className="py-20 px-6 text-center flex flex-col items-center">
        <p className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Our Process
        </p>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Our structured approach ensures that every product we develop is
          innovative, scalable, and user-centric.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-3">
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition w-full sm:w-64">
            <span className="text-4xl font-bold text-gray-300">01</span>
            <h3 className="text-xl font-semibold mt-4">Discover</h3>
            <p className="text-gray-600 mt-2">
              We learn about your goals, users, and challenges.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition w-full sm:w-64">
            <span className="text-4xl font-bold text-gray-300">02</span>
            <h3 className="text-xl font-semibold mt-4">Design</h3>
            <p className="text-gray-600 mt-2">
              Wireframes, prototypes, and pixel-perfect UIs.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition w-full sm:w-64">
            <span className="text-4xl font-bold text-gray-300">03</span>
            <h3 className="text-xl font-semibold mt-4">Develop</h3>
            <p className="text-gray-600 mt-2">
              Clean, tested, and scalable code delivered iteratively.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition w-full sm:w-64">
            <span className="text-4xl font-bold text-gray-300">04</span>
            <h3 className="text-xl font-semibold mt-4">Deploy</h3>
            <p className="text-gray-600 mt-2">
              Launched smoothly with monitoring and support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
