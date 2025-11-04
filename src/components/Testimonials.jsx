import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Founder, TechNova",
      text: "Codiva Systems delivered a flawless web application that scaled effortlessly. Their team’s professionalism and technical expertise are unmatched.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Verma",
      role: "CTO, FinEdge",
      text: "Exceptional service! The UI/UX design is modern, engaging, and aligned perfectly with our brand identity. Highly recommend them.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohan Gupta",
      role: "CEO, AlphaLabs",
      text: "Working with Codiva Systems was a seamless experience. They exceeded our expectations in every phase — design, development, and delivery.",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-center text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Building trust through impactful collaborations and digital excellence.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-xl transition-all hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-lg"
                />
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-blue-400">{t.name}</h3>
                <p className="text-sm text-gray-400">{t.role}</p>
                <p className="mt-4 text-gray-300 italic leading-relaxed">
                  “{t.text}”
                </p>

                <div className="flex justify-center mt-5 text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} fill="currentColor" size={18} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
