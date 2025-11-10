import React, { useEffect, useState } from "react";

const Stats = () => {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const duration = 2000; // animation duration (ms)
    const frameRate = 30; // frames per second
    const totalFrames = Math.round(duration / (1000 / frameRate));
    let frame = 0;

    const targetValues = { projects: 100, clients: 50, satisfaction: 99 };

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setStats({
        projects: Math.floor(targetValues.projects * progress),
        clients: Math.floor(targetValues.clients * progress),
        satisfaction: Math.floor(targetValues.satisfaction * progress),
      });

      if (frame === totalFrames) clearInterval(timer);
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="stats"
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white border-t border-emerald-500/10"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-emerald-500">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Projects */}
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-extrabold text-emerald-400 transition-all">
              {stats.projects}+
            </h3>
            <p className="text-gray-400 mt-2 text-sm tracking-wide">
              Projects Delivered
            </p>
          </div>

          {/* Clients */}
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-extrabold text-emerald-400 transition-all">
              {stats.clients}+
            </h3>
            <p className="text-gray-400 mt-2 text-sm tracking-wide">
              Happy Clients
            </p>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-extrabold text-emerald-400">24/7</h3>
            <p className="text-gray-400 mt-2 text-sm tracking-wide">
              Support Available
            </p>
          </div>

          {/* Satisfaction */}
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-extrabold text-emerald-400 transition-all">
              {stats.satisfaction}%
            </h3>
            <p className="text-gray-400 mt-2 text-sm tracking-wide">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
