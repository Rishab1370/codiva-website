import { Mail, Phone, MapPin, Send } from "lucide-react";

const GetInTouch = () => {
  return (
    <>
      <section
        id="contact"
        className="py-20 bg-zinc-950 text-center border-t border-emerald-500/10"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            Let’s collaborate to build something extraordinary. Reach out to us
            for project discussions, partnerships, or just to say hello!
          </p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="flex flex-col items-center space-y-3 hover:text-emerald-400 transition-all">
              <Mail className="text-emerald-400" size={30} />
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <p className="text-gray-400">info@codivasystems.com</p>
            </div>

            <div className="flex flex-col items-center space-y-3 hover:text-emerald-400 transition-all">
              <Phone className="text-emerald-400" size={30} />
              <h3 className="text-lg font-semibold text-white">Phone</h3>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>

            <div className="flex flex-col items-center space-y-3 hover:text-emerald-400 transition-all">
              <MapPin className="text-emerald-400" size={30} />
              <h3 className="text-lg font-semibold text-white">Address</h3>
              <p className="text-gray-400">Lucknow, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="max-w-3xl mx-auto bg-white/[0.03] border border-emerald-500/20 p-8 rounded-2xl shadow-lg shadow-emerald-500/10 backdrop-blur-md mb-20">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg w-full bg-black/60 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg w-full bg-black/60 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="mt-6 p-3 w-full rounded-lg bg-black/60 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 outline-none"
            ></textarea>
            <button className="mt-8 bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-8 rounded-full flex items-center justify-center mx-auto gap-2 transition-all shadow-md shadow-emerald-500/30 hover:scale-105">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* 🌍 Full-Width Google Map */}
      <div className="w-full">
        <iframe
          title="Codiva Systems Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6893642837064!2d80.94547331501538!3d26.84890208315657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd4f2b812e41%3A0xb93304c8e307a2c5!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1699806123456!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[500px] md:h-[550px]"
        ></iframe>
      </div>
    </>
  );
};

export default GetInTouch;
