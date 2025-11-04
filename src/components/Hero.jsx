"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

const Hero = () => {
  const videoRef = useRef(null);

  // ▶️ Auto-play / pause when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {});
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector("#hero-section");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero-section"
      className="relative bg-black text-white min-h-[230vh] flex flex-col justify-center items-center px-6 text-center overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      <div className="relative z-10 max-w-7xl flex flex-col justify-center items-center">
        {/* Tagline */}
        <motion.p
          className="text-sm md:text-base tracking-widest text-gray-400 mb-4 uppercase"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          AI + DESIGN + DEVELOPMENT: CREATING THE FUTURE, TODAY.
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          Transforming Ideas Into
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Intelligent Products
          </span>
          <br />
          With AI.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-8 text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1.1}
        >
          Empowering businesses with{" "}
          <span className="text-emerald-400 font-semibold">AI-driven design</span> and{" "}
          <span className="text-cyan-400 font-semibold">cutting-edge development</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1.6}
          className="mt-12"
        >
          <a
            href="/letstalk"
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-10 rounded-full text-xl font-semibold transition-transform transform hover:scale-105 shadow-lg shadow-emerald-500/30"
          >
            Let’s Talk →
          </a>
        </motion.div>

        {/* 🚀 Tech Video Section (taller & cinematic) */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2.2}
          className="mt-28 flex justify-center w-full"
        >
          <div className="w-full lg:h-[105vh] overflow-hidden rounded-3xl relative shadow-[0_0_60px_-10px_rgba(16,185,129,0.4)]">
            <video
              ref={videoRef}
              src="/videos/tech-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-black/20 rounded-3xl pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
