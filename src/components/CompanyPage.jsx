"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Globe, Clock, Users, Award } from "lucide-react";

export default function CompanyPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Hero parallax transformations
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* --- HERO --- */}
      <motion.section
        ref={heroRef}
        style={{ scale, opacity }}
        className="relative h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-6xl md:text-8xl font-bold leading-tight"
        >
          Creativity meets <br /> Technology
        </motion.h1>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black pointer-events-none" />
      </motion.section>

      {/* --- OUR GOAL --- */}
      <section className="py-32 text-center bg-neutral-950 px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl font-bold mb-6"
        >
          OUR GOAL
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          Since our inception, we've been dedicated to helping businesses thrive
          with innovative solutions, captivating brands, and transformative
          digital products. Each year, our expertise deepens — enabling us to
          craft products that exceed expectations and leave a lasting impact.
        </motion.p>
      </section>

      {/* --- BENEFITS --- */}
      <section className="py-32 bg-white text-black px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-6xl font-bold mb-12"
        >
          Benefits of working <br /> with us
        </motion.h2>

        <motion.div
          variants={{
            show: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto mt-10"
        >
          {[
            {
              icon: <Clock size={40} />,
              title: "Time zones ain’t no thing",
              desc: "Wherever you are, it’ll feel like we’re right next door. We deliver seamless solutions that transcend time zones.",
            },
            {
              icon: <Users size={40} />,
              title: "Collaborative Team",
              desc: "Our experts work hand in hand with you to deliver meaningful impact and creative outcomes.",
            },
            {
              icon: <Globe size={40} />,
              title: "Global Experience",
              desc: "We’ve worked with clients across continents, tailoring strategies that resonate universally.",
            },
            {
              icon: <Award size={40} />,
              title: "Quality Driven",
              desc: "We maintain a high bar for creativity and quality across all digital experiences we deliver.",
            },
          ].map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg hover:shadow-gray-200/40 transition-all"
            >
              <div className="flex flex-col items-center gap-4">
                {b.icon}
                <h3 className="text-xl font-semibold">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
