"use client";
import { motion } from "framer-motion";
import { Globe, Clock, Settings, Zap } from "lucide-react";
import Footer from "../components/Footer";


export default function Company() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const benefits = [
    {
      title: "Time zones ain’t no thing",
      text: "Wherever you are, it’ll feel like we’re right next door. With years of expertise, we deliver seamless solutions that transcend time zones and boundaries.",
      icon: <Clock size={64} className="text-cyan-400" />,
    },
    {
      title: "Impossible? We’re on it",
      text: "At our agency, 'impossible' isn’t an option. We bring your vision to life exactly as imagined—no shortcuts, no compromises, just pure innovation.",
      icon: <Zap size={64} className="text-blue-400" />,
    },
    {
      title: "Flexible work terms",
      text: "We operate within a flexible Time and Materials framework, ensuring every project stays on track and aligned with your goals and budget.",
      icon: <Settings size={64} className="text-green-400" />,
    },
    {
      title: "Full spectrum of services",
      text: "From logo creation and UI/UX design to full-scale development and marketing—we deliver end-to-end solutions tailored to your needs.",
      icon: <Globe size={64} className="text-purple-400" />,
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden transform-gpu">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-6 bg-black">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-8xl font-extrabold leading-tight tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Creativity
          </span>{" "}
          meets <br /> Technology
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="text-gray-300 mt-6 max-w-2xl text-lg"
        >
          Empowering innovation through strategy, design, and code.
        </motion.p>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
      </section>

      {/* ============ COMPANY VISUAL SECTION ============ */}
      <section className="relative w-full px-2 lg:px-14 py-16 md:py-28 bg-[#0d0d0d]">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-[#ffffff20] blur-[150px] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
          <div className="group relative overflow-hidden rounded-3xl">
            <motion.img
              src="/images/team.webp"
              alt="Company Team"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full lg:h-screen object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000a0] via-transparent to-[#000000]"></div>
          </div>
        </div>
      </section>

      {/* ============ OUR GOAL SECTION ============ */}
      <section className="py-32 text-center bg-neutral-950 px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-8"
        >
          OUR GOAL
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-16"
        >
          Since our inception, we’ve been driven by one mission — to empower
          businesses with digital experiences that are not only functional but
          beautiful, scalable, and impactful. Every line of code, every design
          element, and every strategy we deliver is crafted for real-world
          transformation.
        </motion.p>

        {/* --- Staggered Images --- */}
        <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-10 px-4 md:px-20 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 lg:w-1/3 rounded-3xl overflow-hidden shadow-xl mt-[-40px]"
          >
            <img
              src="/images/goal1.webp"
              alt="Working on tablet"
              className="w-full h-[550px] object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 lg:w-1/3 rounded-3xl overflow-hidden shadow-xl mt-[60px]"
          >
            <img
              src="/images/goal2.webp"
              alt="Team collaboration"
              className="w-full h-[550px] object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* ============ BENEFITS SECTION ============ */}
      <section className="py-32 bg-white text-black px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-8xl md:text-6xl font-extrabold mb-20 bg-gradient-to-r from-black to-cyan-500 bg-clip-text text-transparent"
        >
          Benefits of Working With Us
        </motion.h2>

        <div className="space-y-24 max-w-7xl mx-auto">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "md:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`flex justify-center ${
                  index % 2 === 1 ? "md:order-last" : ""
                }`}
              >
                <div className="p-5 bg-black rounded-3xl text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-500">
                  {item.icon}
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ TECH STACK (Dark Themed) ============ */}
      <section className="relative py-24 bg-gradient-to-b from-[#050505] to-[#0f0f0f] overflow-hidden border-t border-gray-800">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Our Technology Stack
        </h2>

        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[
              { name: "HTML5", icon: "/icons/html5.svg" },
              { name: "CSS3", icon: "/icons/css.svg" },
              { name: "JavaScript", icon: "/icons/javascript.svg" },
              { name: "React", icon: "/icons/react.svg" },
              { name: "Node.js", icon: "/icons/nodejs.svg" },
              { name: "Express.js", icon: "/icons/express.svg" },
              { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
              { name: "MongoDB", icon: "/icons/mongodb.svg" },
              { name: "Next.js", icon: "/icons/nextdotjs.svg" },
              { name: "GitHub", icon: "/icons/github.svg" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center mx-10 space-x-3 transition-transform hover:scale-110"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-20 h-50 object-contain transition-all duration-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                />
                <span className="text-lg font-medium text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate row for seamless infinite scroll */}
          <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[
              { name: "HTML5", icon: "/icons/html5.svg" },
              { name: "CSS3", icon: "/icons/css.svg" },
              { name: "JavaScript", icon: "/icons/javascript.svg" },
              { name: "React", icon: "/icons/react.svg" },
              { name: "Node.js", icon: "/icons/nodejs.svg" },
              { name: "Express.js", icon: "/icons/express.svg" },
              { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
              { name: "MongoDB", icon: "/icons/mongodb.svg" },
              { name: "Next.js", icon: "/icons/nextdotjs.svg" },
              { name: "GitHub", icon: "/icons/github.svg" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center mx-10 space-x-3 transition-transform hover:scale-110"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-20 h-50 object-contain transition-all duration-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                />
                <span className="text-lg font-medium text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
