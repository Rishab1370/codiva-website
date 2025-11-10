import React from "react";
import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-gray-300 py-16 px-6 lg:px-20 border-t border-emerald-600/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* 🌐 Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-wide">
            <span className="text-emerald-500">CODIVA</span> SYSTEMS
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Empowering digital transformation through innovation, design, and
            intelligent engineering.
          </p>
        </div>

        {/* 🧭 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            </li>
            <li>
              <a href="/company" className="hover:text-emerald-400 transition-colors">Company</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* 🧩 Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Expertise</h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>AI & Automation</li>
            <li>Cloud Infrastructure</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* ✉️ Connect */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-emerald-400 transition-colors"><Github size={20} /></a>
            <a href="mailto:info@codivasystems.com" className="hover:text-emerald-400 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* 🔸 Divider + Bottom Bar */}
      <div className="mt-12 border-t border-zinc-700 pt-6 text-center text-sm text-gray-500">
        <p>
          © 2025{" "}
          <span className="text-emerald-400 font-semibold">Codiva Systems</span>.
          All Rights Reserved.
        </p>
        <p className="text-xs mt-1 italic text-gray-400">
          “Building Tomorrow’s Digital Solutions Today.”
        </p>
      </div>

      {/* ✨ Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
