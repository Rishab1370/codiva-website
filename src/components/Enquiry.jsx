"use client";
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this import

const Enquiry = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation hook

  const handleLetsTalkClick = () => {
    navigate("/letstalk"); // ✅ Redirect to the Let's Talk page
  };

  return (
    <section
      id="project-inquiry"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 w-full lg:w-1/2 text-left text-white px-8 sm:px-16 lg:px-32 py-20">
        <h2 className="text-6xl lg:text-8xl uppercase font-extrabold leading-tight">
          Have a <br />
          <span className="text-emerald-400">project</span> in mind?
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
          Let’s build something amazing together. Share your ideas, and we'll bring them to life.
        </p>

        {/* ✅ Button that navigates to Let's Talk page */}
        <div className="mt-10">
          <button
            onClick={handleLetsTalkClick} // ✅ Use navigate function
            type="button"
            className="font-bold bg-[#0DA34E] text-white lg:text-2xl px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#12db64] transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
          >
            Let’s Talk
          </button>
        </div>
      </div>

      {/* ✅ Scrolling Marquee Section (unchanged) */}
      <div className="relative w-screen overflow-hidden py-10 bg-[#000] mt-20">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#000] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#000] to-transparent z-10 pointer-events-none"></div>

        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center">
                <p className="text-white text-7xl lg:text-9xl font-extrabold uppercase tracking-wide">
                  Flawless Dev, Smooth UX
                </p>
                <div className="w-[30vw] h-[18vw] lg:w-[15vw] lg:h-[8vw] rounded-[46px] overflow-hidden bg-red-100 mx-10 shadow-amber-200">
                  <video
                    src="/videos/MarqueeVideo-uYrlVSwl.webm"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
