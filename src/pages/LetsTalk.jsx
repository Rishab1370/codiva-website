"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LetsTalk() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle budget selection
  const handleBudgetSelect = (budget) => {
    setFormData({ ...formData, budget });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("✅ Project submitted successfully!");
        setFormData({ name: "", email: "", phone: "", budget: "" });
      } else {
        setMessage("❌ " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 py-24">
      
      {/* LEFT SECTION - TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-left space-y-4 max-w-xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          LET’S CREATE <br />
          <span className="text-emerald-400">SOMETHING</span> <br />
          <span className="text-emerald-400">EPIC</span> <br />
          TOGETHER.
        </h1>
      </motion.div>

      {/* RIGHT SECTION - FORM */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full max-w-lg bg-[#101010] border border-gray-800 rounded-3xl p-10 shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)] mt-12 lg:mt-0"
      >
        <h2 className="text-3xl font-bold mb-2">START A PROJECT</h2>
        <p className="text-gray-400 mb-8">
          Share your ideas and let’s build something amazing.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full bg-transparent border-b border-gray-700 focus:border-emerald-400 outline-none py-2 text-white placeholder-gray-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full bg-transparent border-b border-gray-700 focus:border-emerald-400 outline-none py-2 text-white placeholder-gray-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Your Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full bg-transparent border-b border-gray-700 focus:border-emerald-400 outline-none py-2 text-white placeholder-gray-500 transition"
            />
          </div>

          {/* BUDGET BUTTONS */}
          <div className="pt-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">
              PROJECT BUDGET
            </h3>
            <div className="flex flex-wrap gap-3">
              {["$1K – $5K", "$5K – $10K", "$10K – $25K", "$25K+", "Other"].map(
                (budget, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleBudgetSelect(budget)}
                    className={`px-5 py-2 border rounded-full transition-all duration-300 ${
                      formData.budget === budget
                        ? "bg-emerald-500 text-black border-emerald-500"
                        : "border-gray-700 text-gray-300 hover:bg-emerald-500 hover:text-black"
                    }`}
                  >
                    {budget}
                  </button>
                )
              )}
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-emerald-500 text-black font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Project"}
            </button>
          </div>
        </form>

        {message && (
          <p className="text-center mt-6 text-sm text-gray-300">{message}</p>
        )}
      </motion.div>
    </section>
  );
}
