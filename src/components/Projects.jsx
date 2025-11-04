"use client";
import React from "react";

const featuredProjects = [
  {
    title: "Springfall",
    subtitle: "International educational organisation.",
    country: "US",
    image: "/images/p1.webp",
    link: "https://spring-fall.vercel.app/",
  },
  {
    title: "Sunshine Export",
    subtitle: "International spices business LLC.",
    country: "UK",
    image: "/images/p4.webp",
    link: "https://sunshineexportassam.com/",
  },
  {
    title: "GearXpert",
    subtitle: "All auto parts in one place.",
    country: "UK",
    image: "/images/p2.webp",
    link: "https://speedlineautoparts.netlify.app/",
  },
  {
    title: "TekiskyMart",
    subtitle: "E-commerce web app for businesses.",
    country: "India",
    image: "/images/p3.webp",
    link: "https://tekiskymart.com/",
  },
  {
    title: "Tekisky",
    subtitle: "Official Website of Tekisky Mart.",
    country: "India",
    image: "/images/p5.webp",
    link: "https://tekisky.com/",
  },
  {
    title: "GoGroove",
    subtitle: "E-commerce business platform.",
    country: "India",
    image: "/images/p6.webp",
    link: "/",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Featured{" "}
          <span className="text-emerald-500 inline-flex items-center">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of our best digital products and experiences — built to
          inspire, perform, and scale.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-10 md:gap-20`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover md:h-[450px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold mb-3 text-white">
                {project.title}{" "}
                <span className="text-gray-400 font-medium">– {project.subtitle}</span>
              </h3>
              <p className="text-gray-500 text-sm mb-6">{project.country}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
              >
                Visit Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
