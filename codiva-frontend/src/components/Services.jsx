import React, { useState, useEffect, useRef } from "react";
import { Code, Globe, Smartphone, Palette, Cloud, Wrench } from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(0);
  const servicesRef = useRef(null);

  const services = [
    {
      icon: <Code size={36} className="text-emerald-500 mb-4" />,
      title: "Custom Software Development",
      description:
        "Build powerful, scalable applications tailored to your business needs with our expert development team.",
    },
    {
      icon: <Globe size={36} className="text-emerald-500 mb-4" />,
      title: "Web Development",
      description:
        "Create stunning, responsive websites that deliver exceptional user experiences across all devices.",
    },
    {
      icon: <Smartphone size={36} className="text-emerald-500 mb-4" />,
      title: "Mobile App Development",
      description:
        "Develop native and cross-platform mobile applications that engage users and boost productivity.",
    },
    {
      icon: <Palette size={36} className="text-emerald-500 mb-4" />,
      title: "UI/UX Design",
      description:
        "Design beautiful, intuitive interfaces that users love and that drive business results.",
    },
    {
      icon: <Cloud size={36} className="text-emerald-500 mb-4" />,
      title: "Cloud Solutions",
      description:
        "Migrate and optimize your infrastructure with secure, scalable cloud computing solutions.",
    },
    {
      icon: <Wrench size={36} className="text-emerald-500 mb-4" />,
      title: "Maintenance & Support",
      description:
        "Keep your applications running smoothly with our 24/7 maintenance and technical support.",
    },
  ];

  // Trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // staggered reveal for service cards
          services.forEach((_, i) => {
            setTimeout(
              () =>
                setVisibleCards((prev) => Math.min(prev + 1, services.length)),
              i * 200
            );
          });
        }
      },
      { threshold: 0.3 }
    );

    if (servicesRef.current) observer.observe(servicesRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header with transition */}
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-500">
            Our Core Services
          </h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            Delivering cutting-edge solutions that transform businesses and
            drive digital excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white/[0.02] border border-emerald-500/20 rounded-3xl p-8 transition-all duration-700 ease-out transform
                hover:bg-emerald-500/10 hover:border-emerald-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-500/20
                ${
                  visibleCards > index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
